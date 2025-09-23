"use client"

import { Trophy, Award, Medal, Target, Users, TrendingUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function PrizesSection() {
  const { t } = useLanguage()
  const prizes = [
    {
      place: t("prizes.first_place"),
      amount: "$3,000",
      icon: Trophy,
      color: "from-yellow-400 to-yellow-600",
      borderColor: "border-yellow-400/50",
      description: t("prizes.first_description")
    },
    {
      place: t("prizes.second_place"),
      amount: "$2,000",
      icon: Award,
      color: "from-gray-300 to-gray-500",
      borderColor: "border-gray-400/50",
      description: t("prizes.second_description")
    },
    {
      place: t("prizes.third_place"),
      amount: "$1,000",
      icon: Medal,
      color: "from-orange-400 to-orange-600",
      borderColor: "border-orange-400/50",
      description: t("prizes.third_description")
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-8 relative z-10 pt-24">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            {t("prizes.title")}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t("prizes.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {prizes.map((prize, index) => {
            const IconComponent = prize.icon
            return (
            <div
              key={index}
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border ${prize.borderColor} hover:bg-white/10 transition-all duration-300 text-center`}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 shadow-lg">
                <IconComponent className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-2">
                {prize.place}
              </h3>
              <div className={`text-4xl font-bold bg-gradient-to-r ${prize.color} bg-clip-text text-transparent mb-4`}>
                {prize.amount}
              </div>
              <p className="text-white/70 text-sm">
                {prize.description}
              </p>
            </div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-medium text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                <Target className="w-5 h-5 text-blue-300" />
              </div>
              {t("prizes.additional_title")}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-white/80 font-medium">{t("prizes.mentorship")}</p>
                  <p className="text-white/60 text-sm">{t("prizes.mentorship_desc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-white/80 font-medium">{t("prizes.investment")}</p>
                  <p className="text-white/60 text-sm">{t("prizes.investment_desc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-white/80 font-medium">{t("prizes.acceleration")}</p>
                  <p className="text-white/60 text-sm">{t("prizes.acceleration_desc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-white/80 font-medium">{t("prizes.employment")}</p>
                  <p className="text-white/60 text-sm">{t("prizes.employment_desc")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-medium text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                <Users className="w-5 h-5 text-blue-400" />
              </div>
              {t("prizes.participation_title")}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-white/80 font-medium">{t("prizes.team_size")}</p>
                  <p className="text-white/60 text-sm">{t("prizes.team_size_desc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-white/80 font-medium">{t("prizes.from_scratch")}</p>
                  <p className="text-white/60 text-sm">{t("prizes.from_scratch_desc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-white/80 font-medium">{t("prizes.ai_tools")}</p>
                  <p className="text-white/60 text-sm">{t("prizes.ai_tools_desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-medium text-white mb-4">
              {t("prizes.challenge_title")}
            </h3>
            <p className="text-white/70 mb-6">
              {t("prizes.challenge_desc")}
            </p>
            <button className="px-8 py-3 rounded-full bg-blue-500 text-white font-medium transition-all duration-200 hover:bg-blue-400">
              {t("prizes.register_now")}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}