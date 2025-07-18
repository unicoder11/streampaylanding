'use client'

import { useState, useEffect, useRef } from 'react'
import { useLanguage, Language } from '@/context/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'

export default function LanguageSwitch() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Cerrar el dropdown cuando se hace click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Iconos de banderas para cada idioma
  const flags: Record<Language, string> = {
    en: '🇺🇸',
    es: '🇪🇸',
    pt: '🇧🇷'
  }

  return (
    <div ref={ref} className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-sm font-medium px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
        aria-label={t('language.select')}
      >
        <span className="mr-2 text-base">
          {flags[language]}
        </span>
        <span>{language.toUpperCase()}</span>
        <svg
          className={`ml-1.5 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          >
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
            >
              {(Object.keys(flags) as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang)
                    setIsOpen(false)
                  }}
                  className={`flex items-center w-full px-4 py-2.5 text-sm ${
                    language === lang ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-700 hover:bg-gray-50'
                  } transition-colors`}
                  role="menuitem"
                >
                  <span className="mr-3 text-base">{flags[lang]}</span>
                  <span>{t(`language.${lang}`)}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
