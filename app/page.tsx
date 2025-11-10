"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import AnimatedShaderBackground from "@/components/animated-shader-background"
import AboutSection from "@/components/about-section"
import ForumProgram from "@/components/forum-program"
import SpeakersSection from "@/components/speakers-section"
import TopicsSection from "@/components/topics-section"

export default function AIForum() {
  const [activeSection, setActiveSection] = useState("home")

  // Отслеживание активной секции при скролле
  useEffect(() => {
    const sections = ["home", "about", "program", "speakers", "topics"]

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Проверяем начальное положение

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatedShaderBackground section={activeSection}>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Home Section */}
      <section id="home" className="min-h-screen relative z-0">
        <HeroContent />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center p-4 md:p-8 pt-20 md:pt-24 relative z-0">
        <AboutSection />
      </section>

      {/* Program Section */}
      <section id="program" className="min-h-screen flex items-center justify-center p-4 md:p-8 pt-20 md:pt-24 relative z-0">
        <ForumProgram />
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="min-h-screen flex items-center justify-center p-4 md:p-8 pt-20 md:pt-24 relative z-0">
        <SpeakersSection />
      </section>

      {/* Topics Section */}
      <section id="topics" className="min-h-screen flex items-center justify-center p-4 md:p-8 pt-20 md:pt-24 relative z-0">
        <TopicsSection />
      </section>
    </AnimatedShaderBackground>
  )
}
