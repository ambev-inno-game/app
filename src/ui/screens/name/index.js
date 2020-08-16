import React, { useRef } from 'react'
import { View, Image, ScrollView } from 'react-native'

import { COLORS } from '~/res'
import { utils } from '~/res/utils'
import { FormService, NavigationService } from '~/services'
import { BBText, Button, Form, Input } from '~/ui/components'

import styles from './styles'

export function NameScreen() {
  const formRef = useRef(null)

  const formService = new FormService()

  function renderTopView() {
    return (
      <View>
        <BBText
          color={COLORS.CORNFLOWER_BLUE}
          size={23}
          style={styles.title}
          type='secondary-bold'
        >
          Pera aí!
        </BBText>
        <BBText size={17} style={styles.subtitle}>
          Antes de qualquer coisa, precisamos fazer algumas perguntas para te
          conhecer melhor.
        </BBText>
        <BBText size={17} style={styles.subtitle}>
          É rapidinho, prometemos!
        </BBText>
      </View>
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {renderTopView()}
      <Form
        initialValues={{ name: '' }}
        innerRef={formRef}
        onSubmit={(params) => {
          if (params.name) {
            NavigationService.pushReplacement({
              screen: 'QuestionsScreen',
              params,
            })
          }
        }}
      >
        <Input
          innerRef={(ref) => formService.saveInputRef(ref, 'email')}
          name='name'
          placeholder='Como se chama?'
          validate={utils.validators.isRequired}
        />
      </Form>
      <Image
        source={{
          uri:
            'https://hackathon-assinatura-ambev.s3.us-east-2.amazonaws.com/perguntas_inicio+%E2%80%93+1.png',
        }}
        style={styles.image}
      />
      <Button
        onPress={() => {
          formRef.current.handleSubmit()
        }}
      >
        Avançar
      </Button>
    </ScrollView>
  )
}
