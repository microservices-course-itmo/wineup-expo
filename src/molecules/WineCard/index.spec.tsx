import React, { Suspense } from 'react'
import { render } from '@testing-library/react-native'
import { MockProvider } from '@rest-hooks/test'
import WineCard from './index'
import { fixtures, wine1CatMock } from '../../tests/__mocks__/fixtures'
import { WineColor, WineSugar } from '../../atoms/WineInfo'

describe('WineCard', () => {
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
          <WineCard position={fixture} />
        </MockProvider>
      </Suspense>
    )
  }

  it('should render', () => {
    renderComponent()
  })

  it('should contain name', () => {
    const { getByText } = renderComponent()

    getByText(wine1CatMock.wine.name)
  })

  it('should contain description', () => {
    const { getByText } = renderComponent()

    getByText(
      [
        wine1CatMock.wine.region[0]?.country,
        WineSugar[wine1CatMock.wine.sugar as keyof typeof WineSugar],
        WineColor[wine1CatMock.wine.color as keyof typeof WineColor],
        `${wine1CatMock.volume} л.`,
      ]
        .filter((e) => e !== undefined)
        .join(', ')
    )
  })

  it('should contain shop name', () => {
    const { getByText } = renderComponent()

    getByText(wine1CatMock.shop.site)
  })
})
