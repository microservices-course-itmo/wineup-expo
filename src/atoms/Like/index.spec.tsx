import { render } from '@testing-library/react-native'
import React from 'react'
import Like from './index'

describe('<Like />', () => {
  it('should render', () => {
    const liked = true

    render(<Like liked={liked} />)
  })
})
