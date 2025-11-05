"use client"

import { useState } from "react"
import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import AnimatedShaderBackground from "@/components/animated-shader-background"
import AboutSection from "@/components/about-section"
import ForumProgram from "@/components/forum-program"
import SpeakersSection from "@/components/speakers-section"
import TopicsSection from "@/components/topics-section"

export default function AIForum() {
  const [activeSection, setActiveSection] = useState("home")

  const renderSectionContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <section className="min-h-screen flex items-center justify-center p-4 md:p-8 pt-20 md:pt-24 relative z-0">
            <AboutSection />
          </section>
        )
      case "program":
        return (
          <section className="min-h-screen flex items-center justify-center p-4 md:p-8 pt-20 md:pt-24 relative z-0">
            <ForumProgram />
          </section>
        )
      case "speakers":
        return (
          <section className="min-h-screen flex items-center justify-center p-4 md:p-8 pt-20 md:pt-24 relative z-0">
            <SpeakersSection />
          </section>
        )
      case "topics":
        return (
          <section className="min-h-screen flex items-center justify-center p-4 md:p-8 pt-20 md:pt-24 relative z-0">
            <TopicsSection />
          </section>
        )
      default:
        return <HeroContent />
    }
  }

  return (
    <AnimatedShaderBackground section={activeSection}>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderSectionContent()}
    </AnimatedShaderBackground>
  )
}
