import emailjs from '@emailjs/browser'

interface ContactFormData {
  name: string
  email: string
  message: string
}

interface EmailJSResponse {
  success: boolean
  message?: string
  error?: string
}

export const sendContactEmail = async (formData: ContactFormData): Promise<EmailJSResponse> => {
  try {
    // Verificar que las variables de entorno estén configuradas
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration missing')
      return {
        success: false,
        error: 'Email service configuration is missing'
      }
    }

    // Parámetros para el template de EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'nicolas.dotti@streampay.com',
      reply_to: formData.email,
      date: new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      timestamp: new Date().toLocaleString('en-US'),
      year: new Date().getFullYear(),
      source: 'StreamPay Contact Form'
    }

    console.log('Sending email with EmailJS...', {
      serviceId,
      templateId,
      fromName: formData.name,
      fromEmail: formData.email
    })

    // Enviar email usando EmailJS
    const result = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    )

    console.log('✅ Email sent successfully:', result)
    
    return {
      success: true,
      message: 'Message sent successfully!'
    }
  } catch (error) {
    console.error('❌ EmailJS Error:', error)
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email'
    }
  }
}

// Función para inicializar EmailJS (opcional, para configuraciones adicionales)
export const initializeEmailJS = () => {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  
  if (publicKey) {
    emailjs.init(publicKey)
  }
}
