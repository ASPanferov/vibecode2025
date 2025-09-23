"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface BlueGradientBackgroundProps {
  children: React.ReactNode
}

export default function BlueGradientBackground({ children }: BlueGradientBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
          }}
          animate={{
            x: mousePosition.x * 100,
            y: mousePosition.y * 100,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 100 }}
        />

        <motion.div
          className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, #1d4ed8 0%, transparent 70%)",
            right: "10%",
            top: "20%",
          }}
          animate={{
            x: -mousePosition.x * 50,
            y: mousePosition.y * 80,
            rotate: 360,
          }}
          transition={{
            x: { type: "spring", damping: 50, stiffness: 100 },
            y: { type: "spring", damping: 50, stiffness: 100 },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
        />

        <motion.div
          className="absolute w-64 h-64 rounded-full opacity-10 blur-2xl"
          style={{
            background: "radial-gradient(circle, #60a5fa 0%, transparent 70%)",
            left: "70%",
            bottom: "30%",
          }}
          animate={{
            x: mousePosition.x * 30,
            y: -mousePosition.y * 60,
          }}
          transition={{ type: "spring", damping: 40, stiffness: 80 }}
        />

        {/* Animated mesh pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}