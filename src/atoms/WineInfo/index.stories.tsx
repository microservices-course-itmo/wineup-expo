import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { useResource } from 'rest-hooks'
import CatalogResource from '../../resources/catalog'
import WineInfo from './index'

storiesOf('WineInfo', module)
  .add('Default', () => {
    const position = useResource(CatalogResource.detailShape(), {
      winePositionId: 'wine_position_1',
    })

    return <WineInfo position={position} />
  })
  .add('Full', () => {
    const position = useResource(CatalogResource.detailShape(), {
      winePositionId: 'wine_position_1',
    })

    return <WineInfo position={position} full />
  })
