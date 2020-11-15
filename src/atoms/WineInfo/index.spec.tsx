import { render } from '@testing-library/react-native'
import React, { Suspense } from 'react'
import { MockProvider } from '@rest-hooks/test'
import WineInfo, { WineColor, WineSugar } from './index'
import {
  fixtures,
  positionMock,
  wineMock,
} from '../../tests/__mocks__/fixtures'

describe('<WineInfo />', () => {
  const renderComponent = () => {
    return render(
      <Suspense fallback='Loading'>
        <MockProvider results={fixtures}>
          <WineInfo wine={wineMock} position={positionMock} />
        </MockProvider>
      </Suspense>
    )
  }

  it('should render', () => {
    renderComponent()
  })

  it('should render correct description', () => {
    const description = `${fixtures[0].result.country}, ${
      WineSugar[wineMock.sugar]
    }, ${WineColor[wineMock.color]}, ${positionMock.volume} л.`
    const { getByText } = renderComponent()
    const descriptionElement = getByText(description)

    expect(descriptionElement).toBeDefined()
  })

  it('should render correct name', () => {
    const { getByText } = renderComponent()
    const nameElement = getByText(wineMock.name)

    expect(nameElement).toBeDefined()
  })
})
