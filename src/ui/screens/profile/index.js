import React, { useLayoutEffect } from 'react'
import { View, Image, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

import { COLORS } from '~/res'
import { BBText, AppHeader, Form, Input } from '~/ui/components'

import styles from './styles'

const defaultImageLink =
  'https://hackathon-assinatura-ambev.s3.us-east-2.amazonaws.com/ilustras.png'

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
            size={25}
            style={styles.congratsText}
            type='secondary-bold'
          >
            Parabéns!
          </BBText>
          <BBText color={COLORS.WHITE} size={18} style={styles.congratsText}>
            {
              'Você já salvou cerca de 68kg de resíduos recicláveis no planeta Terra. Continue conosco nessa caminhada. <3'
            }
          </BBText>
        </View>
        <View style={styles.infoContainer}>
          <BBText size={23} type='secondary-bold'>
            Seus dados
          </BBText>
          <Form
            initialValues={{ email: '', password: '' }}
            innerRef={() => {}}
            onSubmit={() => {}}
          >
            <Input edit name='name' placeholder='Nome completo' value={name} />
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
