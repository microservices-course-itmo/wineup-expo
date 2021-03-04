import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { Text } from 'react-native'
import PrimaryButton from './index'

storiesOf('PrimaryButton', module).add('Default', () => (
  <PrimaryButton onPress={action('onPress')}>
    <Text>{text('Label', 'Press me')}</Text>
  </PrimaryButton>
))
