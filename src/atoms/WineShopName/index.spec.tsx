import React from 'react'
import { render } from '@testing-library/react-native'

// eslint-disable-next-line import/no-useless-path-segments
import WineShopName from '../../atoms/WineShopName'

describe('<WineShopName />', () => {
  it('should render', () => {
    render(<WineShopName name='ВИНЛАБ' description='Супермаркет напитков' />)
  })
})
