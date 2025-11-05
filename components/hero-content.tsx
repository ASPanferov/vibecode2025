"use client"

import { useLanguage } from "@/contexts/language-context"

export default function HeroContent() {
  const { t } = useLanguage()
  return (
    <main className="absolute inset-0 flex items-center z-0 px-4 md:px-8 pt-20 md:pt-24">
      <div className="w-full max-w-2xl mx-auto md:mx-0 text-center md:text-left">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative border border-white/10">
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">
            🚀 {t("hero.subtitle")}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-16 tracking-tight font-light text-white mb-4">
          <span className="font-medium italic instrument text-blue-400">AngelConnect</span>
          <br />
          <span className="font-light tracking-tight text-white">AI Forum 2025</span>
        </h1>

        <p className="text-sm md:text-base font-light text-white/70 mb-6 leading-relaxed max-w-lg mx-auto md:mx-0">
          {t("hero.description")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs md:text-sm">
          <div className="flex items-center justify-center md:justify-start gap-2 text-white/80">
            <span className="text-blue-400">📅</span>
            <span>{t("hero.date")}</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-white/80">
            <span className="text-blue-400">⏰</span>
            <span>{t("hero.time")}</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-white/80">
            <span className="text-blue-400">📍</span>
            <span>{t("hero.location")}</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-white/80">
            <span className="text-blue-400">👥</span>
            <span>{t("hero.participants")}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-6">
          <a
            href="https://forms.gle/wQxZREJsVjt71ht79"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 md:px-8 py-3 rounded-full bg-blue-500 text-white font-normal text-sm transition-all duration-200 hover:bg-blue-400 cursor-pointer text-center"
          >
            {t("hero.register")}
          </a>
          <button className="w-full sm:w-auto px-6 md:px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
            {t("hero.sponsor")}
          </button>
        </div>

      </div>
    </main>
  )
}
