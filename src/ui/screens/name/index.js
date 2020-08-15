import React, { useRef } from 'react'
import { View, Image } from 'react-native'

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
    <View style={styles.container}>
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
            'https://cdn.discordapp.com/attachments/576875163686010911/744277396278214776/perguntas_inicio_1.png',
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
    </View>
  )
}
