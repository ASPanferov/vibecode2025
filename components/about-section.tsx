"use client"

import { Zap, Brain, Rocket } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const CARD_CONFIG = [
  {
    Icon: Zap,
    iconColor: "text-blue-300",
    titleKey: "about.innovation_card_title",
    textKey: "about.innovation_card_text"
  },
  {
    Icon: Brain,
    iconColor: "text-blue-400",
    titleKey: "about.ai_card_title",
    textKey: "about.ai_card_text"
  },
  {
    Icon: Rocket,
    iconColor: "text-blue-500",
    titleKey: "about.result_card_title",
    textKey: "about.result_card_text"
  }
]

export default function AboutSection() {
  const { t } = useLanguage()
  return (
        <div className="max-w-4xl w-full px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 md:mb-6">
              {t("about.title")}
            </h2>
            <div className="inline-flex items-center px-3 md:px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 md:mb-8 border border-white/20">
              <span className="text-blue-300 text-base md:text-lg font-medium italic">
                "{t("details.slogan")}"
              </span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/10 mb-6 md:mb-8">
            <div className="flex flex-col md:flex-row items-start gap-4 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 shadow-lg flex-shrink-0">
                <Brain className="w-5 h-5 md:w-6 md:h-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-medium text-white mb-3 md:mb-4">
                  {t("details.what_is_vibe")}
                </h3>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  {t("details.vibe_description")}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/10 mb-6 md:mb-8">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 shadow-lg flex-shrink-0">
                <Rocket className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-medium text-white mb-3 md:mb-4">
                  {t("details.mission")}
                </h3>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  {t("details.mission_text")}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {CARD_CONFIG.map(({ Icon, iconColor, titleKey, textKey }) => (
              <div
                key={titleKey}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 text-center shadow-[0_12px_32px_rgba(15,23,42,0.18)]"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 mx-auto mb-3 md:mb-4">
                  <Icon className={`w-5 h-5 md:w-6 md:h-6 ${iconColor}`} />
                </div>
                <h4 className="text-white font-medium mb-2 text-sm md:text-base">{t(titleKey)}</h4>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed">{t(textKey)}</p>
              </div>
            ))}
          </div>
        </div>
  )
}
