import React from 'react'
import { FlatList, View } from 'react-native'

import PropTypes from 'prop-types'

export function ProgressList(props) {
  const { data } = props

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
              alignItems: 'center',
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  height: 10,
                  width: 10,
                  backgroundColor: 'grey',
                  borderRadius: 5,
                  marginRight: 20,
                }}
              />
              <BBText size={16}>{`${item.date} - ${item.title}`}</BBText>
            </View>
            <BBText size={16}>{`${item.points} pts`}</BBText>
          </View>
        )
      }}
    />
  )
}

ProgressList.propTypes = {
  data: PropTypes.array.isRequired,
}
