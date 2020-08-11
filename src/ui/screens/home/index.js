import React, { useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'

import { utils } from '~/res'
import { FormService } from '~/services'
import * as authActions from '~/store/modules/auth/actions'
import { Button, Input, Form, BBText } from '~/ui/components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
})

export function HomeScreen() {
  const dispatch = useDispatch()
  const formRef = useRef()

  const formService = new FormService()

  return (
    <View style={styles.container}>
      <BBText>HOME</BBText>
      <Form
        initialValues={{ teste: '' }}
        innerRef={formRef}
        onSubmit={() => {}}
      >
        <Input
          innerRef={(ref) => formService.saveInputRef(ref, 'teste')}
          name='teste'
          placeholder='Placeholder'
          validate={utils.validators.isRequired}
        />
      </Form>

      <Button
        onPress={() => {
          dispatch(authActions.setHasReadTutorial(false))
        }}
      >
        Teste
      </Button>
    </View>
  )
}
