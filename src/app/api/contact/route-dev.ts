import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      )
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Para desarrollo: solo loguear el mensaje
    console.log('=== FORMULARIO DE CONTACTO ===')
    console.log('Nombre:', name)
    console.log('Email:', email)
    console.log('Mensaje:', message)
    console.log('Fecha:', new Date().toLocaleString('es-ES'))
    console.log('==============================')

    // Simular envío exitoso
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { message: 'Mensaje enviado exitosamente (modo desarrollo)' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error procesando formulario:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
