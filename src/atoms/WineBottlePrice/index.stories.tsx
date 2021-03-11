import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { useResource } from 'rest-hooks'
import CatalogResource from '../../resources/catalog'
import WineBottlePrice from './index'

storiesOf('WineBottlePrice', module).add('Default', () => {
  const position = useResource(CatalogResource.detailShape(), {
    winePositionId: 'wine_position_1',
  })

  return <WineBottlePrice position={position} />
})
