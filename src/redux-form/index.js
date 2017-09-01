import createInputs from './createInputs'
import createInputCreator from './createInputCreator'
import { Field } from 'redux-form'

const {
  Input,
  Select,
  Switch,
  MaskedInput
} = createInputs(createInputCreator(Field))

export {
  Input,
  Select,
  Switch,
  MaskedInput
}
