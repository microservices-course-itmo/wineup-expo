import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import LabeledDropdown from '.'

storiesOf('CityChooser', module).add('Default', () => (
  <LabeledDropdown
    label='test'
    onChange={action('onChange')}
    hasFilled
    onFill={action('onFill')}
  />
))
