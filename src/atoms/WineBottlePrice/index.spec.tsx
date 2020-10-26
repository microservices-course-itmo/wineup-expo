import React from 'react'
import { render } from '@testing-library/react-native'
import WineBottlePrice from './index'

describe('<WineBottlePrice />', () => {
  it('should render', () => {
    render(<WineBottlePrice price={1200} />)
  })
})
