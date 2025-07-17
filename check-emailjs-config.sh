#!/bin/bash

# Script para verificar la configuración de EmailJS

echo "🔍 Verificando configuración de EmailJS..."

# Verificar que las variables de entorno estén configuradas
if [ -f .env.local ]; then
    echo "✅ Archivo .env.local encontrado"
    
    # Verificar NEXT_PUBLIC_EMAILJS_SERVICE_ID
    if grep -q "NEXT_PUBLIC_EMAILJS_SERVICE_ID=" .env.local; then
        SERVICE_ID=$(grep "NEXT_PUBLIC_EMAILJS_SERVICE_ID=" .env.local | cut -d'=' -f2)
        if [ -z "$SERVICE_ID" ] || [ "$SERVICE_ID" = "" ]; then
            echo "⚠️  NEXT_PUBLIC_EMAILJS_SERVICE_ID está vacía"
        else
            echo "✅ NEXT_PUBLIC_EMAILJS_SERVICE_ID configurada: $SERVICE_ID"
        fi
    else
        echo "❌ NEXT_PUBLIC_EMAILJS_SERVICE_ID no encontrada en .env.local"
    fi
    
    # Verificar NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    if grep -q "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=" .env.local; then
        TEMPLATE_ID=$(grep "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=" .env.local | cut -d'=' -f2)
        if [ -z "$TEMPLATE_ID" ] || [ "$TEMPLATE_ID" = "" ]; then
            echo "⚠️  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID está vacía"
        else
            echo "✅ NEXT_PUBLIC_EMAILJS_TEMPLATE_ID configurada: $TEMPLATE_ID"
        fi
    else
        echo "❌ NEXT_PUBLIC_EMAILJS_TEMPLATE_ID no encontrada en .env.local"
    fi
    
    # Verificar NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if grep -q "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=" .env.local; then
        PUBLIC_KEY=$(grep "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=" .env.local | cut -d'=' -f2)
        if [ -z "$PUBLIC_KEY" ] || [ "$PUBLIC_KEY" = "" ]; then
            echo "⚠️  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY está vacía"
        else
            echo "✅ NEXT_PUBLIC_EMAILJS_PUBLIC_KEY configurada: ${PUBLIC_KEY:0:10}..."
        fi
    else
        echo "❌ NEXT_PUBLIC_EMAILJS_PUBLIC_KEY no encontrada en .env.local"
    fi
    
else
    echo "❌ Archivo .env.local no encontrado"
    exit 1
fi

echo ""
echo "🚀 Para configurar EmailJS:"
echo "1. Crea cuenta en https://www.emailjs.com/"
echo "2. Configura un servicio de email (Gmail recomendado)"
echo "3. Crea un template con las variables necesarias"
echo "4. Obtén Service ID, Template ID y Public Key"
echo "5. Configura las variables en .env.local"
echo ""
echo "📖 Para instrucciones detalladas, consulta EMAILJS_SETUP.md"
echo ""
echo "🧪 Para probar:"
echo "1. Configura todas las variables de EmailJS"
echo "2. Ejecuta: pnpm dev"
echo "3. Ve a http://localhost:3000"
echo "4. Usa el formulario de contacto"
echo "5. Verifica que recibas el email"
