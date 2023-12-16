'use client';
import { ThemeProvider } from 'next-themes';
import {ReactNode} from "react";

function MyApp({children} : {children: ReactNode}) {
    return (
        <ThemeProvider defaultTheme="dark" attribute="class">
            {children}
        </ThemeProvider>
    );
}

export default MyApp;
