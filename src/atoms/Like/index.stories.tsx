import React from 'react'

import { storiesOf } from '@storybook/react-native'
import Like from '.'

storiesOf('Like', module)
  .add('Not liked', () => <Like liked={false} />)
  .add('Liked', () => <Like liked />)
