import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { text } from '@storybook/addon-knobs'
import Heading from './index'

storiesOf('Heading', module).add('Default', () => (
  <Heading>{text('Heading', 'This is a heading')}</Heading>
))
