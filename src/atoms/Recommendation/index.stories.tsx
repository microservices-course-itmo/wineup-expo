import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { number } from '@storybook/addon-knobs'
import Recommendation from './index'

storiesOf('Recommendation', module).add('Default', () => (
  <Recommendation ratioAdvice={number('Percent', 45)} />
))
