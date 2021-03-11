import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { ScrollView } from 'react-native'
import RecommendationBlock from './index'
import MockedNavigator from '../../tests/__mocks__/MockedNavigator'

const Story = () => (
  <ScrollView>
    <RecommendationBlock />
  </ScrollView>
)

storiesOf('RecommendationBlock', module).add('Default', () => (
  <MockedNavigator
    component={Story}
    params={{ winePositionId: 'wine_position1' }}
  />
))
