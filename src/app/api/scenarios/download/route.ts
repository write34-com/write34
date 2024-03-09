
import type { NextApiRequest, NextApiResponse } from 'next';
import {db} from "@/app/api/graphql/db";
import {NextRequest, NextResponse} from "next/server";

type ResponseData = {
    message: string
};

const defaultContentSettings: ContentSettings = {
    "parameters": {
        "textGenerationSettingsVersion": 5,
        "temperature": 1.35,
        "max_length": 40,
        "min_length": 1,
        "top_k": 15,
        "top_p": 0.85,
        "top_a": 0.1,
        "typical_p": 1,
        "tail_free_sampling": 0.915,
        "repetition_penalty": 2.8,
        "repetition_penalty_range": 2048,
        "repetition_penalty_slope": 0.02,
        "repetition_penalty_frequency": 0.02,
        "repetition_penalty_presence": 0,
        "repetition_penalty_default_whitelist": true,
        "cfg_scale": 1,
        "cfg_uc": "",
        "phrase_rep_pen": "aggressive",
        "top_g": 0,
        "mirostat_tau": 0,
        "mirostat_lr": 1,
        "order": [
            {
                "id": "cfg",
                "enabled": false
            },
            {
                "id": "top_p",
                "enabled": true
            },
            {
                "id": "tfs",
                "enabled": true
            },
            {
                "id": "temperature",
                "enabled": true
            },
            {
                "id": "top_a",
                "enabled": true
            },
            {
                "id": "top_k",
                "enabled": true
            },
            {
                "id": "typical_p",
                "enabled": false
            },
            {
                "id": "top_g",
                "enabled": false
            },
            {
                "id": "mirostat",
                "enabled": false
            }
        ]
    },
    "preset": "default-carefree",
    "trimResponses": true,
    "banBrackets": true,
    "prefix": "vanilla",
    "dynamicPenaltyRange": false,
    "prefixMode": 0,
    "mode": 0,
    "model": "kayra-v1"
};

const contextDefaults: ContextDefaults = {
    "ephemeralDefaults": [
        {
            "text": "",
            "contextConfig": {
                "prefix": "",
                "suffix": "\n",
                "tokenBudget": 1,
                "reservedTokens": 1,
                "budgetPriority": -10000,
                "trimDirection": "doNotTrim",
                "insertionType": "newline",
                "maximumTrimType": "newline",
                "insertionPosition": -2
            },
            "startingStep": 1,
            "delay": 0,
            "duration": 1,
            "repeat": false,
            "reverse": false
        }
    ],
    "loreDefaults": [
        {
            "text": "",
            "contextConfig": {
                "prefix": "",
                "suffix": "\n",
                "tokenBudget": 1,
                "reservedTokens": 0,
                "budgetPriority": 400,
                "trimDirection": "trimBottom",
                "insertionType": "newline",
                "maximumTrimType": "sentence",
                "insertionPosition": -1
            },
            "lastUpdatedAt": 1702478809363,
            "displayName": "New Lorebook Entry",
            "id": "e9dee567-b2b2-499e-81d2-621a1657f379",
            "keys": [],
            "searchRange": 1000,
            "enabled": true,
            "forceActivation": false,
            "keyRelative": false,
            "nonStoryActivatable": false,
            "category": "",
            "loreBiasGroups": [
                {
                    "phrases": [],
                    "ensureSequenceFinish": false,
                    "generateOnce": true,
                    "bias": 0,
                    "enabled": true,
                    "whenInactive": false
                }
            ]
        }
    ]
};

function getContext(prompt: {
    authorsNote: string | null;
    memory: string | null;
}) {
    const context: Context[] = [];

    if (prompt.memory) {
        context.push({
            text: prompt.memory,
            contextConfig: {
                prefix: '',
                suffix: '\n',
                tokenBudget: 1,
                reservedTokens: 0,
                budgetPriority: 800,
                trimDirection: 'trimBottom',
                insertionType: 'newline',
                maximumTrimType: 'sentence',
                insertionPosition: -4
            }
        });
    }

    if (prompt.authorsNote) {
        context.push({
            text: prompt.authorsNote,
            contextConfig: {
                prefix: '',
                suffix: '\n',
                tokenBudget: 1,
                reservedTokens: 0,
                budgetPriority: -400,
                trimDirection: 'trimBottom',
                insertionType: 'newline',
                maximumTrimType: 'sentence',
                insertionPosition: -4
            }
        });
    }

    return context;
}

