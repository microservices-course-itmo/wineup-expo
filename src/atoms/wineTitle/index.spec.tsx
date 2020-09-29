import { render } from '@testing-library/react-native'
import React from 'react'

import WineCard from './index'

describe('<App />', () => {
  it('should render', () => {
    render(
      <WineCard
        volume={0.75}
        description='Австралия, Красное, сухое'
        name='Canti Merlot'
      />
    )
  })
})
