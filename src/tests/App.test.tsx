import React from 'react'
import { render } from '@testing-library/react-native'

import App from '../App'

jest.useFakeTimers()

describe('<App />', () => {
  it('has 1 child', () => {
    render(<App />)
  })
})
