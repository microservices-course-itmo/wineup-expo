import { render } from '@testing-library/react-native'
import React from 'react'
import ResultValue from './index'

it('should rightly rendered <ResultValue/>', () => {
  render(<ResultValue resultValue={1000} discount={20} />)
  render(<ResultValue resultValue={100} discount={100} />)
  render(<ResultValue resultValue={500} discount={-20} />)
})

it('should show just value if discount is equal to 0', () => {
  const { getByText } = render(<ResultValue resultValue={1000} discount={0} />)
  const element = getByText('1000')

  expect(element).toBeDefined()
})
