# Configuración del Template Dinámico de SendGrid

## Pasos para obtener el Template ID

1. **Acceder a SendGrid Dashboard**
   - Ve a [SendGrid Dashboard](https://app.sendgrid.com)
   - Inicia sesión con tu cuenta

2. **Navegar a Dynamic Templates**
   - En el menú lateral, busca "Email API"
   - Haz clic en "Dynamic Templates"

3. **Crear un nuevo template dinámico**
   - Haz clic en "Create a Dynamic Template"
   - Dale un nombre descriptivo (ejemplo: "StreamPay Contact Form")
   - Haz clic en "Create"

4. **Obtener el Template ID**
   - Después de crear el template, verás el Template ID
   - Copia este ID completo (formato: `d-xxxxxxxxxx`)

5. **Crear una versión del template**
   - Haz clic en "Add Version"
   - Selecciona "Code Editor" para crear desde cero
   - Pega el HTML del template dinámico (ver abajo)

6. **Configurar en el proyecto**
   - Abre el archivo `.env.local`
   - Reemplaza la línea: `SENDGRID_TEMPLATE_ID=`
   - Por: `SENDGRID_TEMPLATE_ID=d-tu-template-id-aqui`

## Ejemplo de configuración completa

```bash
# Configuración de SendGrid
SENDGRID_API_KEY=SG.tu-api-key-aqui
SENDGRID_FROM_EMAIL=noreply@essencial.cc
SENDGRID_TEMPLATE_ID=d-1234567890abcdef
```

## Variables del template dinámico

El template dinámico utiliza estas variables que son reemplazadas automáticamente:

- `{{name}}` - Nombre del contacto
- `{{email}}` - Email del contacto
- `{{message}}` - Mensaje del contacto
- `{{date}}` - Fecha formateada (ejemplo: "Monday, July 17, 2025")
- `{{timestamp}}` - Timestamp completo (ejemplo: "7/17/2025, 3:30:00 PM")
- `{{year}}` - Año actual (ejemplo: "2025")
- `{{source}}` - Fuente del mensaje (ejemplo: "StreamPay Contact Form")

## Template HTML para Dynamic Templates

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StreamPay Contact Form</title>
    <style>
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            background-color: #f8f9fa; 
            margin: 0; 
            padding: 20px; 
        }
        .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background-color: white; 
            border-radius: 8px; 
            overflow: hidden; 
            box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
        }
        .header { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            color: white; 
            padding: 40px 30px; 
            text-align: center; 
        }
        .header h1 { 
            margin: 0; 
            font-size: 28px; 
            font-weight: 600;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header p { 
            margin: 8px 0 0 0; 
            font-size: 16px;
            opacity: 0.9;
        }
        .content { 
            padding: 40px 30px; 
        }
        .info-section { 
            background-color: #f8f9fa; 
            padding: 25px; 
            border-radius: 8px; 
            margin-bottom: 25px; 
            border-left: 4px solid #667eea; 
        }
        .info-row { 
            margin-bottom: 15px; 
            font-size: 16px; 
        }
        .info-row:last-child { 
            margin-bottom: 0; 
        }
        .info-label { 
            font-weight: 600; 
            color: #333333; 
            display: inline-block; 
            width: 80px; 
            margin-right: 10px; 
        }
        .info-value { 
            color: #555555; 
        }
        .message-section { 
            background-color: #ffffff; 
            padding: 25px; 
            border-radius: 8px; 
            border: 1px solid #e9ecef; 
            margin-bottom: 25px; 
        }
        .message-title { 
            font-size: 18px; 
            font-weight: 600; 
            color: #333333; 
            margin-bottom: 15px; 
        }
        .message-content { 
            font-size: 16px; 
            line-height: 1.6; 
            color: #555555; 
            word-wrap: break-word; 
        }
        .footer { 
            background-color: #f8f9fa; 
            padding: 30px; 
            text-align: center; 
            border-top: 1px solid #e9ecef; 
        }
        .footer p { 
            color: #666666; 
            font-size: 14px; 
            margin: 0; 
            line-height: 1.4; 
        }
        .footer a { 
            color: #667eea; 
            text-decoration: none; 
        }
        .footer a:hover { 
            text-decoration: underline; 
        }
        .timestamp { 
            background-color: #e9ecef; 
            padding: 12px 20px; 
            text-align: center; 
            font-size: 12px; 
            color: #666666; 
            border-radius: 4px; 
            margin-top: 20px; 
        }
        @media only screen and (max-width: 600px) {
            .container { width: 100% !important; margin: 0 !important; }
            .header, .content, .footer { padding: 20px !important; }
            .header h1 { font-size: 24px !important; }
            .info-section, .message-section { padding: 20px !important; }
            .info-label { width: 70px !important; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📧 StreamPay Contact Form</h1>
            <p>New message received from your website</p>
        </div>
        
        <div class="content">
            <div class="info-section">
                <div class="info-row">
                    <span class="info-label">👤 Name:</span>
                    <span class="info-value">{{name}}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">📧 Email:</span>
                    <span class="info-value">{{email}}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">⏰ Date:</span>
                    <span class="info-value">{{date}}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">🌐 Source:</span>
                    <span class="info-value">{{source}}</span>
                </div>
            </div>
            
            <div class="message-section">
                <div class="message-title">
                    💬 Message Content
                </div>
                <div class="message-content">
                    {{message}}
                </div>
            </div>
            
            <div class="timestamp">
                This message was received on {{timestamp}}
            </div>
        </div>
        
        <div class="footer">
            <p>
                This email was sent from the StreamPay contact form.<br>
                Visit our website: <a href="https://streampay.com">streampay.com</a><br>
                Griffin Research: <a href="https://streampay.com/griffin">Learn more about our Digital Bank-in-a-Box</a>
            </p>
            <p style="margin-top: 15px; font-size: 12px; color: #999999;">
                © {{year}} StreamPay. All rights reserved.
            </p>
        </div>
    </div>
</body>
</html>
```

## Testing

Para probar el template:

1. Asegúrate de que `SENDGRID_TEMPLATE_ID` esté configurado
2. Reinicia el servidor de desarrollo: `pnpm dev`
3. Usa el formulario de contacto en tu sitio web
4. Verifica que el email se reciba con el diseño del template

## Troubleshooting

- Si ves error "SENDGRID_TEMPLATE_ID no está configurada", verifica el archivo `.env.local`
- Si el email no se ve bien, revisa que el template esté guardado y activado en SendGrid
- Si las variables no se reemplazan, verifica que uses el formato `{{variable}}` en el template
- Para templates dinámicos, no necesitas el tag `<% body %>` (solo para legacy templates)
- Asegúrate de que la versión del template esté marcada como "Active" en SendGrid
