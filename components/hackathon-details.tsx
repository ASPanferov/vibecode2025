"use client"

import { useLanguage } from "@/contexts/language-context"

export default function HackathonDetails() {
  const { t } = useLanguage()
  return (
    <div className="hidden md:block absolute bottom-8 right-8 z-0 max-w-md">
      <div className="relative overflow-hidden rounded-2xl p-6 border border-white/20 bg-white/8 backdrop-blur-md">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
        <div className="relative z-10">
        <h3 className="text-white font-medium text-lg mb-4">{t("details.what_is_vibe")}</h3>
        <p className="text-white/70 text-sm leading-relaxed mb-4">
          {t("details.vibe_description")}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
            <span className="text-white/80 text-sm">Claude Code, Cursor, V0</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
            <span className="text-white/80 text-sm">2 дня интенсивной разработки</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
            <span className="text-white/80 text-sm">150 участников из региона</span>
          </div>
        </div>

        <div className="pt-4 border-t border-white/20">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">$6,000</div>
            <div className="text-white/60 text-xs">Общий призовой фонд</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
