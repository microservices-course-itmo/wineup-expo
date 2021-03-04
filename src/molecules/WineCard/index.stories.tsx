import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { useResource } from 'rest-hooks'
import WineCard from './index'
import CatalogResource from '../../resources/catalog'

storiesOf('WineCard', module)
  .add('Default', () => {
    const position = useResource(CatalogResource.detailShape(), {
      winePositionId: 'wine_position_1',
    })

    return <WineCard position={position} />
  })
  .add('Full', () => {
    const position = useResource(CatalogResource.detailShape(), {
      winePositionId: 'wine_position_1',
    })

    return <WineCard position={position} full />
  })
