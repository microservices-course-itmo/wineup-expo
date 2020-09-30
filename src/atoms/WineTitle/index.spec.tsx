import { render } from '@testing-library/react-native'
import React from 'react'

import WineTitle from './index'

describe('<WineTitle />', () => {
  it('should render correct volume', () => {
    const volume = 0.75
    const { getByText } = render(
      <WineTitle
        name='Canti Merlot'
        description='Австралия, Красное, сухое'
        volume={volume}
      />
    )
    const volumeElement = getByText(volume.toString())
    expect(volumeElement).toBeDefined()
  })
})

describe('<WineTitle />', () => {
  it('should render correct description', () => {
    const description = 'Австралия, Красное, сухое'
    const { getByText } = render(
      <WineTitle name='Canti Merlot' description={description} volume={0.75} />
    )
    const descriptionElement = getByText(description)
    expect(descriptionElement).toBeDefined()
  })
})

describe('<WineTitle />', () => {
  it('should render correct name', () => {
    const name = 'Canti Merlot'
    const { getByText } = render(
      <WineTitle
        name={name}
        description='Австралия, Красное, сухое'
        volume={0.75}
      />
    )
    const nameElement = getByText(name)
    expect(nameElement).toBeDefined()
  })
})
