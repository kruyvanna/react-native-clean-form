import React from 'react'
import RadioForm from 'react-native-simple-radio-button'

/**
 * to be wrapped with redux-form Field component
 */
export default function InputComponent(props) {
  const { input, ...inputProps } = props

  return (
    <RadioForm {...inputProps} />
  )
}
