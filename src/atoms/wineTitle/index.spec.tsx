import { render } from '@testing-library/react-native'
import React from 'react'
import WineCard from './index'

describe('<WineCard />', () => {
  it('should render', () => {
    render(<WineCard />)
  })
})
