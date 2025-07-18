'use client'

import { createContext, useState, useContext, ReactNode, useEffect } from 'react'

// Tipos de idioma disponibles
export type Language = 'en' | 'es' | 'pt'

// Interfaz del contexto
interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

// Crear el contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Traducciones
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navegación
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.griffin': 'Griffin',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Página principal
    'hero.title': 'We implement and support processing and banking products',
    'hero.subtitle': 'Software sale, development, implementation and support for processing and payment products.',
    'hero.cta': 'Get Started',
    'services.title': 'Our Services',
    
    // Services translations
    'services.processing.title': 'Processing Services',
    'services.processing.description': 'Cards and payment processing services depending on your licenses and region: cards issuing and acquiring programs, ATM and POS networks processing, e-commerce processing, crypto currencies operations processing.',
    'services.consulting.title': 'Consulting Services',
    'services.consulting.description': 'MasterCard and VISA Membership (Business plan and Technological scenario), Payment system organization, Processing center and Chip bureau/ CV creation, PCI DSS documentation, ATM and POS networks, e-commerce projects.',
    'services.saas.title': 'Software as a Service',
    'services.saas.description': 'Providing our software as a service [SaaS] without license purchase and without license fees.',
    'services.software.title': 'Software Services',
    'services.software.description': 'Software sale, development, implementation and support for processing and payment products.',
    
    'about.title': 'About StreamPay',
    
    // About section translations
    'about.experience': 'With StreamPay Processing solutions we accumulated 25 years experience of our team with MasterCard and VISA projects implementation for banks and financial institutions around the world.',
    'about.history': 'From the beginning of nineties of the IX we work under the Third Party processing centers creation, Banks-principal members of the MasterCard and VISA payment system licensing, ATM and POS networks organization and processing.',
    'about.clients': 'Since 1994 we processed more than 50 banks principal members of VISA and MasterCard, like ABN AMRO AO, Dresdner bank AO, GarantiBank AO and other banks and financial institutions in America, Europe and Asia.',
    'about.evolution': 'Since our foundation we were improving our development strategy, changing our brands and trademarks. The basis of the business was a multi banking processing platform, from which the e-commerce platform was born about ten years ago.',
    'about.technology': 'Since 2010 we started implementing our solutions with AWS AMAZON PCI DSS certified cloud, decreasing implementation costs for our customers and accelerating the implementation process.',
    
    'contact.title': 'Contact Us',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Your Message',
    'contact.submit': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully! We\'ll contact you soon.',
    'contact.error': 'Error sending message. Please try again.',
    
    // Página Griffin
    'griffin.title': 'Griffin',
    'griffin.subtitle': 'Digital Bank-in-a-Box',
    'griffin.description': 'Create a seamless payment experience that drives customer engagement, using our end-to-end solution.',
    'griffin.cta': 'Get Started',
    'griffin.overview.title': 'Product Overview',
    'griffin.overview.description': 'Digital Bank-in-a-Box refers to a comprehensive solution that enables the rapid launch of a fully functional digital bank. It provides all the necessary components and infrastructure required to establish and operate a digital banking platform quickly and efficiently.',
    'griffin.features.title': 'Key Product Features',
    'griffin.interface.title': 'Interface & User Experience',
    'griffin.account.title': 'Account Management',
    'griffin.security.title': 'Security & Compliance',
    'griffin.account-types.title': 'Account Types',
    'griffin.operations.title': 'Operations & Transactions',
    'griffin.advanced.title': 'Advanced Features',
    'griffin.benefits.title': 'Benefits of Griffin Digital Bank-in-a-Box',
    'griffin.benefit.time.title': '⚡ Accelerated Time-to-Market',
    'griffin.benefit.experience.title': '🌟 Enhanced Customer Experience',
    'griffin.benefit.cost.title': '💰 Cost Savings and Efficiency',
    'griffin.benefit.innovation.title': '🚀 Innovation and Agility',
    'griffin.components.title': 'Main System Components',
    'griffin.cta.title': 'Ready to Launch Your Digital Bank?',
    'griffin.cta.description': 'Griffin Research offers a comprehensive Digital Bank-in-a-Box solution that enables financial institutions to quickly launch digital banking services with all necessary functionalities.',
    'griffin.cta.button': 'Contact for Griffin',
    'griffin.footer': '© {{year}} Griffin Research. All rights reserved.',
    
    // Selector de idioma
    'language.select': 'Language',
    'language.en': 'English',
    'language.es': 'Spanish',
    'language.pt': 'Portuguese'
  },
  es: {
    // Navegación
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.griffin': 'Griffin',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    
    // Página principal
    'hero.title': 'Implementamos y damos soporte a productos bancarios y de procesamiento',
    'hero.subtitle': 'Venta, desarrollo, implementación y soporte de software para productos de procesamiento y pago.',
    'hero.cta': 'Comenzar',
    'services.title': 'Nuestros Servicios',
    
    // Servicios traducciones
    'services.processing.title': 'Servicios de Procesamiento',
    'services.processing.description': 'Servicios de procesamiento de tarjetas y pagos según sus licencias y región: programas de emisión y adquisición de tarjetas, procesamiento de redes de cajeros automáticos y puntos de venta, procesamiento de comercio electrónico, procesamiento de operaciones con criptomonedas.',
    'services.consulting.title': 'Servicios de Consultoría',
    'services.consulting.description': 'Membresía MasterCard y VISA (Plan de negocios y escenario tecnológico), organización de sistema de pagos, centro de procesamiento y creación de Chip bureau/CV, documentación PCI DSS, redes de cajeros automáticos y puntos de venta, proyectos de comercio electrónico.',
    'services.saas.title': 'Software como Servicio',
    'services.saas.description': 'Proporcionamos nuestro software como servicio [SaaS] sin compra de licencia y sin tarifas de licencia.',
    'services.software.title': 'Servicios de Software',
    'services.software.description': 'Venta, desarrollo, implementación y soporte de software para productos de procesamiento y pago.',
    
    'about.title': 'Sobre StreamPay',
    
    // Sobre nosotros traducciones
    'about.experience': 'Con las soluciones de procesamiento de StreamPay hemos acumulado 25 años de experiencia de nuestro equipo con la implementación de proyectos MasterCard y VISA para bancos e instituciones financieras en todo el mundo.',
    'about.history': 'Desde principios de los años noventa trabajamos en la creación de centros de procesamiento de Terceros, licencias de bancos miembros principales del sistema de pago MasterCard y VISA, organización y procesamiento de redes de cajeros automáticos y puntos de venta.',
    'about.clients': 'Desde 1994 hemos procesado más de 50 bancos miembros principales de VISA y MasterCard, como ABN AMRO AO, Dresdner Bank AO, GarantiBank AO y otros bancos e instituciones financieras en América, Europa y Asia.',
    'about.evolution': 'Desde nuestra fundación hemos estado mejorando nuestra estrategia de desarrollo, cambiando nuestras marcas y marcas comerciales. La base del negocio fue una plataforma de procesamiento multibancario, de la que nació la plataforma de comercio electrónico hace unos diez años.',
    'about.technology': 'Desde 2010 comenzamos a implementar nuestras soluciones con la nube certificada AWS AMAZON PCI DSS, disminuyendo los costos de implementación para nuestros clientes y acelerando el proceso de implementación.',
    
    'contact.title': 'Contáctanos',
    'contact.name': 'Tu Nombre',
    'contact.email': 'Tu Email',
    'contact.message': 'Tu Mensaje',
    'contact.submit': 'Enviar Mensaje',
    'contact.sending': 'Enviando...',
    'contact.success': '¡Mensaje enviado correctamente! Te contactaremos pronto.',
    'contact.error': 'Error al enviar mensaje. Por favor, intenta de nuevo.',
    
    // Página Griffin
    'griffin.title': 'Griffin',
    'griffin.subtitle': 'Banco Digital Todo-en-Uno',
    'griffin.description': 'Crea una experiencia de pago perfecta que impulse la participación del cliente, utilizando nuestra solución integral.',
    'griffin.cta': 'Comenzar',
    'griffin.overview.title': 'Descripción del Producto',
    'griffin.overview.description': 'El Banco Digital Todo-en-Uno se refiere a una solución integral que permite el lanzamiento rápido de un banco digital completamente funcional. Proporciona todos los componentes e infraestructura necesarios para establecer y operar una plataforma bancaria digital de manera rápida y eficiente.',
    'griffin.features.title': 'Características Principales del Producto',
    'griffin.interface.title': 'Interfaz y Experiencia de Usuario',
    'griffin.account.title': 'Gestión de Cuentas',
    'griffin.security.title': 'Seguridad y Cumplimiento',
    'griffin.account-types.title': 'Tipos de Cuentas',
    'griffin.operations.title': 'Operaciones y Transacciones',
    'griffin.advanced.title': 'Características Avanzadas',
    'griffin.benefits.title': 'Beneficios del Banco Digital Todo-en-Uno Griffin',
    'griffin.benefit.time.title': '⚡ Aceleración del Tiempo de Comercialización',
    'griffin.benefit.experience.title': '🌟 Experiencia Mejorada del Cliente',
    'griffin.benefit.cost.title': '💰 Ahorro de Costos y Eficiencia',
    'griffin.benefit.innovation.title': '🚀 Innovación y Agilidad',
    'griffin.components.title': 'Componentes Principales del Sistema',
    'griffin.cta.title': '¿Listo para Lanzar tu Banco Digital?',
    'griffin.cta.description': 'Griffin Research ofrece una solución integral de Banco Digital Todo-en-Uno que permite a las instituciones financieras lanzar rápidamente servicios bancarios digitales con todas las funcionalidades necesarias.',
    'griffin.cta.button': 'Contactar para Griffin',
    'griffin.footer': '© {{year}} Griffin Research. Todos los derechos reservados.',
    
    // Selector de idioma
    'language.select': 'Idioma',
    'language.en': 'Inglés',
    'language.es': 'Español',
    'language.pt': 'Portugués'
  },
  pt: {
    // Navegación
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.griffin': 'Griffin',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    
    // Página principal
    'hero.title': 'Implementamos e apoiamos produtos bancários e de processamento',
    'hero.subtitle': 'Venda, desenvolvimento, implementação e suporte de software para produtos de processamento e pagamento.',
    'hero.cta': 'Começar',
    'services.title': 'Nossos Serviços',
    
    // Serviços traduções
    'services.processing.title': 'Serviços de Processamento',
    'services.processing.description': 'Serviços de processamento de cartões e pagamentos dependendo de suas licenças e região: programas de emissão e aquisição de cartões, processamento de redes ATM e POS, processamento de comércio eletrônico, processamento de operações com criptomoedas.',
    'services.consulting.title': 'Serviços de Consultoria',
    'services.consulting.description': 'Associação MasterCard e VISA (Plano de negócios e cenário tecnológico), organização de sistema de pagamentos, centro de processamento e criação de Chip bureau/CV, documentação PCI DSS, redes ATM e POS, projetos de comércio eletrônico.',
    'services.saas.title': 'Software como Serviço',
    'services.saas.description': 'Fornecemos nosso software como serviço [SaaS] sem compra de licença e sem taxas de licença.',
    'services.software.title': 'Serviços de Software',
    'services.software.description': 'Venda, desenvolvimento, implementação e suporte de software para produtos de processamento e pagamento.',
    
    'about.title': 'Sobre StreamPay',
    
    // Sobre seção traduções
    'about.experience': 'Com as soluções de processamento StreamPay, acumulamos 25 anos de experiência de nossa equipe com implementação de projetos MasterCard e VISA para bancos e instituições financeiras em todo o mundo.',
    'about.history': 'Desde o início dos anos noventa, trabalhamos na criação de centros de processamento de Terceiros, licenciamento de bancos membros principais do sistema de pagamento MasterCard e VISA, organização e processamento de redes ATM e POS.',
    'about.clients': 'Desde 1994, processamos mais de 50 bancos membros principais da VISA e MasterCard, como ABN AMRO AO, Dresdner Bank AO, GarantiBank AO e outros bancos e instituições financeiras na América, Europa e Ásia.',
    'about.evolution': 'Desde a nossa fundação, estamos melhorando nossa estratégia de desenvolvimento, mudando nossas marcas e marcas registradas. A base do negócio foi uma plataforma de processamento multi-bancário, da qual nasceu a plataforma de comércio eletrônico há cerca de dez anos.',
    'about.technology': 'Desde 2010, começamos a implementar nossas soluções com a nuvem certificada AWS AMAZON PCI DSS, diminuindo os custos de implementação para nossos clientes e acelerando o processo de implementação.',
    
    'contact.title': 'Contate-nos',
    'contact.name': 'Seu Nome',
    'contact.email': 'Seu Email',
    'contact.message': 'Sua Mensagem',
    'contact.submit': 'Enviar Mensagem',
    'contact.sending': 'Enviando...',
    'contact.success': 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    'contact.error': 'Erro ao enviar mensagem. Por favor, tente novamente.',
    
    // Página Griffin
    'griffin.title': 'Griffin',
    'griffin.subtitle': 'Banco Digital Tudo-em-Um',
    'griffin.description': 'Crie uma experiência de pagamento perfeita que impulsione o envolvimento do cliente, usando nossa solução completa.',
    'griffin.cta': 'Começar',
    'griffin.overview.title': 'Visão Geral do Produto',
    'griffin.overview.description': 'O Banco Digital Tudo-em-Um refere-se a uma solução abrangente que permite o lançamento rápido de um banco digital totalmente funcional. Fornece todos os componentes e infraestrutura necessários para estabelecer e operar uma plataforma bancária digital de forma rápida e eficiente.',
    'griffin.features.title': 'Principais Recursos do Produto',
    'griffin.interface.title': 'Interface e Experiência do Usuário',
    'griffin.account.title': 'Gestão de Contas',
    'griffin.security.title': 'Segurança e Conformidade',
    'griffin.account-types.title': 'Tipos de Contas',
    'griffin.operations.title': 'Operações e Transações',
    'griffin.advanced.title': 'Recursos Avançados',
    'griffin.benefits.title': 'Benefícios do Banco Digital Tudo-em-Um Griffin',
    'griffin.benefit.time.title': '⚡ Tempo de Mercado Acelerado',
    'griffin.benefit.experience.title': '🌟 Experiência do Cliente Aprimorada',
    'griffin.benefit.cost.title': '💰 Economia de Custos e Eficiência',
    'griffin.benefit.innovation.title': '🚀 Inovação e Agilidade',
    'griffin.components.title': 'Principais Componentes do Sistema',
    'griffin.cta.title': 'Pronto para Lançar seu Banco Digital?',
    'griffin.cta.description': 'Griffin Research oferece uma solução abrangente de Banco Digital Tudo-em-Um que permite que instituições financeiras lancem rapidamente serviços bancários digitais com todas as funcionalidades necessárias.',
    'griffin.cta.button': 'Contato para Griffin',
    'griffin.footer': '© {{year}} Griffin Research. Todos os direitos reservados.',
    
    // Selector de idioma
    'language.select': 'Idioma',
    'language.en': 'Inglês',
    'language.es': 'Espanhol',
    'language.pt': 'Português'
  }
}

