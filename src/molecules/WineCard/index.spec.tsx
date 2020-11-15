import React, { Suspense } from 'react'
import { render } from '@testing-library/react-native'
import { MockProvider } from '@rest-hooks/test'
import WineCard from './index'
import {
  fixtures,
  positionMock,
  wineMock,
} from '../../tests/__mocks__/fixtures'
import { WineColor, WineSugar } from '../../atoms/WineInfo'

describe('WineCard', () => {
  const renderComponent = () =>
    render(
      <Suspense fallback='Loading'>
        <MockProvider results={fixtures}>
          <WineCard position={positionMock} />
        </MockProvider>
      </Suspense>
    )

  it('should render', () => {
    renderComponent()
  })

  it('should contain name', () => {
    const { getByText } = renderComponent()

    getByText(wineMock.name)
  })

  it('should contain description', () => {
    const { getByText } = renderComponent()

    getByText(
      [
        fixtures[0].result.country,
        WineSugar[wineMock.sugar],
        WineColor[wineMock.color],
        `${positionMock.volume} л.`,
      ].join(', ')
    )
  })

  it('should contain shop name', () => {
    const { getByText } = renderComponent()

    getByText(fixtures[1].result.site)
  })
})
