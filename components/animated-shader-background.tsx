"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"


interface AnimatedShaderBackgroundProps {
  children: React.ReactNode
  section?: string
}

export default function AnimatedShaderBackground({ children, section = "home" }: AnimatedShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  // Конфигурации скорости для каждой секции
  const sectionSpeeds = {
    home: 0.3,
    about: 0.5,
    program: 0.7,
    participants: 0.6,
    criteria: 0.8,
    prizes: 1.0,
    partners: 0.4
  }

  // Получаем скорость для текущей секции
  const currentSpeed = sectionSpeeds[section as keyof typeof sectionSpeeds] || sectionSpeeds.home

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <>
      {/* Global extended background that covers both main area and overscroll areas */}
      <div className="fixed inset-0 -z-50" style={{
        top: '-100vh',
        left: '-50vw',
        width: '200vw',
        height: '300vh'
      }}>
        {/* Background Shaders */}
        <MeshGradient
          colors={["#001122", "#0066ff", "#ffffff", "#3399ff", "#0033aa", "#000066"]}
          speed={currentSpeed}
        />
        <MeshGradient
          className="absolute inset-0 w-full h-full opacity-60"
          colors={["#000033", "#ffffff", "#0099ff", "#0066cc", "#001166"]}
          speed={currentSpeed * 0.7}
        />
      </div>

      <div ref={containerRef} className="min-h-screen relative overflow-hidden">
        {/* SVG Filters */}
        <svg className="absolute inset-0 w-0 h-0 pointer-events-none">
          <defs>
            <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
              <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0.02
                        0 1 0 0 0.02
                        0 0 1 0 0.05
                        0 0 0 0.9 0"
                result="tint"
              />
            </filter>
            <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="gooey"
              />
              <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
            </filter>
          </defs>
        </svg>

        {children}
      </div>
    </>
  )
}