import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import Countdown from './Countdown'

storiesOf('Countdown', module).add('Default', () => (
  <Countdown
    handleEnd={action('handleEnd')}
    isTimerEnabled
    time={123}
    style={{}}
  />
))
