import { render } from '@testing-library/react-native'
import React from 'react'
import WineInfo from './index'

describe('<WineInfo />', () => {
  it('should render', () => {
    render(
      <WineInfo
        name='Canti Merlot'
        country='Австралия'
        dryness='сухое'
        volume={0.75}
        color='красное'
      />
    )
  })

  it('should render correct description', () => {
    const description = 'Австралия, сухое, красное, 0.75 л.'
    const { getByText } = render(
      <WineInfo
        name='Canti Merlot'
        country='Австралия'
        dryness='сухое'
        volume={0.75}
        color='красное'
      />
    )
    const descriptionElement = getByText(description)

    expect(descriptionElement).toBeDefined()
  })

  it('should render correct name', () => {
    const name = 'Canti Merlot'
    const { getByText } = render(
      <WineInfo
        name={name}
        country='Австралия'
        dryness='сухое'
        volume={0.75}
        color='красное'
      />
    )
    const nameElement = getByText(name)

    expect(nameElement).toBeDefined()
  })
})
