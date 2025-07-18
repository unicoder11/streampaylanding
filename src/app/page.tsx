'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendContactEmail } from '@/lib/emailjs'
import { useLanguage } from '@/context/LanguageContext'
import LanguageSwitch from '@/components/LanguageSwitch'

export default function Home() {
  const [activeNav, setActiveNav] = useState('Home')
  const [isLanguageReady, setIsLanguageReady] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Estados para el formulario de contacto
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  // Use translation keys for service data
  const services = [
    {
      titleKey: "services.processing.title",
      descriptionKey: "services.processing.description"
    },
    {
      titleKey: "services.consulting.title",
      descriptionKey: "services.consulting.description"
    },
    {
      titleKey: "services.saas.title",
      descriptionKey: "services.saas.description"
    },
    {
      titleKey: "services.software.title",
      descriptionKey: "services.software.description"
    }
  ]

  // Función para hacer scroll hacia la sección de contacto
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Funciones para manejar el formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await sendContactEmail(formData)
      
      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        console.error('EmailJS Error:', result.error)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error enviando formulario:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Obtener el contexto de idioma
  const { t, language } = useLanguage()
  
  // Marcar que el idioma está listo cuando se carga
  useEffect(() => {
    console.log('Idioma cargado en el componente Home:', language)
    setIsLanguageReady(true)
  }, [language])

  // Mostrar un mensaje de carga mientras se inicializa
  if (!isLanguageReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-xl">Cargando...</div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header 
          className="flex justify-between items-center py-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-2xl font-semibold">StreamPay</div>
          <div className="flex items-center gap-6">
            {/* Menu para dispositivos medianos y grandes */}
            <nav className="hidden md:flex space-x-8">
              <motion.a
                href="#home"
                className={`text-sm ${activeNav === 'Home' ? 'font-medium' : 'text-gray-500 hover:text-gray-900'}`}
                onClick={() => setActiveNav('Home')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('nav.home')}
              </motion.a>
              <motion.a
                href="#services"
                className={`text-sm ${activeNav === 'Services' ? 'font-medium' : 'text-gray-500 hover:text-gray-900'}`}
                onClick={() => setActiveNav('Services')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('nav.services')}
              </motion.a>
              <motion.a
                href="/griffin"
                className="text-sm text-gray-500 hover:text-gray-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('nav.griffin')}
              </motion.a>
              <motion.a
                href="#about"
                className={`text-sm ${activeNav === 'About' ? 'font-medium' : 'text-gray-500 hover:text-gray-900'}`}
                onClick={() => setActiveNav('About')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('nav.about')}
              </motion.a>
              <motion.a
                href="#contact"
                className={`text-sm ${activeNav === 'Contact' ? 'font-medium' : 'text-gray-500 hover:text-gray-900'}`}
                onClick={() => setActiveNav('Contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('nav.contact')}
              </motion.a>
            </nav>

            {/* Botón de menú hamburguesa para móviles */}
            <button 
              className="md:hidden text-gray-500 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {!mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
            
            <LanguageSwitch />
          </div>
        </motion.header>

        {/* Menú móvil desplegable */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-lg rounded-lg mt-2 overflow-hidden"
            >
              <nav className="flex flex-col p-4">
                <a
                  href="#home"
                  className={`py-2 px-3 text-sm rounded-md ${activeNav === 'Home' ? 'font-medium bg-gray-100' : 'text-gray-500 hover:bg-gray-50'}`}
                  onClick={() => {
                    setActiveNav('Home')
                    setMobileMenuOpen(false)
                  }}
                >
                  {t('nav.home')}
                </a>
                <a
                  href="#services"
                  className={`py-2 px-3 mt-1 text-sm rounded-md ${activeNav === 'Services' ? 'font-medium bg-gray-100' : 'text-gray-500 hover:bg-gray-50'}`}
                  onClick={() => {
                    setActiveNav('Services')
                    setMobileMenuOpen(false)
                  }}
                >
                  {t('nav.services')}
                </a>
                <a
                  href="/griffin"
                  className="py-2 px-3 mt-1 text-sm rounded-md text-gray-500 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.griffin')}
                </a>
                <a
                  href="#about"
                  className={`py-2 px-3 mt-1 text-sm rounded-md ${activeNav === 'About' ? 'font-medium bg-gray-100' : 'text-gray-500 hover:bg-gray-50'}`}
                  onClick={() => {
                    setActiveNav('About')
                    setMobileMenuOpen(false)
                  }}
                >
                  {t('nav.about')}
                </a>
                <a
                  href="#contact"
                  className={`py-2 px-3 mt-1 text-sm rounded-md ${activeNav === 'Contact' ? 'font-medium bg-gray-100' : 'text-gray-500 hover:bg-gray-50'}`}
                  onClick={() => {
                    setActiveNav('Contact')
                    setMobileMenuOpen(false)
                  }}
                >
                  {t('nav.contact')}
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        <main>
          {/* Hero Section */}
          <section id="home" className="py-20 sm:py-28">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-72 h-72 bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 rounded-full filter blur-3xl opacity-70"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 10,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                    repeat: Infinity,
                  }}
                ></motion.div>
                <motion.div 
                  className="w-72 h-72 bg-gradient-to-r from-yellow-200 via-green-200 to-blue-200 rounded-full filter blur-3xl opacity-70 ml-24 mt-24"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{
                    duration: 10,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                ></motion.div>
              </div>
              <div className="relative z-10">
                <motion.h1 
                  className="text-6xl sm:text-7xl font-extrabold tracking-tight mb-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {t('hero.title')}
                </motion.h1>
                <motion.p 
                  className="max-w-md mx-auto text-xl text-gray-600 mb-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {t('hero.subtitle')}
                </motion.p>
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Button 
                    onClick={scrollToContact}
                    className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3 text-lg font-medium"
                  >
                    {t('hero.cta')}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20 bg-white">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {t('services.title')}
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold">{t(service.titleKey)}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{t(service.descriptionKey)}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20">
            <div className="max-w-3xl mx-auto">
              <motion.h2 
                className="text-4xl font-bold mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {t('about.title')}
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              > 
                {t('about.experience')}
              </motion.p>
              <motion.p 
                className="text-xl text-gray-600 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {t('about.history')}
                </motion.p>
                <motion.p 
                className="text-xl text-gray-600 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {t('about.clients')}
                </motion.p> 
                <motion.p 
                className="text-xl text-gray-600 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {t('about.evolution')}
              </motion.p> 
              <motion.p 
                className="text-xl text-gray-600 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {t('about.technology')}
              </motion.p>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-gray-50">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {t('contact.title')}
            </motion.h2>
            <motion.div 
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input 
                  type="text" 
                  name="name"
                  placeholder={t('contact.name')} 
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
                <Input 
                  type="email" 
                  name="email"
                  placeholder={t('contact.email')} 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
                <Textarea 
                  name="message"
                  placeholder={t('contact.message')} 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-3 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t('contact.sending') : t('contact.submit')}
                </Button>
                
                {/* Status messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <p className="text-green-800 text-center font-medium">
                      {t('contact.success')}
                    </p>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <p className="text-red-800 text-center font-medium">
                      {t('contact.error')}
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </section>
        </main>

        <motion.footer 
          className="py-8 text-center text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>{t('griffin.footer').replace('Griffin Research', 'StreamPay')}</p>
        </motion.footer>
      </div>
    </div>
  )
}
