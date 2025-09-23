"use client"

import { useState } from "react"
import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import AnimatedShaderBackground from "@/components/animated-shader-background"
import HackathonDetails from "@/components/hackathon-details"
import AboutSection from "@/components/about-section"
import HackathonProgram from "@/components/hackathon-program"
import ParticipantsSection from "@/components/participants-section"
import EvaluationCriteria from "@/components/evaluation-criteria"
import PrizesSection from "@/components/prizes-section"
import PartnersSection from "@/components/partners-section"

export default function VibeCodeHackathon() {
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
            <HackathonProgram />
          </section>
        )
      case "participants":
        return (
          <section className="min-h-screen flex items-center justify-center p-4 md:p-8 pt-20 md:pt-24 relative z-0">
            <ParticipantsSection />
          </section>
        )
      case "criteria":
        return (
          <section className="min-h-screen flex items-center justify-center p-4 md:p-8 pt-20 md:pt-24 relative z-0">
            <EvaluationCriteria />
          </section>
        )
      case "prizes":
        return (
          <section className="min-h-screen flex items-center justify-center p-4 md:p-8 pt-20 md:pt-24 relative z-0">
            <PrizesSection />
          </section>
        )
      case "partners":
        return (
          <section className="min-h-screen flex items-center justify-center p-4 md:p-8 pt-20 md:pt-24 relative z-0">
            <PartnersSection />
          </section>
        )
      default:
        return (
          <>
            <HeroContent />
            <HackathonDetails />
          </>
        )
    }
  }

  return (
    <AnimatedShaderBackground section={activeSection}>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderSectionContent()}
    </AnimatedShaderBackground>
  )
}
