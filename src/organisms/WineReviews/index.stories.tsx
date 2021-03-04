import React from 'react'
import { storiesOf } from '@storybook/react-native'

import WineReviews from './index'

storiesOf('WineReviews', module).add('Default', () => (
  <WineReviews
    cards={[
      {
        text: 'Review',
        username: 'John Doe',
        date: '1 Mar 2021',
        rating: 3,
      },
      {
        text:
          'Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Review',
        username: 'Jane Doe',
        date: '3 Mar 2021',
        rating: 5,
      },
    ]}
  />
))
