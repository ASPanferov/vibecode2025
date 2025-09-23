"use client"

import { Calendar, Trophy } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function HackathonProgram() {
  const { t } = useLanguage()
  return (
    <section className="min-h-screen flex items-center justify-center p-8 relative z-10 pt-24">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            {t("program.title")}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t("program.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* День 1 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 shadow-lg">
                <Calendar className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white">{t("program.day1")}</h3>
                <p className="text-white/60">{t("program.day1_date")}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-blue-400 font-mono text-sm min-w-16">09:00</span>
                <span className="text-white/80 text-sm">{t("program.registration")}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-400 font-mono text-sm min-w-16">10:00</span>
                <span className="text-white/80 text-sm">{t("program.opening")}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-400 font-mono text-sm min-w-16">10:30</span>
                <span className="text-white/80 text-sm">{t("program.idea_pitches")}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-400 font-mono text-sm min-w-16">11:30</span>
                <span className="text-white/80 text-sm">{t("program.team_formation")}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-400 font-mono text-sm min-w-16">12:00</span>
                <span className="text-white/80 text-sm">{t("program.lunch")}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-400 font-mono text-sm min-w-16">13:00</span>
                <span className="text-white/80 text-sm">{t("program.development_start")}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-400 font-mono text-sm min-w-16">15:00</span>
                <span className="text-white/80 text-sm">{t("program.workshop")}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-400 font-mono text-sm min-w-16">17:00</span>
                <span className="text-white/80 text-sm">{t("program.mentoring")}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-400 font-mono text-sm min-w-16">19:00</span>
                <span className="text-white/80 text-sm">{t("program.dinner")}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-400 font-mono text-sm min-w-16">20:00</span>
                <span className="text-white/80 text-sm">{t("program.evening_workshops")}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-400 font-mono text-sm min-w-16">22:00</span>
                <span className="text-white/80 text-sm">{t("program.night_dev")}</span>
              </div>
            </div>
          </div>

          {/* День 2 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 shadow-lg">
                <Trophy className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white">{t("program.day2")}</h3>
                <p className="text-white/60">{t("program.day2_date")}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-blue-400 font-mono text-sm min-w-16">09:00</span>
                <span className="text-white/80 text-sm">{t("program.breakfast")}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-400 font-mono text-sm min-w-16">10:00</span>
                <span className="text-white/80 text-sm">{t("program.final_dev")}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-400 font-mono text-sm min-w-16">12:00</span>
                <span className="text-white/80 text-sm">{t("program.stop_dev")}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-400 font-mono text-sm min-w-16">12:30</span>
                <span className="text-white/80 text-sm">{t("program.presentation_prep")}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-400 font-mono text-sm min-w-16">13:00</span>
                <span className="text-white/80 text-sm">{t("program.lunch")}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-400 font-mono text-sm min-w-16">14:00</span>
                <span className="text-white/80 text-sm">{t("program.final_pitches")}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-400 font-mono text-sm min-w-16">16:30</span>
                <span className="text-white/80 text-sm">{t("program.jury_evaluation")}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-400 font-mono text-sm min-w-16">17:30</span>
                <span className="text-white/80 text-sm">{t("program.results")}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-blue-400 font-mono text-sm min-w-16">18:30</span>
                <span className="text-white/80 text-sm">{t("program.networking_closing")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}