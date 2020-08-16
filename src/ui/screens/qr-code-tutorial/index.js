import React, { useLayoutEffect } from 'react'
import { View, Image } from 'react-native'

import { COLORS } from '~/res'
import { NavigationService } from '~/services'
import { BBText, Button, AppHeader } from '~/ui/components'

import styles from './styles'

export function QrCodeTutorialScreen() {
  return (
    <View style={styles.container}>
      <BBText color={COLORS.CARIBBEAN_GREEN} size={20} type='secondary-bold'>
        Como fazer o descarte dos seus resíduos?
      </BBText>
      <BBText size={16} style={styles.text}>
        1. Vá até um local de coleta próximo a você;
      </BBText>
      <BBText size={16} style={styles.text}>
        2. Leia o QR Code do local para fazer check-in;
      </BBText>
      <BBText size={16} style={styles.text}>
        3. Leia o QR Code das embalagens que você irá retornar;
      </BBText>
      <BBText size={16} style={styles.text}>
        4. Leia o QR Code do local novamente para finalizar o processo e receber
        os pontos.
      </BBText>
      <Button
        onPress={() => {
          NavigationService.navigate({ screen: 'QrCodeScreen' })
        }}
      >
        Escanear QR Codes
      </Button>
    </View>
  )
}
