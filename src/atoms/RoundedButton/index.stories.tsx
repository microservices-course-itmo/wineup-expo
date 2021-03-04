import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Text } from 'react-native'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import RoundedButton from './index'

storiesOf('RoundedButton', module)
  .add('Default', () => (
    <RoundedButton onPress={action('onPress')}>
      <Text>{text('Label', 'Press me')}</Text>
    </RoundedButton>
  ))
  .add('Selected', () => (
    <RoundedButton onPress={action('onPress')} selected>
      <Text>{text('Label', 'Press me')}</Text>
    </RoundedButton>
  ))

// TODO: Add story with image
