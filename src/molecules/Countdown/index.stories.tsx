import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { number, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Countdown from './index'

storiesOf('Countdown', module).add('Default', () => (
  <Countdown
    isTimerEnabled={boolean('Enabled', true)}
    time={number('Time, s.', 5)}
    handleEnd={action('times out')}
    onPress={action('onPress')}
  />
))
