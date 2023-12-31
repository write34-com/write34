'use client';
import { ThemeProvider } from 'next-themes';
import {ReactNode} from "react";
import {SessionProvider} from "next-auth/react";
import StoreProvider from "@/store/provider";

function Providers({children} : {children: ReactNode}) {
    return (
      <SessionProvider>
        <ThemeProvider defaultTheme="dark" attribute="class">
            <StoreProvider>
                {children}
            </StoreProvider>
        </ThemeProvider>
      </SessionProvider>
    );
}

export default Providers;
