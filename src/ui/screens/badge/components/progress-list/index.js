import React from 'react'
import { FlatList, View } from 'react-native'

import PropTypes from 'prop-types'

import { COLORS } from '~/res'
import { BBText } from '~/ui/components'

import styles from './styles'

export function ProgressList(props) {
  const { data } = props

  function renderProgress() {
    return data.map((item) => (
      <View key={item.id} style={styles.itemContainer}>
        <View style={styles.itemLeftContainer}>
          <View style={styles.itemDot} />
          <BBText size={16}>{`${item.date} - ${item.title}`}</BBText>
        </View>
        <BBText size={16}>{`${item.points} pts`}</BBText>
      </View>
    ))
  }

  return (
    <View>
      {renderProgress()}
      <View style={styles.line} />
    </View>
  )
}

ProgressList.propTypes = {
  data: PropTypes.array.isRequired,
}
