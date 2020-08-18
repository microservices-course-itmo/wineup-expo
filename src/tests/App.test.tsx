import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import App from '../App'

describe('<App />', () => {
  it('has 1 child', () => {
    const tree = render(<App />)
  })
})
