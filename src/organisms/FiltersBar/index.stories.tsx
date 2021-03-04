import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { FiltersProvider } from './FiltersContext'
import FiltersBar from './index'

storiesOf('FiltersBar', module).add('Default', () => (
  <FiltersProvider>
    <FiltersBar />
  </FiltersProvider>
))
