import { render } from '@testing-library/react-native'
import React from 'react'

import WineTitle from './index'

describe('<WineTitle />', () => {
  it('should render correct volume', () => {
    const volume = 0.75
    const { getByText } = render(
      <WineTitle
        volume={volume}
        description='Австралия, Красное, сухое'
        name='Canti Merlot'
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
      <WineTitle volume={0.75} description={description} name='Canti Merlot' />
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
        volume={0.75}
        description='Австралия, Красное, сухое'
        name={name}
      />
    )
    const nameElement = getByText(name)
    expect(nameElement).toBeDefined()
  })
})
