"use client"

import { Calendar, Coffee, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ForumProgram() {
  const { t } = useLanguage()

  const schedule = [
    { time: "11:00 - 11:15", title: t("program.registration"), desc: t("program.registration_desc"), icon: Users },
    { time: "11:15 - 11:30", title: t("program.opening"), desc: t("program.opening_desc") },
    { time: "11:30 - 11:50", title: `${t("program.speaker")} 1`, desc: t("program.case") },
    { time: "11:50 - 12:10", title: `${t("program.speaker")} 2`, desc: t("program.case") },
    { time: "12:10 - 12:25", title: t("program.coffee_break"), desc: t("program.networking"), icon: Coffee },
    { time: "12:25 - 12:45", title: `${t("program.speaker")} 3`, desc: t("program.case") },
    { time: "12:45 - 13:05", title: `${t("program.speaker")} 4`, desc: t("program.case") },
    { time: "13:05 - 13:25", title: `${t("program.speaker")} 5`, desc: t("program.case") },
    { time: "13:25 - 13:40", title: t("program.coffee_break"), icon: Coffee },
    { time: "13:40 - 14:40", title: t("program.panel"), desc: t("program.panel_desc") },
    { time: "14:40 - 15:00", title: t("program.afterparty"), desc: t("program.afterparty_desc") },
  ]

  return (
    <div className="max-w-4xl w-full px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
          {t("program.title")}
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-4">
          {t("program.subtitle")}
        </p>
        <p className="text-white/60 text-sm">
          {t("program.preliminary")}
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
            <Calendar className="w-6 h-6 text-blue-300" />
          </div>
          <div>
            <h3 className="text-2xl font-medium text-white">{t("hero.date")}</h3>
            <p className="text-white/60">{t("hero.time")}</p>
          </div>
        </div>

        <div className="space-y-4">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 border border-white/5"
            >
              <span className="text-blue-400 font-mono text-sm min-w-[120px] flex-shrink-0">
                {item.time}
              </span>
              <div className="flex-1">
                <div className="flex items-start gap-2">
                  {item.icon && <item.icon className="w-4 h-4 text-blue-400 mt-1" />}
                  <div>
                    <span className="text-white font-medium text-sm block mb-1">{item.title}</span>
                    {item.desc && (
                      <span className="text-white/60 text-xs">{item.desc}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
