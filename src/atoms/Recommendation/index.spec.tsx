import { render } from '@testing-library/react-native'
import React from 'react'
import Recommendation from './index'

it('should rightly rendered <Advice/>', () => {
  render(<Recommendation ratioAdvice={50} />)
  render(<Recommendation ratioAdvice={0.0001} />)
  render(<Recommendation ratioAdvice={99.999999} />)
})

it('should render 100 if prop is greater than 100', () => {
  const { getByText } = render(<Recommendation ratioAdvice={101} />)
  const element = getByText('Подходит Вам на 100%')

  expect(element).toBeDefined()
})

it('should render 0 if prop is less than 0', () => {
  const { getByText } = render(<Recommendation ratioAdvice={-1} />)
  const element = getByText('Подходит Вам на 0%')

  expect(element).toBeDefined()
})
