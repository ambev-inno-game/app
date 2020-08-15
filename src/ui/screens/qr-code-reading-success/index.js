import React, { useLayoutEffect } from 'react'
import { View, Image } from 'react-native'

import { COLORS } from '~/res'
import { NavigationService } from '~/services'
import { BBText, Button, AppHeader } from '~/ui/components'

import styles from './styles'

export function QrCodeReagingSuccessScreen({ route, navigation }) {
  const { params } = route

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <AppHeader showBackButton title='Leitor' />,
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <BBText
        color={COLORS.CARIBBEAN_GREEN}
        size={20}
        style={styles.text}
        type='secondary-bold'
      >
        {`Parabéns! Você devolveu ${params.readBottles} recipientes`}
      </BBText>
      <BBText size={16} style={styles.text}>
        Obrigado por ajudar a gente a salvar o planeta. O melhor de tudo é que
        de quebra você ainda ganha uns pontinhos que podem ser trocados por
        descontos.
      </BBText>
      <Image
        source={{
          uri:
            'https://hackathon-assinatura-ambev.s3.us-east-2.amazonaws.com/onboarding+3.png',
        }}
        style={styles.image}
      />
      <Button
        onPress={() => {
          NavigationService.pop()
        }}
      >
        Voltar
      </Button>
    </View>
  )
}
