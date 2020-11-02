import React from 'react'
import { render } from '@testing-library/react-native'
import CatalogView from './index'
import { Wine } from '../../molecules/WineCard'

describe('CatalogView', () => {
  const wines: Wine[] = new Array(10).fill({
    name: 'Canti Merlot',
    country: 'Австралия',
    dryness: 'сухое',
    color: 'Красное',
    volume: 0.75,
    shop: { name: 'ВИНЛАБ', description: 'Супермаркет напитков' },
  })

  it('should render', () => {
    render(<CatalogView>{wines}</CatalogView>)
  })

  it('should render passed items', () => {
    const { toJSON } = render(<CatalogView>{wines}</CatalogView>)
    const scrollView = toJSON()

    const container = scrollView.children[0]

    expect(container.children.length).toEqual(wines.length)
  })
})
