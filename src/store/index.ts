import {useStore as useZustandStore, createStore} from 'zustand';
import {createContext, useContext} from "react";

interface StoreInterface {
    bears: number;
    increase: (by: number) => void;
    searchQuery: string;
    // set store
    setSearchQuery: (query: string) => void;
}

const getDefaultInitialState = () => ({
    bears: 0,
    searchQuery: '',
});

export type StoreType = ReturnType<typeof initializeStore>

const zustandContext = createContext<StoreType | null>(null);

export const Provider = zustandContext.Provider;

export const useStore = <T>(selector: (state: StoreInterface) => T) => {
    const store = useContext(zustandContext);

    if (!store) throw new Error('Store is missing the provider');

    return useZustandStore(store, selector);
};

export const initializeStore = (
    preloadedState: Partial<StoreInterface> = {}
) => {
    return createStore<StoreInterface>((set, get) => ({
        ...getDefaultInitialState(),
        ...preloadedState,
        increase: (by) => set((state) => ({ bears: state.bears + by })),
        setSearchQuery: (query) => set({ searchQuery: query }),
    }));
};
