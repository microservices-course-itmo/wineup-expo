import React from 'react'
import { render } from '@testing-library/react-native'
import WineBottlePicture from './index'
import { wine1CatMock } from '../../tests/__mocks__/fixtures'

describe('<WineBottlePicture />', () => {
  it('should render', () => {
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

    render(<WineBottlePicture position={fixture} />)
  })
})
