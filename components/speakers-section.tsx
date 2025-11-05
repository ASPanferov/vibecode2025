"use client"

import { useLanguage } from "@/contexts/language-context"
import { User } from "lucide-react"

export default function SpeakersSection() {
  const { t } = useLanguage()

  const speakers = [
    {
      name: "Артем Панферов",
      nameEn: "Artem Panferov",
      nameUz: "Artem Panferov",
      position: "TBA",
      company: "TBA"
    },
    {
      name: "Артем Стрельченок",
      nameEn: "Artem Strelchenok",
      nameUz: "Artem Strelchenok",
      position: "TBA",
      company: "TBA"
    },
    {
      name: "Шавкат Каримов",
      nameEn: "Shavkat Karimov",
      nameUz: "Shavkat Karimov",
      position: "TBA",
      company: "TBA"
    },
    {
      name: "Сергей Шима",
      nameEn: "Sergey Shima",
      nameUz: "Sergey Shima",
      position: "TBA",
      company: "TBA"
    },
    {
      name: "Спикер 5",
      nameEn: "Speaker 5",
      nameUz: "Spiker 5",
      position: "TBA",
      company: "TBA"
    }
  ]

  const getSpeakerName = (speaker: typeof speakers[0]) => {
    const { language } = useLanguage()
    if (language === 'en') return speaker.nameEn
    if (language === 'uz') return speaker.nameUz
    return speaker.name
  }

  return (
    <div className="max-w-5xl w-full px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
          {t("speakers.title")}
        </h2>
        <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
          {t("speakers.subtitle")}
        </p>
      </div>

      {/* Speakers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4 border border-white/10">
              <User className="w-12 h-12 text-white/60" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">
              {getSpeakerName(speaker)}
            </h3>
            <p className="text-sm text-white/60 mb-1">{speaker.position}</p>
            <p className="text-sm text-white/50">{speaker.company}</p>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-white/50 mb-2">{t("speakers.topic")}</p>
              <p className="text-sm text-white/70 italic">Coming soon...</p>
            </div>
          </div>
        ))}
      </div>

      {/* Coming Soon Message */}
      <div className="bg-blue-500/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 text-center">
        <p className="text-white/80 text-base">
          {t("speakers.coming_soon")}
        </p>
      </div>
    </div>
  )
}
