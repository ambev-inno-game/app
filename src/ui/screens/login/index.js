import React, { useRef } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { utils } from '~/res'
import { FormService, NavigationService } from '~/services'
import * as authActions from '~/store/modules/auth/actions'
import { Button, Input, Form, BBText, Link } from '~/ui/components'
import { AntDesign } from '@expo/vector-icons';

import styles from './styles'

export function LoginScreen() {
  const formRef = useRef(null)
  const dispatch = useDispatch()

  const { isLoggingIn } = useSelector((state) => state.auth)

  const formService = new FormService()

  return (
    <View style={styles.container}>
      <BBText style={styles.title}>Login</BBText>
      <BBText style={styles.subtitle}>Por favor, efetue o login da sua conta.</BBText>
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
          validate={utils.validators.isRequired}
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
        onPress={() => {
          formRef.current.handleSubmit()
        }}
      >
        Entrar
      </Button>
      <View style={styles.subcontent}>
        <BBText style={styles.subtitle}>ou entre com</BBText>
        <View style={styles.icons}>
          <AntDesign name='twitter' size={30} color='black' />
          <AntDesign name='facebook-square' size={30} color='black' />
          <AntDesign name='google' size={30} color='black' />
        </View>
        <View style={styles.anotherLogin}>
          <View style={styles.newAccount}>
            <BBText style={styles.subtitle}>Não possui uma conta? Criar</BBText>
          </View>
          <View style={styles.line} />
          <View style={{ alignItems: "center" }}>
            <Link
              onPress={() => {
                NavigationService.navigate({ screen: 'QuestionsScreen' })
              }}
            >
              Continuar sem login
            </Link>
          </View>
        </View>
      </View>
    </View >
  )
}
