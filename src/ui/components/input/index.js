import React from 'react'
import { TextInput, View, Text } from 'react-native'

import { useField } from 'formik'
import PropTypes from 'prop-types'

import styles from './styles'

export function Input(props) {
  const { innerRef, placeholder, ...otherProps } = props

  const [field, meta, helpers] = useField(props)

  function onFocus() {
    helpers.setTouched(true)
  }

  function onChange({ nativeEvent }) {
    helpers.setValue(nativeEvent.text)
  }

  function renderError() {
    if (meta.touched) {
      return <Text style={styles.error}>{meta.error}</Text>
    }

    return null
  }

  return (
    <View>
      <TextInput
        placeholder={placeholder}
        ref={innerRef}
        style={styles.input}
        value={field.value}
        onChange={onChange}
        onFocus={onFocus}
        {...otherProps}
      />
      {renderError()}
    </View>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  innerRef: PropTypes.func,
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  innerRef: null,
  placeholder: '',
}
