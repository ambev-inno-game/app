import React, { useRef } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { utils } from '~/res'
import { FormService, NavigationService } from '~/services'
import * as authActions from '~/store/modules/auth/actions'
import { Button, Input, Form, BBText } from '~/ui/components'

import styles from './styles'

export function LoginScreen() {
  const formRef = useRef(null)
  const dispatch = useDispatch()

  const { isLoggingIn } = useSelector((state) => state.auth)

  const formService = new FormService()

  return (
    <View style={styles.container}>
      <BBText>LOGIN</BBText>
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
          placeholder='Placeholder'
          validate={utils.validators.isRequired}
          onSubmitEditing={() => formService.setFocus('password')}
        />
        <Input
          innerRef={(ref) => formService.saveInputRef(ref, 'password')}
          name='password'
          placeholder='Placeholder'
          validate={utils.validators.isRequired}
        />
      </Form>
      <Button
        isLoading={isLoggingIn}
        onPress={() => {
          formRef.current.handleSubmit()
        }}
      >
        Login
      </Button>
      <Button
        onPress={() => {
          NavigationService.navigate({ screen: 'QuestionsScreen' })
        }}
      >
        Continuar sem login
      </Button>
    </View>
  )
}
