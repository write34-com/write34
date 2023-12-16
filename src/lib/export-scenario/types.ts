
// These types map to a NovelAI scenario JSON file.

type NovelAIScenarioVersion3 = {
    scenarioVersion: 3;
    tags: string[];
    title: string;
    author: string;
    prompt: string;
    context: Context[];
    lorebook: Lorebook;
    settings: ContentSettings;
    description: string;
    placeholders: string[];
    contextDefaults: ContextDefaults;
    ephemeralContext: Context[];
    phraseBiasGroups: BiasGroup[];
    storyContextConfig: StoryContextConfig;
    bannedSequenceGroups: BannedSequenceGroup[];
}

// TODO: Figure out how "document" is generated to be able to conform to this version.
type NovelAIScenarioContainerVersion1 = {
    storyContainerVersion: 1;
    metadata: {
        storyMetadataVersion: 1;
        id: string;
        title: string;
        description: string;
        textPreview: string;
        isTA: boolean;
        favorite: boolean;
        tags: string[];
        createdAt: number;
        lastUpdatedAt: number;
        isModified: boolean;
        hasDocument: boolean;
    };
    content: {
        storyContentVersion: 6;
        settings: ContentSettings;
        document: string;
        context: Context[];
        lorebook: Lorebook;
        storyContextConfig: StoryContextConfig;
        ephemeralContext: Context[];
        contextDefaults: ContextDefaults;
        settingsDirty: boolean;
        phraseBiasGroups: BiasGroup[];
        bannedSequenceGroups: BannedSequenceGroup[];
    };
}

type Context = {
    text: string;
    contextConfig: ContextConfig;
}

interface StoryContextConfig {
    prefix: string;
    suffix: string;
    tokenBudget: number;
    reservedTokens: number;
    budgetPriority: number;
    trimDirection: 'trimBottom' | 'trimTop' | 'doNotTrim';
    insertionType: 'newline';
    maximumTrimType: 'sentence' | 'newline';
    insertionPosition: number;
    allowInsertionInside: boolean;
}

interface ContextConfig {
    prefix: string;
    suffix: string;
    tokenBudget: number;
    reservedTokens: number;
    budgetPriority: number;
    trimDirection: 'trimBottom' | 'trimTop' | 'doNotTrim';
    insertionType: 'newline';
    maximumTrimType: 'sentence' | 'newline';
    insertionPosition: number;
}

type Lorebook = {
    entries: LoreEntry[];
    settings: LoreSettings;
    categories: any[];
    lorebookVersion: 5;
};

type LoreEntry = {
    text: string;
    contextConfig: ContextConfig;
    lastUpdatedAt: number;
    displayName: string;
    id: string;
    keys: string[];
    searchRange: number;
    enabled: boolean;
    forceActivation: boolean;
    keyRelative: boolean;
    nonStoryActivatable: boolean;
    category: string;
    loreBiasGroups: BiasGroup[];
}

type BiasGroup = {
    phrases: string[];
    ensureSequenceFinish: boolean;
    generateOnce: boolean;
    bias: number;
    enabled: boolean;
    whenInactive: boolean;
}

type LoreSettings = {
    orderByKeyLocations: boolean;
};

interface ContentSettings {
    parameters: {
        textGenerationSettingsVersion: number;
        temperature: number;
        max_length: number;
        min_length: number;
        top_k: number;
        top_p: number;
        top_a: number;
        typical_p: number;
        tail_free_sampling: number;
        repetition_penalty: number;
        repetition_penalty_range: number;
        repetition_penalty_slope: number;
        repetition_penalty_frequency: number;
        repetition_penalty_presence: number;
        repetition_penalty_default_whitelist: boolean;
        cfg_scale: number;
        cfg_uc: string;
        phrase_rep_pen: 'aggressive';
        top_g: number;
        mirostat_tau: number;
        mirostat_lr: number;
        order: ParameterSetting[];
    };
    preset: string;
    trimResponses: boolean;
    banBrackets: boolean;
    prefix: string;
    dynamicPenaltyRange: boolean;
    prefixMode: number;
    mode: number;
    model: string;
}

type ParameterSetting = {
    id: 'cfg' | 'mirostat' | 'top_k' | 'temperature' | 'typical_p' | 'tfs' | 'top_p' | 'top_a' | 'top_g',
    enabled: boolean;
};

type ContextDefaults = {
    loreDefaults: LoreDefault[];
    ephemeralDefaults: EphemeralDefault[];
};

type LoreDefault = {
    id: string;
    keys: string[];
    text: string;
    enabled: boolean;
    category: string;
    displayName: string;
    keyRelative: boolean;
    searchRange: number;
    contextConfig: ContextConfig;
    lastUpdatedAt: number;
    loreBiasGroups: BiasGroup[];
    forceActivation: boolean;
    nonStoryActivatable: boolean;
};

type EphemeralDefault = {
    text: string;
    delay: number;
    repeat: boolean;
    reverse: boolean;
    duration: number;
    startingStep: number;
    contextConfig: ContextConfig;
};

type BannedSequenceGroup = {
    enabled: boolean;
    sequences: string[];
};
