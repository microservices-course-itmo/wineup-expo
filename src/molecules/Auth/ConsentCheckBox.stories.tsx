import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import ConsentCheckBox from './ConsentCheckBox'

storiesOf('ConsentCheckBox', module)
  .add('IsFilled', () => (
    <ConsentCheckBox hasFilled onPress={action('onPress')} />
  ))
  .add('IsNotFilled', () => (
    <ConsentCheckBox hasFilled={false} onPress={action('onPress')} />
  ))
