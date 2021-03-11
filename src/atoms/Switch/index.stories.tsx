import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import Switch from './index'

storiesOf('Switch', module)
  .add('Default', () => <Switch onChange={action('change')} />)
  .add('Checked', () => <Switch onChange={action('change')} checked />)
