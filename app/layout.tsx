import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Instrument_Serif } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AngelConnect AI Forum 2025 | Ташкент",
  description:
    "Первый практический форум для предпринимателей, стартаперов и IT-специалистов о реальном применении AI в бизнес-процессах. 29-30 ноября 2025, Ташкент.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
html {
  font-family: ${montserrat.style.fontFamily};
  --font-sans: ${montserrat.variable};
  --font-mono: ${GeistMono.variable};
  --font-instrument-serif: ${instrumentSerif.variable};
}
          `
        }} />
      </head>
      <body className={`${montserrat.variable} ${instrumentSerif.variable}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
