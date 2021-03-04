import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { number } from '@storybook/addon-knobs'
import Rating from './index'

storiesOf('Rating', module).add('Default', () => (
  <Rating rating={number('Rating', 3)} />
))
