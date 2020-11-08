import React from 'react'
import styled from 'styled-components/native'
import FilterButton from './index'
import FilterSheet from '../../organisms/FilterSheet'

function SugarFilterButton() {
  const sheetHeight = 350

  const renderFilterPage = (onApply: () => void) => {
    return (
      <FilterSheet
        height={sheetHeight}
        title='Содержание сахара'
        onApply={onApply}
      >
        {['Сухое', 'Полусухое', 'Сладкое', 'Полусладкое']}
      </FilterSheet>
    )
  }

  return (
    <StyledFilterButton
      filterPageHeight={sheetHeight}
      renderFilterPage={renderFilterPage}
    >
      Сахар
    </StyledFilterButton>
  )
}

export default SugarFilterButton

const StyledFilterButton = styled(FilterButton)`
  margin-left: 10px;
`
