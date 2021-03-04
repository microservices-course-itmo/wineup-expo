import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { text, number } from '@storybook/addon-knobs'
import WineReviewCard from './index'

storiesOf('WineReviewCard', module).add('Default', () => (
  <WineReviewCard
    username={text('Username', 'John Doe')}
    rating={number('Rating', 3)}
    text={text('Text', 'Review text')}
    date={text('Date', '21 Feb 2021')}
  />
))
