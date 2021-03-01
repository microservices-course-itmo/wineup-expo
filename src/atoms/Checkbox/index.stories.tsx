import React from 'react'

import { storiesOf } from '@storybook/react-native'
import Checkbox from '.'

storiesOf('Checkbox', module)
  .add('Unchecked', () => <Checkbox />)
  .add('Checked', () => <Checkbox checked />)
