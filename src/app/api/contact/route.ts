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

    const msg = {
      to: toEmail,
      from: fromEmail,
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            📧 Nuevo mensaje de contacto - StreamPay
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>👤 Nombre:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>📧 Email:</strong> ${email}</p>
            <p style="margin: 0 0 10px 0;"><strong>⏰ Fecha:</strong> ${new Date().toLocaleString('es-ES')}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">💬 Mensaje:</h3>
            <p style="line-height: 1.6; color: #555;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
            <p>Este mensaje fue enviado desde el formulario de contacto de StreamPay</p>
          </div>
        </div>
      `,
    }

    console.log('Enviando email con configuración:', {
      to: msg.to,
      from: msg.from,
      subject: msg.subject,
      apiKeySet: !!process.env.SENDGRID_API_KEY
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