function getWorldInfos(worldInfos: {
    id: string,
    keys: string,
    entry: string
}[]) {
    const lorebook: Lorebook = {
        entries: [],
        categories: [],
        settings: {
            orderByKeyLocations: false
        },
        lorebookVersion: 5
    };

    worldInfos.forEach(worldInfo => {
        const keys = worldInfo.keys.split(',');
        lorebook.entries.push({
            text: worldInfo.entry,
            contextConfig: {
                prefix: '',
                suffix: '\n',
                tokenBudget: 1,
                reservedTokens: 0,
                budgetPriority: 400,
                trimDirection: 'trimBottom',
                insertionType: 'newline',
                maximumTrimType: 'sentence',
                insertionPosition: -1
            },
            lastUpdatedAt: Math.floor(Date.now() / 1000),
            displayName: keys[0] || '',
            id: worldInfo.id,
            keys: keys,
            searchRange: 1000,
            enabled: true,
            forceActivation: keys.length > 0,
            keyRelative: false,
            nonStoryActivatable: false,
            category: 'World Info',
            loreBiasGroups: [],
        });
    });

    return lorebook;
}

export async function GET(
    req: Request | NextRequest,
    res: NextResponse<ResponseData | NovelAIScenarioContainerVersion1>
) {
    if (!req.url) {
        return NextResponse.json({ message: 'Invalid URL requested' }, {
            status: 400
        });
    }

    const {searchParams} = new URL(req.url);
    const promptId = searchParams.get("scenario");

    if (!promptId) {
        return NextResponse.json({ message: 'Invalid  prompt ID' }, {
            status: 400
        });
    }

    const prompt = await db.prompts.findFirst({
        where: {
            id: promptId
        }
    });

    if (!prompt) {
        return NextResponse.json({ message: 'Prompt not found' }, {
            status: 404
        });
    }

    // Sanitize title for filename to download. Strip sensitive characters.
    const filename = prompt.title.replace(/[^a-z0-9]/gi, '_');


    // If there is a novelAiScenario, and the user specifies the query param, return scenario as-is.
    if (prompt.novelAiScenario && searchParams.get('raw-scenario') === 'true') {

        // Pretty print the JSON
        // TODO: Decide if we thinking parsing and prettifying the JSON is worth it. I'm lazy tho, so send back as-is. #yolo
        const response = new NextResponse(prompt.novelAiScenario);

        // Set headers to force download.
        response.headers.set('Content-Type', 'application/json');
        response.headers.set('Content-Disposition', `attachment; filename=${filename}.scenario`);

        return response;
    }

    const worldInfos = await db.worldInfos.findMany({
        where: {
            promptId: prompt.id
        }
    });

    const scenario: NovelAIScenarioContainerVersion1 = {
        storyContainerVersion: 1,
        metadata: {
            storyMetadataVersion: 1,
            id: prompt.id,
            title: prompt.title,
            description: prompt.description || '',
            textPreview: prompt.promptContent.slice(0, 100),
            isTA: false,
            favorite: false,
            tags: prompt.tags.split(',').map(tag => tag.trim()),
            // Use current Unix time for now.
            createdAt: Math.floor(Date.now() / 1000),
            lastUpdatedAt: Math.floor(Date.now() / 1000),
            isModified: false,
            hasDocument: true,
        },
        content: {
            storyContentVersion: 6,
            settings: defaultContentSettings,
            document: '1BQA1HJAldZiAAABSsEIwQXBB8ENwQSAkNQeANRyQZPBBMEHwQXLQwf45' + btoa(prompt.promptContent),
            context: getContext(prompt),
            lorebook: getWorldInfos(worldInfos),
            storyContextConfig: {
                prefix: '',
                suffix: '',
                tokenBudget: 1,
                reservedTokens: 512,
                budgetPriority: 0,
                trimDirection: 'trimTop',
                insertionType: 'newline',
                maximumTrimType: 'sentence',
                insertionPosition: -1,
                allowInsertionInside: true
            },
            ephemeralContext: [],
            contextDefaults: contextDefaults,
            settingsDirty: false,
            phraseBiasGroups: [
                {
                    "phrases": [],
                    "ensureSequenceFinish": false,
                    "generateOnce": true,
                    "bias": 0,
                    "enabled": true,
                    "whenInactive": false
                }
            ],
            bannedSequenceGroups: [
                {
                    "sequences": [],
                    "enabled": true
                }
            ]
        },
    };

    // Pretty print the JSON
    const response = new NextResponse(JSON.stringify(scenario, null, 2));

    await db.prompts.update({
        where: {
            id: prompt.id
        },
        data: {
            downloadCount: prompt.downloadCount + 1
        }
    });

    // Set headers to force download.
    response.headers.set('Content-Type', 'application/json');
    response.headers.set('Content-Disposition', `attachment; filename=${filename}.scenario`);

    return response;
};
