import React from 'react'
import { render } from '@testing-library/react-native'
import WineShopName from './index'

describe('<WineShopName />', () => {
  it('should render', () => {
    render(<WineShopName name='ВИНЛАБ' />)
  })
})
