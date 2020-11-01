import React from 'react'
import styled from 'styled-components/native'
import FilterButton from './index'
import FilterSheet from '../../organisms/FilterSheet'

function PriceFilterButton() {
  const sheetHeight = 400

  const renderFilterPage = (onApply: () => void) => {
    return (
      <FilterSheet
        type='price'
        height={sheetHeight}
        title='Цена'
        onApply={onApply}
      >
        {[
          [0, 1500],
          [1500, 3000],
          [3000, 5000],
          [5000, 10000],
        ]}
      </FilterSheet>
    )
  }

  return (
    <StyledFilterButton
      filterPageHeight={sheetHeight}
      renderFilterPage={renderFilterPage}
    >
      Цена
    </StyledFilterButton>
  )
}

export default PriceFilterButton

const StyledFilterButton = styled(FilterButton)`
  margin-left: 10px;
`
