import React, { useRef } from 'react'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import PrimaryButton from '../../atoms/PrimaryButton'
import ListFilterSheet from './List'
import PriceFilterSheet from './Price'
import { FiltersState, useFilters } from '../FiltersBar/FiltersContext'

export interface FilterSheetProps {
  title: string
  children: string[] | Array<[number, number]>
  type?: 'checkbox' | 'radio' | 'price'
  withSearch?: boolean
  onApply: () => void
  height?: number
  filter: keyof FiltersState
}

function FilterSheet({
  title,
  children,
  type = 'checkbox',
  withSearch = false,
  onApply: onApplyProp = () => {},
  height = 300,
  filter,
}: FilterSheetProps) {
  const filterPageRef = useRef<{ reset(): void }>(null)
  const { apply } = useFilters()

  const onApply = () => {
    const state = filterPageRef.current?.getState()

    apply(filter, state)
    onApplyProp()
  }

  const onReset = () => {
    filterPageRef.current?.reset()
  }

  const Component = type === 'price' ? PriceFilterSheet : ListFilterSheet

  return (
    <Container height={height}>
      <Title>{title}:</Title>
      <Reset onPress={onReset}>
        <ResetLabel>Сбросить</ResetLabel>
      </Reset>
      <Component
        filter={filter}
        ref={filterPageRef}
        type={type}
        withSearch={withSearch}
      >
        {children as any}
      </Component>
      <PrimaryButton onPress={onApply}>
        <Feather size={16} color='#fff' name='check-circle' />
        <ApplyLabel>Применить</ApplyLabel>
      </PrimaryButton>
    </Container>
  )
}

export default FilterSheet

const Container = styled.View<{ height: number }>`
  width: 100%;
  max-height: ${({ height }) => height}px;
  height: ${({ height }) => height}px;
  padding: 32px 17px 25px;
`

const Title = styled.Text`
  font-family: Roboto_500Medium;
  font-weight: 500;
  font-size: 20px;

  color: #333333;
`

const Reset = styled.TouchableOpacity`
  position: absolute;
  top: 22px;
  right: 17px;
`

const ResetLabel = styled.Text`
  font-family: Roboto_300Light;
  font-weight: 300;
  font-size: 12px;

  text-decoration-line: underline;

  color: #931332;
`

const ApplyLabel = styled.Text`
  margin-left: 10px;

  font-family: Roboto_400Regular;
  font-size: 16px;
  letter-spacing: 0.8px;

  color: #ffffff;
`
