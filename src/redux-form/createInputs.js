import React from 'react'
import { Text, View } from 'react-native'
import {
  Field
} from 'redux-form/immutable'
import {
  Input as InputRenderer,
  Select as SelectRenderer,
  Switch as SwitchRenderer,
  MaskedInput as MaskedInputRenderer,
  Radio as RadioRenderer
} from '../../index'

const createInputs = inputCreator => {
  const renderInput = ({ input: { onChange, onBlur, value, ...restInput }, placeholder}) => (
    <InputRenderer onChangeText={onChange} onBlur={()=>onBlur(value)} placeholder={placeholder} {...restInput} />
  )
  const Input = inputCreator('Input', renderInput, InputRenderer.PropTypes, InputRenderer.defaultProps)

  const renderSelect = ({ input: { onChange, value }, labelKey, valueKey, options, placeholder }) => (
    <SelectRenderer
      labelKey={labelKey}
      options={options}
      onValueChange={onChange}
      placeholder={placeholder}
      value={value}
      valueKey={valueKey}
    />
  )
  const Select = inputCreator('Select', renderSelect, SelectRenderer.PropTypes, SelectRenderer.defaultProps)

  const renderSwitch = ({ input: { onChange, value }}) => {
    // redux-form default value is '', however Switch must take a boolean value
    if (value === '') {
      value = SwitchRenderer.defaultProps.value
    }

    return <SwitchRenderer onValueChange={onChange} value={value} />
  }
  const Switch = inputCreator('Switch', renderSwitch, SwitchRenderer.PropTypes, SwitchRenderer.defaultProps)

  const renderMaskedInput = (props) => {
    const {input: {onChange, value}} = props
    return <MaskedInputRenderer onChangeText={onChange} value={value} {...props}/>
  }
  const MaskedInput = inputCreator('MaskedInput', renderMaskedInput, MaskedInputRenderer.PropTypes, MaskedInputRenderer.defaultProps)

  const renderRadio = (props) => {
    const {input: {onChange, value}} = props
    return <RadioRenderer initial={value} onPress={onChange} {...props}/>
  }
  const Radio = inputCreator('Radio', renderRadio, RadioRenderer.PropTypes, RadioRenderer.defaultProps)

  return {
    Input,
    Select,
    Switch,
    MaskedInput,
    Radio
  }
}

export default createInputs
