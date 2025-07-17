'use client'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

export default function GriffinPage() {
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
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-sm text-gray-500 hover:text-gray-900">Home</Link>
            <Link href="/#services" className="text-sm text-gray-500 hover:text-gray-900">Services</Link>
            <span className="text-sm font-medium">Griffin</span>
            <Link href="/#about" className="text-sm text-gray-500 hover:text-gray-900">About</Link>
            <Link href="/#contact" className="text-sm text-gray-500 hover:text-gray-900">Contact</Link>
          </nav>
        </motion.header>

        <main>
          {/* Hero Section */}
          <section className="py-20 sm:py-28">
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
                  Griffin Research<br />Digital Bank-in-a-Box
                </motion.h1>
                <motion.p 
                  className="max-w-md mx-auto text-xl text-gray-600 mb-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Create a seamless payment experience that drives customer engagement, using our end-to-end solution.
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

          {/* Product Overview */}
          <section className="py-20 bg-white">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Product Overview
            </motion.h2>
            <div className="max-w-4xl mx-auto">
              <motion.p 
                className="text-xl text-gray-600 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Digital Bank-in-a-Box refers to a comprehensive solution that enables the rapid launch of a fully functional digital bank. It provides all the necessary components and infrastructure required to establish and operate a digital banking platform quickly and efficiently.
              </motion.p>
            </div>
          </section>

          {/* Key Features */}
          <section className="py-20 bg-white">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Key Product Features
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Interface & User Experience",
                  features: [
                    "Professional, fresh, user friendly banking interface",
                    "Real-time updates - All balances and transactions updated in real time",
                    "Mobile application for iOS and Android",
                    "Responsive web UI - works on any device",
                    "Custom user color scheme",
                    "Completely customizable interface"
                  ]
                },
                {
                  title: "Account Management",
                  features: [
                    "Bank operator account - manages payments",
                    "Controller's office - maintains documents/invoices",
                    "Support agent account with AI assistants",
                    "Treasurer account - makes payments in currencies",
                    "CFO - maintains accounting and manages liquidity",
                    "Offices for branch officers, client managers, bankers"
                  ]
                },
                {
                  title: "Security & Compliance",
                  features: [
                    "Encryption of all important numbers and documents",
                    "PCI DSS compliant cloud by Google",
                    "2FA login: SMS, Google Auth, email, Face ID, Touch ID",
                    "Additional 2FA for dangerous operations",
                    "Automatic verification of passports and documents",
                    "UBO verification with visual graph of shareholders"
                  ]
                },
                {
                  title: "Account Types",
                  features: [
                    "Cash accounts",
                    "Crypto accounts",
                    "Card accounts (credit and debit)",
                    "Bonds",
                    "Interest bearing accounts",
                    "Investment accounts (shares)",
                    "Automated management with AI"
                  ]
                },
                {
                  title: "Operations & Transactions",
                  features: [
                    "Currency exchange",
                    "Crypto: in, out, exchange, custody",
                    "Easy-to-use pending operations system",
                    "Crypto wallet verification for sanctions/darknet",
                    "Corporate client verification with risk assessment",
                    "Multi-currency support"
                  ]
                },
                {
                  title: "Advanced Features",
                  features: [
                    "Complete and flexible commission system",
                    "Exchange rates from multiple sources",
                    "Landing pages and referral programs",
                    "Internal PayPal - clients can send money to each other",
                    "Complete crypto exchange with Binance-like interface",
                    "AI assistants in chat system"
                  ]
                }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white h-full border-0 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/30 transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {section.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-gray-600 text-sm flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="py-20 bg-white">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Benefits of Griffin Digital Bank-in-a-Box
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "⚡ Accelerated Time-to-Market",
                  description: "Significant reduction in time required to launch digital banking services, competitive advantage in the market with a pre-built solution ready to implement."
                },
                {
                  title: "🌟 Enhanced Customer Experience",
                  description: "User-friendly interfaces, seamless transactions, personal financial management tools leading to higher customer satisfaction and loyalty."
                },
                {
                  title: "💰 Cost Savings and Efficiency",
                  description: "Eliminates need for extensive in-house development, reduces operational costs associated with traditional banking infrastructure."
                },
                {
                  title: "🚀 Innovation and Agility",
                  description: "Leveraging emerging technologies, integration of new features, quick adaptation to market demands, stay ahead in digital transformation journey."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* System Components */}
          <section className="py-20 bg-white">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Main System Components
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Core Banking System",
                  description: "Customer data management, account management, transaction processing, risk management, smooth and secure operation of various banking services."
                },
                {
                  title: "Mobile & Web Applications",
                  description: "Ready-to-use mobile and web applications with intuitive interface, access to accounts and transactions, transaction history visualization."
                },
                {
                  title: "Payment Gateways",
                  description: "Seamless integration with payment gateways, support for multiple methods including credit/debit cards, mobile wallets, electronic fund transfers."
                },
                {
                  title: "Security Features",
                  description: "Robust encryption, multi-factor authentication, anti-fraud systems, regular security audits, comprehensive data and transaction protection."
                },
                {
                  title: "Account Opening & Onboarding",
                  description: "Digitized account opening process, document verification, eKYC compliance, automated onboarding procedures."
                },
                {
                  title: "Personal Financial Management",
                  description: "Expense tracking, budget setting, expense analysis, personalized financial insights, built-in financial management tools."
                },
                {
                  title: "Regulatory Compliance",
                  description: "Compliance with financial regulations, Anti-Money Laundering (AML), Know Your Customer (KYC), data protection laws."
                },
                {
                  title: "Scalability & Customization",
                  description: "Scalable design for customer base growth, customizable for unique bank needs, adaptable to changing market dynamics."
                }
              ].map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white h-full border-0 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/30 transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold">{component.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{component.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 bg-white">
            <div className="text-center">
              <motion.h2 
                className="text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Ready to Launch Your Digital Bank?
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Griffin Research offers a comprehensive Digital Bank-in-a-Box solution that enables financial institutions to quickly launch digital banking services with all necessary functionalities.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link href="/#contact">
                  <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3 text-lg font-medium">
                    Contact Griffin Research
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>
        </main>

        <motion.footer 
          className="py-8 text-center text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Griffin Research. All rights reserved.</p>
        </motion.footer>
      </div>
    </div>
  )
}
