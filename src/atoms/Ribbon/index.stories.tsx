import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Text } from 'react-native'
import { number } from '@storybook/addon-knobs'
import Ribbon from './index'

storiesOf('Ribbon', module).add('Default', () => (
  <Ribbon>
    <Text>{number('Label', '25%')}</Text>
  </Ribbon>
))
