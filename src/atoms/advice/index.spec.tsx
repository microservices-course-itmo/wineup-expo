import { render } from '@testing-library/react-native'
import React from 'react'
import Advice from './index'

it('should rightly rendered <Advice/>', () => {
  const { getByTestId } = render(<Advice ratioAdvice={101} />)
  const elem = getByTestId('advice-test')
  expect(elem).toBeDefined()
})

it('should render 100 if prop is greater than 100', () => {
  const { getByText } = render(<Advice ratioAdvice={101} />)
  const element = getByText('Подходит Вам на 100%')
  expect(element).toBeDefined()
})

it('should render 0 if prop is less than 0', () => {
  const { getByText } = render(<Advice ratioAdvice={-1} />)
  const element = getByText('Подходит Вам на 0%')
  expect(element).toBeDefined()
})
