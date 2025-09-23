"use client"

import { Crown, Award, Medal, Wrench, Coffee, Camera, Handshake } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function PartnersSection() {
  const { t } = useLanguage()
  const partnershipPackages = [
    {
      title: t("partners.title_sponsor"),
      price: "$15,000",
      icon: Crown,
      color: "from-yellow-400 to-yellow-600",
      borderColor: "border-yellow-400/50",
      description: t("partners.title_sponsor_desc"),
      features: [
        t("partners.title_sponsor_feature1"),
        t("partners.title_sponsor_feature2"),
        t("partners.title_sponsor_feature3"),
        t("partners.title_sponsor_feature4"),
        t("partners.title_sponsor_feature5"),
        t("partners.title_sponsor_feature6"),
        t("partners.title_sponsor_feature7")
      ]
    },
    {
      title: t("partners.gold_sponsor"),
      price: "$8,000",
      icon: Award,
      color: "from-orange-400 to-orange-600",
      borderColor: "border-orange-400/50",
      description: t("partners.gold_sponsor_desc"),
      features: [
        t("partners.gold_sponsor_feature1"),
        t("partners.gold_sponsor_feature2"),
        t("partners.gold_sponsor_feature3"),
        t("partners.gold_sponsor_feature4"),
        t("partners.gold_sponsor_feature5"),
        t("partners.gold_sponsor_feature6")
      ]
    },
    {
      title: t("partners.silver_sponsor"),
      price: "$5,000",
      icon: Medal,
      color: "from-gray-300 to-gray-500",
      borderColor: "border-gray-400/50",
      description: t("partners.silver_sponsor_desc"),
      features: [
        t("partners.silver_sponsor_feature1"),
        t("partners.silver_sponsor_feature2"),
        t("partners.silver_sponsor_feature3"),
        t("partners.silver_sponsor_feature4"),
        t("partners.silver_sponsor_feature5")
      ]
    },
    {
      title: t("partners.tech_sponsor"),
      price: "$1,000 + product",
      icon: Wrench,
      color: "from-blue-400 to-blue-600",
      borderColor: "border-blue-400/50",
      description: t("partners.tech_sponsor_desc"),
      features: [
        t("partners.tech_sponsor_feature1"),
        t("partners.tech_sponsor_feature2"),
        t("partners.tech_sponsor_feature3"),
        t("partners.tech_sponsor_feature4")
      ]
    }
  ]

  const currentPartners = [
    "IT Park Uzbekistan",
    "School21",
    "DIGITAL.UZ",
    "AI LAB",
    "AICA",
    "ProBusiness"
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 relative z-10 pt-24">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            {t("partners.title")}
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            {t("partners.subtitle")}
          </p>
        </div>

        {/* Партнерские пакеты */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partnershipPackages.map((pkg, index) => {
            const IconComponent = pkg.icon
            return (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border ${pkg.borderColor} hover:bg-white/10 transition-all duration-300 hover:scale-105`}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {pkg.title}
                  </h3>
                  <div className="text-2xl font-bold text-white mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-sm text-white/70">
                    {pkg.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Дополнительные возможности */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-green-400/50">
            <div className="flex items-center gap-3 mb-4">
              <Coffee className="w-8 h-8 text-green-400" />
              <h3 className="text-xl font-semibold text-white">{t("partners.catering_sponsor")}</h3>
            </div>
            <p className="text-white/80 mb-4">{t("partners.catering_sponsor_desc")}</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>• {t("partners.catering_sponsor_feature1")}</li>
              <li>• {t("partners.catering_sponsor_feature2")}</li>
              <li>• {t("partners.catering_sponsor_feature3")}</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/50">
            <div className="flex items-center gap-3 mb-4">
              <Camera className="w-8 h-8 text-purple-400" />
              <h3 className="text-xl font-semibold text-white">{t("partners.media_sponsor")}</h3>
            </div>
            <p className="text-white/80 mb-4">{t("partners.media_sponsor_desc")}</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>• {t("partners.media_sponsor_feature1")}</li>
              <li>• {t("partners.media_sponsor_feature2")}</li>
              <li>• {t("partners.media_sponsor_feature3")}</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-indigo-400/50">
            <div className="flex items-center gap-3 mb-4">
              <Handshake className="w-8 h-8 text-indigo-400" />
              <h3 className="text-xl font-semibold text-white">{t("partners.custom_packages")}</h3>
            </div>
            <p className="text-white/80 mb-4">{t("partners.custom_packages_desc")}</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>• {t("partners.custom_packages_feature1")}</li>
              <li>• {t("partners.custom_packages_feature2")}</li>
              <li>• {t("partners.custom_packages_feature3")}</li>
            </ul>
          </div>
        </div>

        {/* Текущие партнеры */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">
            {t("partners.ecosystem_partners")}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {currentPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-white/80 text-sm font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/50">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {t("partners.become_partner")}
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              {t("partners.partner_desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-full bg-blue-500 text-white font-medium transition-all duration-200 hover:bg-blue-400">
                {t("partners.contact_us")}
              </button>
              <button className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-medium transition-all duration-200 hover:bg-white/10 hover:border-white/50">
                {t("partners.download_presentation")}
              </button>
            </div>
            <div className="mt-6 text-sm text-white/60">
              📧 manager@angelconnect.uz | 📱 @vibecode_tashkent
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}