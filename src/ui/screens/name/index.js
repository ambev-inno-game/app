import React, { useRef } from 'react'
import { View, Image } from 'react-native'

import { FormService, NavigationService } from '~/services'
import { BBText, Button, Form, Input } from '~/ui/components'

import styles from './styles'

export function NameScreen() {
  const formRef = useRef(null)

  const formService = new FormService()

  function renderTopView() {
    return (
      <View>
        <BBText size={23} style={styles.title} type='secondary-bold'>
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
    <View style={styles.container}>
      {renderTopView()}
      <Form initialValues={{ name: '' }} innerRef={formRef}>
        <Input
          innerRef={(ref) => formService.saveInputRef(ref, 'email')}
          name='name'
          placeholder='Como se chama?'
        />
      </Form>
      <Image
        source={{ uri: 'http://lorempixel.com/g/300/310/food' }}
        style={styles.image}
      />
      <Button
        onPress={() => {
          NavigationService.pushReplacement({ screen: 'QuestionsScreen' })
        }}
      >
        Avançar
      </Button>
    </View>
  )
}
