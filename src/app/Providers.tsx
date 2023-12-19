'use client';
import { ThemeProvider } from 'next-themes';
import {ReactNode} from "react";
import StoreProvider from "@/store/provider";

function Providers({children} : {children: ReactNode}) {
    return (
        <ThemeProvider defaultTheme="dark" attribute="class">
            <StoreProvider>
                {children}
            </StoreProvider>
        </ThemeProvider>
    );
}

export default Providers;
