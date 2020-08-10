import React, { useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { utils } from '~/res'
import { FormService } from '~/services'
import { AuthApiService } from '~/services/api'
import { Button, Input, Form } from '~/ui/components'

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
  const formRef = useRef()

  const formService = new FormService()

  return (
    <View style={styles.container}>
      <Text>HOME</Text>
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
          AuthApiService.home().then((resp) => {
            console.log(resp)
          })
        }}
      >
        Teste
      </Button>
    </View>
  )
}
