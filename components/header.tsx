"use client"

import { Globe, Menu, X } from "lucide-react"
import { useLanguage, Language } from "@/contexts/language-context"
import { useState } from "react"

interface HeaderProps {
  activeSection?: string
  setActiveSection?: (section: string) => void
}

export default function Header({ activeSection = "home", setActiveSection }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (section: string) => {
    if (setActiveSection) {
      setActiveSection(section)
    }
    setIsMobileMenuOpen(false)
  }

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
  }

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "about", label: t("nav.about") },
    { id: "program", label: t("nav.program") },
    { id: "participants", label: t("nav.participants") },
    { id: "criteria", label: t("nav.criteria") },
    { id: "prizes", label: t("nav.prizes") },
    { id: "partners", label: t("nav.partners") }
  ]

  const languages = [
    { code: 'ru' as Language, label: 'РУ' },
    { code: 'en' as Language, label: 'EN' },
    { code: 'uz' as Language, label: 'UZ' }
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] border-b border-white/10">
        <div className="relative overflow-hidden bg-black/15 backdrop-blur-md">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
        <div className="relative z-10 flex items-center justify-between p-4 md:p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick("home")}>
            <img
              src="/angel-connect-logo.png"
              alt="Angel Connect Logo"
              className="w-6 h-6 md:w-8 md:h-8 object-contain"
            />
            <div className="text-white text-lg md:text-xl tracking-tight font-extrabold">
              Angel Connect
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs font-light px-3 py-2 rounded-full transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-white bg-white/20"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative flex items-center gap-1 bg-white/10 rounded-full p-1">
              <Globe className="w-4 h-4 text-white/60 ml-2" />
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                    language === lang.code
                      ? "bg-blue-500 text-white"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Registration Button */}
            <button className="px-6 py-2 rounded-full bg-blue-500 text-white font-normal text-xs transition-all duration-300 hover:bg-blue-400 cursor-pointer h-8 flex items-center">
              {t("header.participate")}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 top-full bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-black/95 via-black/90 to-black/85 backdrop-blur-xl border-t border-white/10 shadow-2xl transition-all duration-300 ease-in-out z-50 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="flex flex-col p-6 space-y-3">
              {/* Mobile Navigation */}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left p-4 rounded-xl transition-all duration-300 border ${
                    activeSection === item.id
                      ? "text-white bg-gradient-to-r from-blue-500/20 to-blue-600/20 border-blue-400/30 shadow-lg"
                      : "text-white/80 hover:text-white hover:bg-white/5 border-white/10 hover:border-white/20"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <Globe className="w-5 h-5 text-blue-400" />
                <div className="flex gap-2 flex-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        language === lang.code
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                          : "text-white/70 hover:text-white hover:bg-white/10 border border-white/20 hover:border-white/30"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Registration Button */}
              <button className="w-full mt-4 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium transition-all duration-300 hover:from-blue-400 hover:to-blue-500 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                {t("header.participate")}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
