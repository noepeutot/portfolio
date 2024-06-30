import type {Metadata} from "next";
import {Space_Grotesk} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import React from "react";

const space_grotesk = Space_Grotesk({subsets: ["latin"]});

export const metadata: Metadata = {
    metadataBase: new URL("https://portfolio-rho-one-49.vercel.app/"),

    title: 'Portfolio',
    authors: {
        name: "Noé Peutot",
    },

    description:
        "Étudiant, je suis un développeur web fullstack passionné par la création de sites web et d'applications web.",
    openGraph: {
        title: "Noé Peutot",
        description:
            "Étudiant à Grenoble, je suis un développeur web fullstack passionné par la création de sites web et d'applications web.",
        url: "https://portfolio-rho-one-49.vercel.app/",
        siteName: "Portfolio",
        images: "/og.png",
        type: "website",
    },
    keywords: ["Portfolio", "Noé Peutot"],
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
