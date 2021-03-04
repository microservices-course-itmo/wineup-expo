import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { text } from '@storybook/addon-knobs'
import Text from './index'

storiesOf('Text', module).add('Default', () => (
  <Text>{text('Label', 'This is a text')}</Text>
))
