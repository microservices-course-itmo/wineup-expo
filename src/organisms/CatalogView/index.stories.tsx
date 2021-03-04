import React, { Suspense } from 'react'
import { Text } from 'react-native'

import { storiesOf } from '@storybook/react-native'
import CatalogView from './index'
import { FiltersProvider } from '../FiltersBar/FiltersContext'
import MockedNavigator from '../../tests/__mocks__/MockedNavigator'

const Story = () => (
  <Suspense fallback={<Text>Loading</Text>}>
    <FiltersProvider>
      <CatalogView />
    </FiltersProvider>
  </Suspense>
)

storiesOf('CatalogView', module).add('Default', () => (
  <MockedNavigator
    component={Story}
    params={{
      winePositionId: 'wine_position1',
    }}
  />
))
