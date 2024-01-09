import React from 'react';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import Providers from './Providers';
import classnames from 'classnames';
import {Suspense} from "react";
import LoadingSearch from "@/app/search/loading";
import NavBar from "@/app/nav/NavBar";

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'write34', description: 'Share and explore NovelAI Scenarios',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
})
{

  return (
    <html lang="en" suppressHydrationWarning>
    <head>
      <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
      <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt=""
                     referrerPolicy="no-referrer-when-downgrade"/></noscript>
    </head>
    <body
      className={classnames('min-h-screen mx-auto max-w-6xl flex flex-col bg-white dark:bg-gray-900', inter.className)}>
    <Providers>
      <NavBar/>
      <Suspense fallback={<LoadingSearch/>}>
        {children}
      </Suspense>
    </Providers>
    </body>
    </html>
  );
}
