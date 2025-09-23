"use client"

import { Code, Palette, Laptop, Briefcase } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ParticipantsSection() {
  const { t } = useLanguage()
  const participantTypes = [
    {
      title: t("participants.vibe_coders"),
      subtitle: t("participants.vibe_coders_subtitle"),
      icon: Code,
      items: [
        t("participants.vibe_coders_item1"),
        t("participants.vibe_coders_item2"),
        t("participants.vibe_coders_item3"),
        t("participants.vibe_coders_item4")
      ]
    },
    {
      title: t("participants.designers"),
      subtitle: t("participants.designers_subtitle"),
      icon: Palette,
      items: [
        t("participants.designers_item1"),
        t("participants.designers_item2"),
        t("participants.designers_item3")
      ]
    },
    {
      title: t("participants.developers"),
      subtitle: t("participants.developers_subtitle"),
      icon: Laptop,
      items: [
        t("participants.developers_item1"),
        t("participants.developers_item2"),
        t("participants.developers_item3"),
        t("participants.developers_item4")
      ]
    },
    {
      title: t("participants.business"),
      subtitle: t("participants.business_subtitle"),
      icon: Briefcase,
      items: [
        t("participants.business_item1"),
        t("participants.business_item2"),
        t("participants.business_item3"),
        t("participants.business_item4")
      ]
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 relative z-10 pt-24">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              {t("participants.title")}
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              {t("participants.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {participantTypes.map((type, index) => {
              const IconComponent = type.icon
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 shadow-lg mb-4">
                      <IconComponent className="w-8 h-8 text-blue-300" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-1">
                      {type.title}
                    </h3>
                    <p className="text-white/60 text-sm">{type.subtitle}</p>
                  </div>

                  <ul className="space-y-3">
                    {type.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
              <h3 className="text-2xl font-medium text-white mb-4">
                {t("participants.requirements_title")}
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="text-white font-medium mb-2">{t("participants.teams_title")}</h4>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• {t("participants.team_req1")}</li>
                    <li>• {t("participants.team_req2")}</li>
                    <li>• {t("participants.team_req3")}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">{t("participants.projects_title")}</h4>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• {t("participants.project_req1")}</li>
                    <li>• {t("participants.project_req2")}</li>
                    <li>• {t("participants.project_req3")}</li>
                    <li>• {t("participants.req_open")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}