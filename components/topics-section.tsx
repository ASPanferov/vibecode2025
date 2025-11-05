"use client"

import { useLanguage } from "@/contexts/language-context"
import { Bot, Wrench, Target, TrendingUp } from "lucide-react"

export default function TopicsSection() {
  const { t } = useLanguage()

  const topics = [
    {
      icon: Bot,
      title: t("topics.automation"),
      items: [
        t("topics.automation_1"),
        t("topics.automation_2"),
        t("topics.automation_3")
      ],
      color: "text-blue-400",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Wrench,
      title: t("topics.tools"),
      items: [
        t("topics.tools_1"),
        t("topics.tools_2"),
        t("topics.tools_3")
      ],
      color: "text-purple-400",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Target,
      title: t("topics.cases"),
      items: [
        t("topics.cases_1"),
        t("topics.cases_2"),
        t("topics.cases_3")
      ],
      color: "text-green-400",
      bgColor: "bg-green-500/10"
    },
    {
      icon: TrendingUp,
      title: t("topics.future"),
      items: [
        t("topics.future_1"),
        t("topics.future_2"),
        t("topics.future_3")
      ],
      color: "text-orange-400",
      bgColor: "bg-orange-500/10"
    }
  ]

  return (
    <div className="max-w-5xl w-full px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
          {t("topics.title")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <div className={`w-12 h-12 rounded-lg ${topic.bgColor} flex items-center justify-center mb-4`}>
              <topic.icon className={`w-6 h-6 ${topic.color}`} />
            </div>
            <h3 className="text-xl font-medium text-white mb-4">{topic.title}</h3>
            <ul className="space-y-3">
              {topic.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-3">
                  <span className={`${topic.color} mt-1 flex-shrink-0`}>•</span>
                  <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
