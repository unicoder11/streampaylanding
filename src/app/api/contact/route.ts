import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

// Configurar SendGrid
if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY no está configurada')
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

interface ContactFormData {
  name: string
  email: string
  message: string
}

interface SendGridDynamicMessage {
  to: string
  from: string
  subject: string
  templateId: string
  dynamicTemplateData: Record<string, any>
}

interface SendGridError {
  code?: number
  message?: string
  response?: {
    body?: {
      errors?: Array<{
        message: string
        field?: string
      }>
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message }: ContactFormData = await request.json()
    
    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      )
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      )
    }

    const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'noreply@essencial.cc'
    const toEmail = 'nicolas.dotti@streampay.com'
    const templateId = process.env.SENDGRID_TEMPLATE_ID

    // Verificar que el template ID esté configurado
    if (!templateId) {
      throw new Error('SENDGRID_TEMPLATE_ID no está configurada')
    }

    const msg: SendGridDynamicMessage = {
      to: toEmail,
      from: fromEmail,
      subject: `New contact message from ${name}`,
      
      // Usar template dinámico de SendGrid
      templateId: templateId,
      
      // Datos dinámicos para el template
      dynamicTemplateData: {
        name: name,
        email: email,
        message: message,
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
    }

    console.log('Enviando email con configuración:', {
      to: msg.to,
      from: msg.from,
      subject: msg.subject,
      templateId: msg.templateId,
      apiKeySet: !!process.env.SENDGRID_API_KEY,
      templateIdSet: !!process.env.SENDGRID_TEMPLATE_ID
    })

    await sgMail.send(msg)
    console.log('✅ Email enviado exitosamente')
    
    return NextResponse.json(
      { message: 'Mensaje enviado exitosamente' },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ Error enviando email:', error)
    
    const sendGridError = error as SendGridError
    
    // Manejo específico de errores de SendGrid
    if (sendGridError.code === 403) {
      console.error('🚨 Dominio no verificado en SendGrid')
      return NextResponse.json(
        { 
          error: 'Configuración de email pendiente',
          message: 'El sistema de contacto está en configuración. Por favor, contacta directamente a nicolas.dotti@streampay.com'
        },
        { status: 500 }
      )
    }
    
    if (sendGridError.response?.body?.errors) {
      const errorMessage = sendGridError.response.body.errors[0]?.message || 'Error de SendGrid'
      console.error('SendGrid Error:', errorMessage)
      
      // Si es error de dominio no verificado
      if (errorMessage.includes('verified') || errorMessage.includes('domain')) {
        return NextResponse.json(
          { 
            error: 'Configuración de email pendiente',
            message: 'El sistema de contacto está en configuración. Por favor, contacta directamente a nicolas.dotti@streampay.com'
          },
          { status: 500 }
        )
      }
      
      return NextResponse.json(
        { error: `Error de email: ${errorMessage}` },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { 
        error: 'Error interno del servidor',
        message: 'Por favor, contacta directamente a nicolas.dotti@streampay.com'
      },
      { status: 500 }
    )
  }
}
