import React from 'react'
import { render } from '@testing-library/react-native'

import WineRatingComponent from './index'

describe('<WineRatingComponent />', () => {
  it('should render', () => {
    render(<WineRatingComponent rating={5} />)
  })
})
