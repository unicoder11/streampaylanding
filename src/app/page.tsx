'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  const [activeNav, setActiveNav] = useState('Home')

  const services = [
    {
      title: "Real-Time Payments",
      description: "Instant fund transfers 24/7, enabling immediate settlement and improving cash flow management."
    },
    {
      title: "Digital Banking Platform",
      description: "Comprehensive online and mobile banking solutions for a seamless digital experience."
    },
    {
      title: "Payment Gateway Integration",
      description: "Secure and efficient payment processing for e-commerce and point-of-sale transactions."
    },
    {
      title: "Financial Analytics",
      description: "Advanced data analytics and reporting tools to gain insights into financial performance and customer behavior."
    }
  ]

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
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
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
                  Real Time<br />Payments
                </motion.h1>
                <motion.p 
                  className="max-w-md mx-auto text-xl text-gray-600 mb-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Receive funds into your account instantly and cost-effectively 24/7
                </motion.p>
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3 text-lg font-medium">
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
          <section id="services" className="py-20 bg-gray-50">
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
                StreamPay is a cutting-edge financial technology company dedicated to revolutionizing the way businesses handle payments and banking. Our mission is to provide seamless, efficient, and secure financial solutions that empower businesses to thrive in the digital economy.
              </motion.p>
              <motion.p 
                className="text-xl text-gray-600 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                With a team of experienced professionals and state-of-the-art technology, we are committed to delivering innovative services that streamline financial operations and drive growth for our clients.
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
              <form className="space-y-6">
                <Input type="text" placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Textarea placeholder="Your Message" />
                <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-3 text-lg font-medium">
                  Send Message
                </Button>
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
