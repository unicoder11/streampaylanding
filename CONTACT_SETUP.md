# Configuración del Formulario de Contacto

## ✅ Formulario de Contacto Funcional

El formulario de contacto ha sido implementado y está listo para usar. Cuando alguien envíe un mensaje, llegará directamente a **nicolas.dotti@streampay.com**.

## 🔧 Configuración Necesaria

### 1. Configurar Variables de Entorno

Para que el formulario funcione, necesitas configurar las credenciales de SendGrid:

1. **Copia el archivo de ejemplo:**
   ```bash
   cp .env.example .env.local
   ```

2. **Edita `.env.local` con tus credenciales:**
   ```env
   SENDGRID_API_KEY=SG.tu_api_key_aqui
   SENDGRID_FROM_EMAIL=noreply@essencial.cc
   ```

### 2. Configurar SendGrid (Configuración Actual)

Para usar SendGrid:

1. Ve a [SendGrid](https://sendgrid.com/) y crea una cuenta
2. Ir a **Settings** → **API Keys**
3. Crear una nueva API Key con permisos de **Mail Send**
4. Copiar la API Key y usarla en `SENDGRID_API_KEY`
5. Verificar el dominio **essencial.cc** en **Settings** → **Sender Authentication**
6. Los emails se enviarán desde `noreply@essencial.cc`

### 3. Alternativa con Gmail

Si prefieres usar Gmail en lugar de SendGrid:

1. Ve a [tu cuenta de Google](https://myaccount.google.com/)
2. Ir a **Seguridad** → **Verificación en dos pasos** (debe estar activada)
3. Ir a **Contraseñas de aplicación**
4. Generar una nueva contraseña para "Mail"
5. Modificar el código para usar nodemailer en lugar de SendGrid

**Configuración para Gmail:**
```env
SMTP_USER=tu_email@gmail.com
SMTP_PASS=tu_contraseña_de_aplicacion_gmail
```

**Otros proveedores:**

**Mailgun:**
```env
SENDGRID_API_KEY=tu_mailgun_api_key
SENDGRID_FROM_EMAIL=noreply@tu-dominio.com
```

## 🚀 Ejecutar el Proyecto

## 🚀 Ejecutar el Proyecto

```bash
npm run dev
```

## 📧 Funcionalidades Implementadas

- ✅ Validación de formulario en tiempo real
- ✅ Estados de carga (botón "Enviando...")
- ✅ Mensajes de éxito/error
- ✅ Envío de emails con formato HTML
- ✅ Campos obligatorios
- ✅ Validación de email
- ✅ Diseño responsivo

## 🎯 Destinatario

Todos los mensajes se envían a: **nicolas.dotti@streampay.com**

## 🔒 Seguridad

- Las credenciales se almacenan en variables de entorno
- Validación tanto en frontend como backend
- Sanitización de datos de entrada

## 📝 Personalización

Para cambiar el destinatario, edita la línea 30 en `src/app/api/contact/route.ts`:

```typescript
to: 'nuevo_email@streampay.com',
```

Para cambiar el email de envío, modifica `SENDGRID_FROM_EMAIL` en `.env.local` (debe estar verificado en SendGrid).