// Proveedor del contexto
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Inicializar con el idioma guardado en localStorage o 'en' por defecto
  const [language, setLanguage] = useState<Language>('en')
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  // Cargar el idioma guardado al inicio
  useEffect(() => {
    // Solo ejecutar en cliente (no en servidor)
    if (typeof window !== 'undefined') {
      try {
        console.log('Inicializando idioma...')
        const savedLanguage = localStorage.getItem('language') as Language
        console.log('Idioma guardado en localStorage:', savedLanguage)
        
        if (savedLanguage && ['en', 'es', 'pt'].includes(savedLanguage)) {
          console.log('Estableciendo idioma desde localStorage:', savedLanguage)
          setLanguage(savedLanguage)
        } else {
          // Detectar idioma del navegador si no hay preferencia guardada
          const browserLang = navigator.language.split('-')[0].toLowerCase()
          console.log('Idioma del navegador detectado:', browserLang)
          
          // Comprobar si el idioma del navegador coincide con los idiomas soportados
          if (browserLang === 'es' || browserLang === 'pt') {
            console.log('Estableciendo idioma desde navegador:', browserLang)
            setLanguage(browserLang as Language)
          } else {
            console.log('Usando idioma por defecto (en) ya que el idioma detectado no está soportado')
          }
        }
      } catch (error) {
        console.error('Error loading language:', error)
      } finally {
        console.log('Idioma cargado:', language)
        setIsLoaded(true)
      }
    } else {
      // Si estamos en el servidor, marcar como cargado para no bloquear el renderizado
      console.log('Renderizando en servidor, usando idioma por defecto')
      setIsLoaded(true)
    }
  }, [])
  
  // Actualizar localStorage cuando cambia el idioma
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
    }
  }
  
  // Función para traducir
  const t = (key: string): string => {
    // Reemplazar variables dinámicas como {{year}}
    const translate = (text: string): string => {
      return text.replace(/\{\{year\}\}/g, new Date().getFullYear().toString())
    }
    
    // Verificar si estamos usando un idioma válido
    if (!translations[language]) {
      console.error(`Idioma no válido: "${language}". Usando inglés como fallback.`)
      
      // Si el idioma no es válido, intentar usar inglés
      if (translations['en'] && translations['en'][key]) {
        return translate(translations['en'][key])
      }
      
      return key
    }
    
    // Verificar si la clave existe para el idioma actual
    if (translations[language][key]) {
      const translatedText = translations[language][key]
      return translate(translatedText)
    }
    
    // Si no existe en el idioma actual, intentar con inglés como fallback
    if (language !== 'en' && translations['en'] && translations['en'][key]) {
      console.warn(`Traducción no encontrada para la clave "${key}" en idioma "${language}". Usando inglés como fallback.`)
      return translate(translations['en'][key])
    }
    
    // Si no existe traducción, devolver la clave
    console.warn(`Clave de traducción no encontrada: "${key}"`)
    return key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {/* Solo renderizar los hijos cuando el idioma esté cargado */}
      {isLoaded ? children : null}
    </LanguageContext.Provider>
  )
}

// Hook personalizado para usar el contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
