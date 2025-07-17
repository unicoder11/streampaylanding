#!/bin/bash

# Script para probar la configuración de SendGrid Dynamic Template

echo "🔍 Verificando configuración de SendGrid Dynamic Template..."

# Verificar que las variables de entorno estén configuradas
if [ -f .env.local ]; then
    echo "✅ Archivo .env.local encontrado"
    
    # Verificar SENDGRID_API_KEY
    if grep -q "SENDGRID_API_KEY=" .env.local; then
        echo "✅ SENDGRID_API_KEY configurada"
    else
        echo "❌ SENDGRID_API_KEY no encontrada en .env.local"
        exit 1
    fi
    
    # Verificar SENDGRID_FROM_EMAIL  
    if grep -q "SENDGRID_FROM_EMAIL=" .env.local; then
        echo "✅ SENDGRID_FROM_EMAIL configurada"
    else
        echo "❌ SENDGRID_FROM_EMAIL no encontrada en .env.local"
        exit 1
    fi
    
    # Verificar SENDGRID_TEMPLATE_ID
    if grep -q "SENDGRID_TEMPLATE_ID=" .env.local; then
        TEMPLATE_ID=$(grep "SENDGRID_TEMPLATE_ID=" .env.local | cut -d'=' -f2)
        if [ -z "$TEMPLATE_ID" ] || [ "$TEMPLATE_ID" = "" ]; then
            echo "⚠️  SENDGRID_TEMPLATE_ID está vacía - necesitas configurar el Template ID"
            echo "   Consulta SENDGRID_TEMPLATE_SETUP.md para obtener instrucciones"
        else
            echo "✅ SENDGRID_TEMPLATE_ID configurada: $TEMPLATE_ID"
        fi
    else
        echo "❌ SENDGRID_TEMPLATE_ID no encontrada en .env.local"
        exit 1
    fi
    
else
    echo "❌ Archivo .env.local no encontrado"
    exit 1
fi

echo ""
echo "🚀 Para probar el sistema:"
echo "1. Configura SENDGRID_TEMPLATE_ID en .env.local (si aún no lo has hecho)"
echo "2. Crea un Dynamic Template en SendGrid con el HTML proporcionado"
echo "3. Ejecuta: pnpm dev"
echo "4. Ve a http://localhost:3000 y usa el formulario de contacto"
echo "5. Verifica que recibas el email con el diseño del template"
echo ""
echo "📖 Para más información, consulta SENDGRID_TEMPLATE_SETUP.md"
