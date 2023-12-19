"use client";

import {RelayEnvironmentProvider, useRelayEnvironment} from "react-relay";
import {getCurrentEnvironment} from "@/relay/clientEnvironment";
import {SearchComponent} from "@/app/search/searchComponent";

const SearchClientComponent = () => {
    const environment = getCurrentEnvironment();

    return (
        <RelayEnvironmentProvider environment={environment}>
            <SearchComponent/>
        </RelayEnvironmentProvider>
    );
};

export default SearchClientComponent;