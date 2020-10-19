import { render } from '@testing-library/react-native'
import React from 'react'

import Like from './index'

describe('<Like />', () => {
  it('should render correct like color ', () => {
    const liked = true

    render(<Like liked={liked} />)
  })
})
