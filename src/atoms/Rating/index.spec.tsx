import React from 'react'
import { render } from '@testing-library/react-native'

import Rating from './index'

describe('<Rating />', () => {
  it('should render', () => {
    render(<Rating rating={3} />)
  })
})
