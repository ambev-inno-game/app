import React, { useRef } from 'react'
import { View, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { AntDesign } from '@expo/vector-icons'

import { utils } from '~/res'
import { FormService, NavigationService } from '~/services'
import * as authActions from '~/store/modules/auth/actions'
import { Button, Input, Form, BBText, Link } from '~/ui/components'

import styles from './styles'

export function LoginScreen() {
  const formRef = useRef(null)
  const dispatch = useDispatch()

  const { isLoggingIn } = useSelector((state) => state.auth)

  const formService = new FormService()

  function renderTopView() {
    return (
      <View style={styles.topContainer}>
        <BBText size={23} style={styles.title} type='secondary-bold'>
          Login
        </BBText>
        <BBText size={17} style={styles.subtitle}>
          Por favor, efetue o login da sua conta.
        </BBText>
        <Form
          initialValues={{ email: '', password: '' }}
          innerRef={formRef}
          onSubmit={({ email, password }) => {
            dispatch(authActions.userLogin({ email, password }))
          }}
        >
          <Input
            innerRef={(ref) => formService.saveInputRef(ref, 'email')}
            name='email'
            placeholder='E-mail'
            validate={utils.validators.isValidEmail}
            onSubmitEditing={() => formService.setFocus('password')}
          />
          <Input
            innerRef={(ref) => formService.saveInputRef(ref, 'password')}
            name='password'
            placeholder='Senha'
            validate={utils.validators.isRequired}
          />
        </Form>
        <Button
          isLoading={isLoggingIn}
          style={{ marginTop: 30 }}
          onPress={() => {
            formRef.current.handleSubmit()
          }}
        >
          Entrar
        </Button>
        <View style={styles.subcontent}>
          <BBText style={styles.subtitle}>ou entre com</BBText>
          <View style={styles.icons}>
            <AntDesign color='black' name='twitter' size={30} />
            <AntDesign color='black' name='facebook-square' size={30} />
            <AntDesign color='black' name='google' size={30} />
          </View>
        </View>
      </View>
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {renderTopView()}
      <View style={styles.bottomContainer}>
        <View style={styles.newAccount}>
          <BBText size={17} style={styles.subtitle}>
            Não possui uma conta? Criar
          </BBText>
        </View>
        <View style={styles.line} />
        <View style={{ alignItems: 'center' }}>
          <Link
            onPress={() => {
              NavigationService.navigate({ screen: 'QuestionsScreen' })
            }}
          >
            Continuar sem login
          </Link>
        </View>
      </View>
    </ScrollView>
  )
}
