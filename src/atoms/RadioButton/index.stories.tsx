import React from 'react'
import { storiesOf } from '@storybook/react-native'
import RadioButton from './index'

storiesOf('RadioButton', module)
  .add('Default', () => <RadioButton />)
  .add('Checked', () => <RadioButton checked />)
