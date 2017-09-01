import React from 'react'
import styled from 'styled-components'
import defaultTheme from './Theme'

import React from 'react'
import { TextInputMask } from 'react-native-masked-text'
import styled from 'styled-components/native'

const Input = styled(TextInputMask)`
	line-height: 30;
	flex: 1;
`

/**
 * to be wrapped with redux-form Field component
 */
export default function InputComponent(props) {
	// const { input, ...inputProps } = props

	return (
		<Input
			{...props}			
		/>
	)
}

InputComponent.PropTypes = {  
  inlineLabel: React.PropTypes.bool.isRequired
}

InputComponent.defaultProps = {
  componentName: 'MaskedInput',
  inlineLabel: true,
  theme: defaultTheme
}