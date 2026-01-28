'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import LanguageSwitch from '@/components/LanguageSwitch'

export default function PrivacyPolicyPage() {
  const { t, language } = useLanguage()
  const [isLanguageReady, setIsLanguageReady] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    setIsLanguageReady(true)
  }, [language])
  
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
          <Link href="/" className="text-2xl font-semibold">StreamPay</Link>
          <div className="flex items-center gap-6">
            {/* Menu para dispositivos medianos y grandes */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-900">{t('nav.home')}</Link>
              <Link href="/#services" className="text-sm text-gray-500 hover:text-gray-900">{t('nav.services')}</Link>
              <Link href="/griffin" className="text-sm text-gray-500 hover:text-gray-900">{t('nav.griffin')}</Link>
              <Link href="/#about" className="text-sm text-gray-500 hover:text-gray-900">{t('nav.about')}</Link>
              <Link href="/#contact" className="text-sm text-gray-500 hover:text-gray-900">{t('nav.contact')}</Link>
              <span className="text-sm font-medium">Privacy Policy</span>
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
                <Link 
                  href="/"
                  className="py-2 px-3 text-sm rounded-md text-gray-500 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.home')}
                </Link>
                <Link
                  href="/#services"
                  className="py-2 px-3 mt-1 text-sm rounded-md text-gray-500 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.services')}
                </Link>
                <Link
                  href="/griffin"
                  className="py-2 px-3 mt-1 text-sm rounded-md text-gray-500 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.griffin')}
                </Link>
                <Link
                  href="/#about"
                  className="py-2 px-3 mt-1 text-sm rounded-md text-gray-500 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.about')}
                </Link>
                <Link
                  href="/#contact"
                  className="py-2 px-3 mt-1 text-sm rounded-md text-gray-500 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.contact')}
                </Link>
                <span className="py-2 px-3 mt-1 text-sm rounded-md font-medium bg-gray-100">
                  Privacy Policy
                </span>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="py-12">
          {/* Hero Section */}
          <section className="py-12">
            <motion.h1 
              className="text-5xl sm:text-6xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Privacy Policy
            </motion.h1>
          </section>

          {/* Privacy Policy Content */}
          <section className="py-8">
            <motion.div 
              className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-6 text-gray-700">
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">1.</span> Streampay S.A. (hereinafter &ldquo;Streampay&rdquo;) will only collect information containing personal data from users who provide their consent for it or within the framework of a contractual relationship.
                </p>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">2.</span> This &ldquo;Privacy Policy&rdquo; describes the treatment that &ldquo;Streampay&rdquo; will carry out regarding the personal information of its clients or potential clients (jointly the users) who may eventually contract its products or services.
                </p>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">3.</span> &ldquo;Streampay&rdquo; will treat the personal data provided by the users, only for the purpose and in the manner detailed in this Privacy Policy and in accordance with the Uruguayan regulations on Personal Data Protection.
                </p>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">4.</span> &ldquo;Streampay&rdquo; undertakes to use the personal data it receives exclusively for the specific purposes for which the user provides it. The Company reserves the right to process users&apos; personal data for use in connection with other services of the Company or its business partners, always in compliance with this privacy policy and the regulatory framework. For example, credit analysis by third-party business partners if the client so requests.
                </p>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">5.</span> Likewise, &ldquo;Streampay&rdquo; may conduct interviews and usability tests with users through video calls or surveys in order to develop value propositions and evaluate prototypes for its &ldquo;app&rdquo; or future developments, so personal data is also processed by these means, although there is no obligation to respond to them.
                </p>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">6.</span> The data collected in execution of the relationships regulated according to this Privacy Policy may be hosted on its own or outsourced servers, in Uruguay or abroad, as long as the respective jurisdiction has adequate levels of protection.
                </p>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">7.</span> Additionally, by accepting these terms and conditions, the User expressly authorizes that his/her personal data may also be hosted and processed on servers of &ldquo;Google Cloud Cluster&rdquo; located in the &ldquo;United States of America&rdquo;.
                </p>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">8.</span> This Privacy Policy may be modified by &ldquo;Streampay&rdquo; at any time, entering into force from the third business day after its publication on the website www.streampay.com. The modifications must be in full compliance with the regulatory framework of Uruguay.
                </p>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">9.</span> &ldquo;Streampay&rdquo; has implemented all necessary security measures to prevent unauthorized third parties from accessing the data. This includes physical security measures and access only by employees or subcontractors who need to access the data for work reasons, who will be subject to confidentiality clauses and professional secrecy obligations, contemplated in the Penal Code.
                </p>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">10.</span> &ldquo;Streampay&rdquo; will protect the personal data provided by &ldquo;users&rdquo; by not disclosing them and protecting them from unauthorized access; however, in the event of a court order, administrative order or investigations carried out by duly accredited prosecutors or police, &ldquo;Streampay&rdquo; may reveal some of the data in its possession.
                </p>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">11.</span> The data collected may be incorporated into the CLIENTS Database or other databases that may be generated, which in all cases will be registered with Uruguayan regulator.
                </p>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">12.</span> The database is responsible for StreamPay S.A., and the rights of access, modification or deletion may be exercised by contacting (598) 98880143 or by emailing info@streampay.com. The user may also submit, in the same manner, any complaints or suggestions that he or she deems appropriate. If you have any questions or suggestions regarding this website&apos;s Privacy Policy, please contact us at (598) 98880143 or by email at info@streampay.com.
                </p>
              </div>
            </motion.div>
          </section>
        </main>

        <motion.footer 
          className="py-8 text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} StreamPay. All rights reserved.</p>
        </motion.footer>
      </div>
    </div>
  )
}
