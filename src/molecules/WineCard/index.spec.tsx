import React from 'react'
import { render } from '@testing-library/react-native'
import WineCard, { Wine } from './index'

describe('WineCard', () => {
  const wine: Wine = {
    name: 'Canti Merlot',
    country: 'Австралия',
    dryness: 'сухое',
    color: 'Красное',
    volume: 0.75,
    shop: { name: 'ВИНЛАБ', description: 'Супермаркет напитков' },
  }

  it('should render', () => {
    render(<WineCard wine={wine} />)
  })

  it('should contain name', () => {
    const { getByText } = render(<WineCard wine={wine} />)

    getByText(wine.name)
  })

  it('should contain description', () => {
    const { getByText } = render(<WineCard wine={wine} />)

    getByText([wine.country, wine.color, wine.dryness].join(', '))
  })

  it('should contain volume', () => {
    const { getByText } = render(<WineCard wine={wine} />)

    getByText(`${wine.volume}л`)
  })

  it('should contain shop name', () => {
    const { getByText } = render(<WineCard wine={wine} />)

    getByText(wine.shop.name!)
    getByText(wine.shop.description!)
  })
})
