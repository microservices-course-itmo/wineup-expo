import React from 'react'
import styled from 'styled-components/native'
import FilterButton from './index'
import FilterSheet from '../../organisms/FilterSheet'

function ColorFilterButton() {
  const renderFilterPage = (onApply: () => void) => {
    return (
      <FilterSheet title='Цвет' onApply={onApply}>
        {['Белое', 'Красное', 'Розовое']}
      </FilterSheet>
    )
  }

  return (
    <StyledFilterButton renderFilterPage={renderFilterPage}>
      Цвет
    </StyledFilterButton>
  )
}

export default ColorFilterButton

const StyledFilterButton = styled(FilterButton)`
  margin-left: 10px;
`
