import React from 'react'
import { render } from '@testing-library/react-native'
import { Wine } from '../../molecules/WineCard'
import RecommendationBlock from './index'

describe('RecommendationBlock', () => {
  const wines: Wine[] = [
    {
      name: 'Canti Merlot',
      country: 'Австралия',
      dryness: 'сухое',
      color: 'Красное',
      volume: 0.75,
      shop: { name: 'ВИНЛАБ' },
    },
    {
      name: 'Urban Riesling, 2019 г.',
      country: 'Германия',
      dryness: 'сухое',
      color: 'Белое',
      volume: 0.75,
      shop: { name: 'ВИНЛАБ' },
    },
    {
      name: 'Estate Vineyards Sauvignon Blanc, 2011 г.',
      country: 'Великобритания',
      dryness: 'полусладкое',
      color: 'Белое',
      volume: 0.75,
      shop: { name: 'ВИНЛАБ' },
    },
  ]

  it('should render', () => {
    render(<RecommendationBlock>{wines}</RecommendationBlock>)
  })
})
