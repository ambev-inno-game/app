import React, { useLayoutEffect } from 'react'
import { View, Image, ScrollView } from 'react-native'

import { BBText, AppHeader, Form, Input } from '~/ui/components'

import styles from './styles'

import { useSelector } from 'react-redux'
import { COLORS } from '~/res'

const defaultImageLink =
  'https://hackathon-assinatura-ambev.s3.us-east-2.amazonaws.com/ilustras.png'

const coupon = [
  {
    title: 'Cupom petlove',
    discount: '30%\noff',
    cost: '5.000',
    id: 1,
  },
  {
    title: 'Cupom Steam',
    discount: '15%\noff',
    cost: '7.500',
    id: 2,
  },
  {
    title: 'Cupom Netshoes',
    discount: '10%\noff',
    cost: '12.500',
    id: 3,
  },
]

export function ProfileScreen({ navigation }) {
  const { name } = useSelector((state) => state.user)

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <AppHeader title='Perfil' />,
    })
  }, [navigation])

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: defaultImageLink }}
            style={styles.profileImage}
          />
          <View style={styles.name}>
            <BBText size={17}>Olá,</BBText>
            <BBText size={25} type='secondary-bold'>
              {name}
            </BBText>
          </View>
        </View>
        <View style={styles.congratsContainer}>
          <BBText
            color={COLORS.WHITE}
            style={styles.congratsText}
            size={25}
            type='secondary-bold'
          >
            Parabéns!
          </BBText>
          <BBText color={COLORS.WHITE} style={styles.congratsText} size={18}>
            {
              'Você já salvou cerca de 68kg de resíduos recicláveis no planeta Terra. Continue conosco nessa caminhada. <3'
            }
          </BBText>
        </View>
        <View style={styles.infoContainer}>
          <BBText size={23} type='secondary-bold'>
            Seus dados
          </BBText>
          <Form initialValues={{ email: '', password: '' }}>
            <Input name='name' edit placeholder='Nome completo' value={name} />
            <Input
              edit
              name='address'
              placeholder='Endereço'
              value='Av. Padre Leopoldo Brentano, 110, Porto Alegre - RS'
            />
            <Input
              edit
              name='email'
              placeholder='E-mail'
              value='*********a@gmail.com'
            />
            <Input
              edit
              secureTextEntry
              name='password'
              placeholder='Senha'
              value='mockmock'
            />
          </Form>
        </View>
      </View>
    </ScrollView>
  )
}
