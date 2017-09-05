import React from 'react'
import defaultTheme from './Theme'
import { TextInputMask } from 'react-native-masked-text'
import styled from 'styled-components/native'

const Input = styled(TextInputMask)`
	line-height: 30;
	flex: 1;
`

Input.PropTypes = TextInputMask.PropTypes

Input.defaultProps = {
	componentName: 'MaskedInput',
	inlineLabel: true,
	theme: defaultTheme
}

export default Input

