"use client"

import { Lightbulb, Code, Users, Presentation } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function EvaluationCriteria() {
  const { t } = useLanguage()
  const criteria = [
    {
      title: t("criteria.business_potential"),
      percentage: "25%",
      icon: Lightbulb,
      iconColor: "text-blue-300",
      description: t("criteria.business_desc")
    },
    {
      title: t("criteria.technical_implementation"),
      percentage: "25%",
      icon: Code,
      iconColor: "text-blue-400",
      description: t("criteria.technical_desc")
    },
    {
      title: t("criteria.user_experience"),
      percentage: "25%",
      icon: Users,
      iconColor: "text-blue-200",
      description: t("criteria.ux_desc")
    },
    {
      title: t("criteria.presentation"),
      percentage: "25%",
      icon: Presentation,
      iconColor: "text-blue-500",
      description: t("criteria.presentation_desc")
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 relative z-10 pt-24">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            {t("criteria.title")}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t("criteria.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {criteria.map((criterion, index) => {
            const IconComponent = criterion.icon
            return (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 shadow-lg">
                  <IconComponent className={`w-6 h-6 ${criterion.iconColor}`} />
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-white mb-1">{criterion.percentage}</div>
                </div>
              </div>

              <h3 className="text-xl font-medium text-white mb-4">
                {criterion.title}
              </h3>

              <p className="text-white/70 text-sm leading-relaxed">
                {criterion.description}
              </p>
            </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-medium text-white mb-4">
              {t("criteria.fair_evaluation_title")}
            </h3>
            <p className="text-white/70 leading-relaxed">
              {t("criteria.fair_evaluation_desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}