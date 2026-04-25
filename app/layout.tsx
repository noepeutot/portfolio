import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GeistPixelSquare } from "geist/font/pixel";
import { Providers } from "@/app/components/providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Noé Peutot — Développeur Web Fullstack",
  description:
    "Portfolio de Noé Peutot, développeur web fullstack basé à Grenoble. Étudiant en BUT Informatique, passionné par le développement web et les nouvelles technologies.",
  keywords: [
    "Noé Peutot",
    "développeur web",
    "fullstack",
    "Grenoble",
    "portfolio",
    "BUT Informatique",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${GeistPixelSquare.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.theme==='dark'||((!('theme' in localStorage)||localStorage.theme==='system')&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(_){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
