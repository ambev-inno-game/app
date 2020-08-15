import React from 'react'
import { WebView } from 'react-native-webview'

/**
 * Sempre em casa
 *
 * QR code
 * Localizar
 * Trocar Pontos
 *
 * Ambev Recicla
 */
export function HomeScreen() {
  return (
    <WebView
      source={{ uri: 'https://sempreemcasa.com.br/collections/todos' }}
    />
  )
}
