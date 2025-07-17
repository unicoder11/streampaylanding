import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

// Configurar SendGrid
if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY no está configurada')
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

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

export async function GET() {
  try {
    const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'noreply@essencial.cc'
    const toEmail = 'nicolas.dotti@streampay.com'

    const msg = {
      to: toEmail,
      from: fromEmail,
      subject: '🧪 Test de SendGrid - StreamPay',
      html: `
        <h2>✅ Test de SendGrid Exitoso</h2>
        <p>Este es un email de prueba enviado desde el endpoint de test.</p>
        <p><strong>Configuración:</strong></p>
        <ul>
          <li>From: ${fromEmail}</li>
          <li>To: ${toEmail}</li>
          <li>Fecha: ${new Date().toLocaleString('es-ES')}</li>
        </ul>
      `,
    }

    await sgMail.send(msg)
    
    return NextResponse.json({
      success: true,
      message: 'Test email enviado exitosamente',
      config: {
        from: fromEmail,
        to: toEmail
      }
    })
  } catch (error) {
    console.error('❌ Error en test de SendGrid:', error)
    
    const sendGridError = error as SendGridError
    
    return NextResponse.json({
      success: false,
      error: sendGridError.message || 'Error desconocido',
      code: sendGridError.code,
      details: sendGridError.response?.body?.errors || null
    }, { status: 500 })
  }
}
