import React from 'react'
import { render } from '@testing-library/react-native'
import image from './src/bottle_placeholder.png'
import WineBottlePicture from './index'

describe('<WineBottlePicture />', () => {
  it('should render', () => {
    render(<WineBottlePicture image={image} />)
  })
})
