'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendContactEmail } from '@/lib/emailjs'

export default function Home() {
  const [activeNav, setActiveNav] = useState('Home')
  
  // Estados para el formulario de contacto
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const services = [
    {
      title: "Processing Services",
      description: "Cards and payment processing services depending on your licenses and region: cards issuing and acquiring programs, ATM and POS networks processing, e-commerce processing, crypto currencies operations processing."
    },
    {
      title: "Consulting Services",
      description: "MasterCard and VISA Membership (Business plan and Technological scenario), Payment system organization, Processing center and Chip bureau/ CV creation, PCI DSS documentation, ATM and POS networks, e-commerce projects."
    },
    {
      title: "Software as a Service",
      description: "Providing our software as a service [SaaS] without license purchase and without license fees."
    },
    {
      title: "Software Services",
      description: "Software sale, development, implementation and support for processing and payment products."
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
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Services'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm ${activeNav === item ? 'font-medium' : 'text-gray-500 hover:text-gray-900'}`}
                onClick={() => setActiveNav(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href="/griffin"
              className="text-sm text-gray-500 hover:text-gray-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Griffin
            </motion.a>
            {['About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm ${activeNav === item ? 'font-medium' : 'text-gray-500 hover:text-gray-900'}`}
                onClick={() => setActiveNav(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </motion.header>

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
                  We implement and support<br /> processing and banking products
                  {/* Real Time<br />Payments */}
                </motion.h1>
                <motion.p 
                  className="max-w-md mx-auto text-xl text-gray-600 mb-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Software sale, development, implementation and support for processing and payment products.
                  
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
                    Get Started
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
              Our Services
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
                      <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{service.description}</p>
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
                About StreamPay
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              > 
                With StreamPay Processing solutions we accumulated 25 years experience of our team with MasterCard and VISA projects implementation for banks and financial institutions around the world.


{/* In 1989 we start our history with a CardCenter MasterCard/ Europay Int. MSP creation in Moscow, with a first international MasterCard card issuing in post URSS territory.

In 1994 we established first ATM network and connected first POS terminal in the Russian Federation. */}



{/* ALFEBA Processing solutions is presented by StreamPay S.A. with a headquarter in Montevideo, Uruguay. */}

                {/* StreamPay is a cutting-edge financial technology company dedicated to revolutionizing the way businesses handle payments and banking. Our mission is to provide seamless, efficient, and secure financial solutions that empower businesses to thrive in the digital economy. */}
              </motion.p>
              <motion.p 
                className="text-xl text-gray-600 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                From the beginning of nineties of the IX we work under the Third Party processing centers creation, Banks-principal members of the MasterCard and VISA payment system licensing, ATM and POS networks organization and processing.
                </motion.p>
                <motion.p 
                className="text-xl text-gray-600 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Since 1994 we processed more than 50 banks principal members of VISA and MasterCard, like ABN AMRO AO, Dresdner bank AO, GarantiBank AO and other banks and financial institutions in America, Europe and Asia.                
                </motion.p> 
                <motion.p 
                className="text-xl text-gray-600 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Since our foundation we were improving our development strategy, changing our brands and trademarks. The basis of the business was a multi banking processing platform, from which the e-commerce platform was born about ten years ago.
              </motion.p> 
              <motion.p 
                className="text-xl text-gray-600 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Since 2010 we started implementing our solutions with AWS AMAZON PCI DSS certified cloud, decreasing implementation costs for our customers and accelerating the implementation process.
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
              Contact Us
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
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
                <Textarea 
                  name="message"
                  placeholder="Your Message" 
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
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                
                {/* Status messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <p className="text-green-800 text-center font-medium">
                      Message sent successfully! We&apos;ll contact you soon.
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
                      Error sending message. Please try again.
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
          <p>&copy; {new Date().getFullYear()} StreamPay. All rights reserved.</p>
        </motion.footer>
      </div>
    </div>
  )
}
