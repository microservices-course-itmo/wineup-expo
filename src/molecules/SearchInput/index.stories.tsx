import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import SearchInput from './index'

storiesOf('SearchInput', module).add('Default', () => (
  <SearchInput
    value={text('Value', 'Some value to search')}
    onChange={action('onChange')}
  />
))
