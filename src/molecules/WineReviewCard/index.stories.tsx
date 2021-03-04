import React from 'react'
import { storiesOf } from '@storybook/react-native'
import WineReviewCard from './index'

storiesOf('WineReviewCard', module).add('Default', () => (
  <WineReviewCard date='testDate' rating={1} text='test' username='testUser' />
))
