"use client"

import { Users, Briefcase, Code, Target } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function AboutSection() {
  const { t } = useLanguage()

  const audiences = [
    {
      icon: Briefcase,
      title: t("about.entrepreneurs"),
      description: t("about.entrepreneurs_desc"),
      color: "text-blue-400"
    },
    {
      icon: Target,
      title: t("about.startups"),
      description: t("about.startups_desc"),
      color: "text-purple-400"
    },
    {
      icon: Code,
      title: t("about.it_specialists"),
      description: t("about.it_specialists_desc"),
      color: "text-green-400"
    },
    {
      icon: Users,
      title: t("about.managers"),
      description: t("about.managers_desc"),
      color: "text-orange-400"
    }
  ]

  const benefits = [
    t("about.benefit1"),
    t("about.benefit2"),
    t("about.benefit3"),
    t("about.benefit4"),
    t("about.benefit5"),
    t("about.benefit6")
  ]

  return (
    <div className="max-w-5xl w-full px-4">
      {/* Main Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
          {t("about.title")}
        </h2>
      </div>

      {/* Main Description */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 mb-8">
        <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6">
          {t("about.description")}
        </p>
        <p className="text-base md:text-lg text-white/90 leading-relaxed">
          {t("about.mission")}
        </p>
      </div>

      {/* Benefits */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 mb-12">
        <h3 className="text-2xl font-medium text-white mb-6">{t("about.what_you_get")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-400 text-sm">✓</span>
              </div>
              <p className="text-white/80 text-sm md:text-base">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* For Who Section */}
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-light text-white mb-8 text-center">
          {t("about.for_who")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4`}>
                <audience.icon className={`w-6 h-6 ${audience.color}`} />
              </div>
              <h4 className="text-lg font-medium text-white mb-3">{audience.title}</h4>
              <p className="text-white/70 text-sm leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
