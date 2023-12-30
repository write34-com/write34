import SearchClientComponent from "@/app/search/searchClientComponent";
import {Metadata, ResolvingMetadata} from "next";

export async function generateMetadata(
  props: {},
  parent: ResolvingMetadata
): Promise<Metadata> {
    return {
        title: 'Find NovelAI Scenarios & Prompts - Search - write34',
    };
}


export default async function SearchPage() {

    return (
        <div>
            {<SearchClientComponent />}
        </div>
    );
}
