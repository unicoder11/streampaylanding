import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

// Configurar SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

export async function GET() {
  try {
    // Verificar que las variables de entorno estén configuradas
    if (!process.env.SENDGRID_API_KEY) {
      return NextResponse.json(
        { error: 'SendGrid API Key no configurada' },
        { status: 500 }
      )
    }

    // Mensaje de prueba simple
    const testMessage = {
      to: 'nicolas.dotti@streampay.com',
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@example.com',
      subject: 'Test de SendGrid - StreamPay',
      text: 'Este es un mensaje de prueba para verificar que SendGrid funciona correctamente.',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Test de SendGrid</h2>
          <p>Este es un mensaje de prueba para verificar que SendGrid funciona correctamente.</p>
          <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES')}</p>
        </div>
      `
    }

    // Intentar enviar el email
    await sgMail.send(testMessage)

    return NextResponse.json(
      { 
        message: 'Test enviado exitosamente',
        from: process.env.SENDGRID_FROM_EMAIL,
        apiKeySet: !!process.env.SENDGRID_API_KEY
      },
      { status: 200 }
    )

  } catch (error: any) {
    console.error('Error en test de SendGrid:', error)
    
    return NextResponse.json(
      { 
        error: 'Error en SendGrid',
        details: error.message,
        code: error.code,
        response: error.response?.body
      },
      { status: 500 }
    )
  }
}
