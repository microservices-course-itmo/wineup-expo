import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import SearchInput from './index'

storiesOf('PriceInput', module)
  .add('Default', () => (
    <SearchInput
      value={text('Value', '300')}
      label={text('Label', 'Input')}
      onChange={action('onChange')}
    />
  ))
  .add('With default value', () => (
    <SearchInput
      value={text('Value', '300')}
      label={text('Label', 'Input')}
      onChange={action('onChange')}
      checked
      defaultValue={text('Default value', 200)}
    />
  ))
