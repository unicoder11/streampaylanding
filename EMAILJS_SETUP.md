# EmailJS Setup Guide

## ¿Qué es EmailJS?

EmailJS es un servicio que permite enviar emails directamente desde el frontend de tu aplicación sin necesidad de un servidor backend. Es perfecto para formularios de contacto.

## Ventajas de EmailJS

- ✅ **Gratuito** hasta 200 emails/mes
- ✅ **Funciona desde el frontend** (no necesita backend)
- ✅ **Fácil configuración**
- ✅ **Compatible con Gmail, Outlook, Yahoo, etc.**
- ✅ **Templates personalizables**
- ✅ **Funciona en Vercel/Netlify sin problemas**

## Configuración Paso a Paso

### 1. Crear cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up" 
3. Crea tu cuenta gratuita

### 2. Configurar un servicio de email

1. En el dashboard, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor de email (Gmail recomendado)
4. Sigue las instrucciones para conectar tu cuenta
5. **Guarda el Service ID** (ejemplo: `service_abc123`)

### 3. Crear un template de email

1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Crea un template con este contenido:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>StreamPay Contact Form</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .info { background: white; padding: 15px; margin: 10px 0; border-radius: 4px; border-left: 4px solid #667eea; }
        .message { background: white; padding: 15px; margin: 10px 0; border-radius: 4px; }
        .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>📧 StreamPay Contact Form</h2>
            <p>New message received from your website</p>
        </div>
        
        <div class="content">
            <div class="info">
                <p><strong>👤 Name:</strong> {{from_name}}</p>
                <p><strong>📧 Email:</strong> {{from_email}}</p>
                <p><strong>⏰ Date:</strong> {{date}}</p>
                <p><strong>🌐 Source:</strong> {{source}}</p>
            </div>
            
            <div class="message">
                <h3>💬 Message:</h3>
                <p>{{message}}</p>
            </div>
            
            <div class="footer">
                <p>This message was sent from the StreamPay contact form</p>
                <p>Received on {{timestamp}}</p>
            </div>
        </div>
    </div>
</body>
</html>
```

4. Configura el **Subject**: `New Contact Message from {{from_name}}`
5. Configura el **To Email**: `nicolas.dotti@streampay.com`
6. Configura el **Reply To**: `{{from_email}}`
7. **Guarda el Template ID** (ejemplo: `template_xyz789`)

### 4. Obtener la Public Key

1. Ve a "Account" en el dashboard
2. Encuentra la sección "API Keys"
3. **Copia la Public Key** (ejemplo: `abc123def456`)

### 5. Configurar las variables de entorno

Abre el archivo `.env.local` y completa:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abc123def456
```

## Testing

1. **Guarda todos los archivos**
2. **Reinicia el servidor**: `pnpm dev`
3. **Ve a tu sitio web**: `http://localhost:3000`
4. **Usa el formulario de contacto**
5. **Revisa tu email** (nicolas.dotti@streampay.com)

## Troubleshooting

### Error: "Email service configuration is missing"
- Verifica que todas las variables de entorno estén configuradas
- Asegúrate de que los valores no estén vacíos
- Reinicia el servidor después de cambiar las variables

### Error: "Failed to send email"
- Verifica que el Service ID sea correcto
- Verifica que el Template ID sea correcto
- Verifica que la Public Key sea correcta
- Revisa la consola del navegador para más detalles

### El email no llega
- Revisa la carpeta de spam
- Verifica que el email de destino sea correcto
- Asegúrate de que el template esté "Active" en EmailJS

### Variables del template no se reemplazan
- Verifica que uses la sintaxis correcta: `{{variable}}`
- Asegúrate de que las variables en el template coincidan con las enviadas desde el código

## Variables disponibles en el template

- `{{from_name}}` - Nombre del contacto
- `{{from_email}}` - Email del contacto
- `{{message}}` - Mensaje del contacto
- `{{date}}` - Fecha formateada
- `{{timestamp}}` - Timestamp completo
- `{{source}}` - Fuente del mensaje
- `{{to_email}}` - Email de destino
- `{{reply_to}}` - Email para responder

## Límites del plan gratuito

- **200 emails/mes** - Perfecto para sitios web pequeños/medianos
- **Soporte por email**
- **Templates ilimitados**
- **Servicios de email ilimitados**

## Migración desde SendGrid

El sistema está configurado para usar EmailJS en lugar de SendGrid. Una vez configurado EmailJS:

1. Puedes eliminar el archivo: `src/app/api/contact/route.ts`
2. Puedes eliminar las variables de SendGrid del `.env.local`
3. El formulario funcionará directamente desde el frontend

## Ventajas vs SendGrid

- ✅ **Más simple** - No necesita backend
- ✅ **Más confiable** - Funciona en cualquier hosting
- ✅ **Mejor para sitios estáticos** - Compatible con Vercel/Netlify
- ✅ **Sin problemas de dominio** - No necesita verificar dominios
- ✅ **Configuración más rápida** - Listo en minutos
