import type {Metadata} from "next";
import {Space_Grotesk} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import React from "react";

const space_grotesk = Space_Grotesk({subsets: ["latin"]});

export const metadata: Metadata = {
    metadataBase: new URL("https://next-supabase-vote.vercel.app/"),

    title: 'Portfolio',
    authors: {
        name: "Noé Peutot",
    },

    description:
        "Situé à Grenoble, je suis un développeur web fullstack passionné par la création de sites web et d'applications web.",
    openGraph: {
        title: "Noé Peutot",
        description:
            "Situé à Grenoble, je suis un développeur web fullstack passionné par la création de sites web et d'applications web.",
        url: "",
        siteName: "Portfolio",
        images: "/og.png",
        type: "website",
    },
    keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={space_grotesk.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
