import React from 'react'
import { storiesOf } from '@storybook/react-native'
import PriceInput from './index'

storiesOf('PriceInput', module).add('Default', () => (
  <PriceInput value='test' label='test label' />
))
