import React from 'react'
import { StyleSheet, View } from 'react-native'

import { NavigationService } from '~/services'
import { Button, BBText } from '~/ui/components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
})

export function QuestionsScreen() {
  return (
    <View style={styles.container}>
      <BBText>QUESTIONS SCREEN</BBText>
      <Button
        onPress={() => {
          NavigationService.pushReplacement({ screen: 'DrawerNavigation' })
        }}
      >
        IR PARA O APP
      </Button>
    </View>
  )
}
