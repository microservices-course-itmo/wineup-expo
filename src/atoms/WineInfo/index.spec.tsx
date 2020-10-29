import { render } from '@testing-library/react-native'
import React from 'react'
import WineInfo from './index'

describe('<WineTitle />', () => {
  it('should render correct volume', () => {
    const volume = 0.75
    const { getByText } = render(
      <WineInfo
        name='Canti Merlot'
        description='Австралия, Красное, сухое'
        volume={volume}
      />
    )
    const volumeElement = getByText(`${volume}л`)

    expect(volumeElement).toBeDefined()
  })

  it('should render correct description', () => {
    const description = 'Австралия, Красное, сухое'
    const { getByText } = render(
      <WineInfo name='Canti Merlot' description={description} volume={0.75} />
    )
    const descriptionElement = getByText(description)

    expect(descriptionElement).toBeDefined()
  })

  it('should render correct name', () => {
    const name = 'Canti Merlot'
    const { getByText } = render(
      <WineInfo
        name={name}
        description='Австралия, Красное, сухое'
        volume={0.75}
      />
    )
    const nameElement = getByText(name)

    expect(nameElement).toBeDefined()
  })
})
