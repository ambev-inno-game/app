import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react'
import { StyleSheet, View, Alert } from 'react-native'

import { BarCodeScanner } from 'expo-barcode-scanner'
import * as Permissions from 'expo-permissions'

import { useFocusEffect } from '@react-navigation/native'

import { COLORS } from '~/res'
import { NavigationService } from '~/services'
import { BBText, ScreenLoader, Button, AppHeader } from '~/ui/components'

import styles from './styles'

const checkInQrCodeId = 'sempre-recicla-official-checkin-qrcode'
const bottleQrCodeId = 'sempre-recicla-official-bottle-qrcode'

export function QrCodeScreen({ navigation }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null)
  const [hasCheckedIn, setHasCheckedIn] = useState(false)
  const [readBottles, setReadBottles] = useState(0)
  const [hasScanned, setHasScanned] = useState(false)

  useFocusEffect(
    useCallback(() => {
      setReadBottles(0)
      setHasScanned(false)
    }, [])
  )

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <AppHeader title='Leitor' />,
    })
  }, [navigation])

  async function getPermissionsAsync() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    setHasCameraPermission(status === 'granted')
  }

  useEffect(() => {
    getPermissionsAsync()
  }, [])

  function handleBarCodeScanned({ data = '' }) {
    setHasScanned(true)
    const isCheckInQrCode = data.match(checkInQrCodeId)
    const isBottleQrCode = data.match(bottleQrCodeId)
    const isValidQrCode = isCheckInQrCode || isBottleQrCode

    if (!isValidQrCode) {
      Alert.alert('Opss...', 'Parece que o QR Code não é válido :(', [
        {
          text: 'OK',
          onPress: () => setHasScanned(false),
        },
      ])

      return
    }

    if (isValidQrCode) {
      if (isCheckInQrCode) {
        if (!hasCheckedIn) {
          setHasCheckedIn(true)
          Alert.alert(
            'Checkin feito com sucesso!',
            'Agora você ja pode ler o QR code dos recipientes.',
            [
              {
                text: 'Continuar',
                onPress: () => setHasScanned(false),
              },
            ]
          )
          return
        }

        if (readBottles === 0) {
          setHasCheckedIn(false)
          Alert.alert(
            'Devolução de recipientes cancelada.',
            'Você precisa escanear algum recipiente antes de fazer o checkout.',
            [
              {
                text: 'Entendi',
                onPress: () => setHasScanned(false),
              },
            ]
          )
          return
        }

        setHasCheckedIn(false)
        NavigationService.navigate({
          screen: 'QrCodeReagingSuccessScreen',
          params: { readBottles },
        })
      }

      if (isBottleQrCode) {
        if (!hasCheckedIn) {
          Alert.alert(
            'Opss...',
            'Primeiro você precisa fazer o checkin no ponto de coleta.',
            [
              {
                text: 'Entendi',
                onPress: () => setHasScanned(false),
              },
            ]
          )
          return
        }

        setReadBottles(readBottles + 1)
        Alert.alert(
          'Recipiente escaneado.',
          'Continue escaneando ou finalize o processo.',
          [
            {
              text: 'Ok',
              onPress: () => {
                setHasScanned(false)
              },
            },
          ]
        )
      }
    }
  }

  function renderContent() {
    if (hasCameraPermission === null) {
      return <ScreenLoader />
    }

    if (hasCameraPermission === false) {
      return (
        <View style={styles.dennyContainer}>
          <BBText
            size={22}
            style={{ textAlign: 'center' }}
            type='secondary-bold'
          >
            Acesso a câmera negado. Precisamos de acesso a sua câmera para ler o
            QR Code!
          </BBText>
          <Button onPress={getPermissionsAsync}>Entendido</Button>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <View style={{ padding: 15 }}>
          <BBText
            color={COLORS.CARIBBEAN_GREEN}
            size={20}
            type='secondary-bold'
          >{`Recipientes escaneado: ${readBottles}`}</BBText>
        </View>
        <BarCodeScanner
          style={{ flex: 1, marginBottom: 5 }}
          onBarCodeScanned={(params) => {
            if (!hasScanned) {
              handleBarCodeScanned(params)
            }
          }}
        />
      </View>
    )
  }

  return renderContent()
}
