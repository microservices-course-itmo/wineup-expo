import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { useResource } from 'rest-hooks'
import CatalogResource from '../../resources/catalog'
import WineShopName from './index'

storiesOf('WineShopName', module).add('Default', () => {
  const position = useResource(CatalogResource.detail(), {
    winePositionId: 'wine_position_1',
  })

  return <WineShopName position={position.shop.name} />
})
