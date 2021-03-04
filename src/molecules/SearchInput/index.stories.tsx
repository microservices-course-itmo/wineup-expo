import React from 'react'
import { storiesOf } from '@storybook/react-native'
import SearchInput from './index'

storiesOf('SearchInput', module).add('Default', () => (
  <SearchInput value='test' />
))
