import { render } from '@testing-library/react-native'
import React, { Suspense } from 'react'
import { MockProvider } from '@rest-hooks/test'
import WineInfo, { WineColor, WineSugar } from './index'
import { fixtures, wine1CatMock } from '../../tests/__mocks__/fixtures'

describe('<WineInfo />', () => {
  const renderComponent = () => {
    const fixture = {
      ...wine1CatMock,
      grapes: wine1CatMock.wine.grape.map(({ name }) => name).join(', '),
      regions: wine1CatMock.wine.region.map(({ name }) => name).join(', '),
      discount: 1 - wine1CatMock.actualPrice / wine1CatMock.price,
      pk() {
        return wine1CatMock.winePositionId
      },
      url: '',
      imageUri: '',
    }

    return render(
      <Suspense fallback='Loading'>
        <MockProvider results={fixtures}>
          <WineInfo position={fixture} />
        </MockProvider>
      </Suspense>
    )
  }

  it('should render', () => {
    renderComponent()
  })

  it('should render correct description', () => {
    const description = [
      wine1CatMock.wine.region[0]?.country,
      WineSugar[wine1CatMock.wine.sugar as keyof typeof WineSugar],
      WineColor[wine1CatMock.wine.color as keyof typeof WineColor],
      `${wine1CatMock.volume} л.`,
    ]
      .filter((e) => e !== undefined)
      .join(', ')
    const { getByText } = renderComponent()
    const descriptionElement = getByText(description)

    expect(descriptionElement).toBeDefined()
  })

  it('should render correct name', () => {
    const { getByText } = renderComponent()
    const nameElement = getByText(wine1CatMock.wine.name)

    expect(nameElement).toBeDefined()
  })
})
