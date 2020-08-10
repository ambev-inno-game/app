import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { NavigationService } from '~/services'
import { Button } from '~/ui/components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
})

export function LandingScreen() {
  return (
    <View style={styles.container}>
      <Text>LANDING SCREEN</Text>
      <Button
        onPress={() => {
          NavigationService.pushReplacement({ screen: 'QuestionsScreen' })
        }}
      >
        PERGUNTAS
      </Button>
    </View>
  )
}
