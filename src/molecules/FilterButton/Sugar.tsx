import React from 'react'
import styled from 'styled-components/native'
import FilterButton from './index'
import FilterSheet from '../../organisms/FilterSheet'
import { WineSugar } from '../../atoms/WineInfo'

function SugarFilterButton() {
  const sheetHeight = 350

  const renderFilterPage = (onApply: () => void) => {
    return (
      <FilterSheet
        height={sheetHeight}
        title='Содержание сахара'
        onApply={onApply}
        filter='sugar'
      >
        {/* eslint-disable-next-line @typescript-eslint/ban-types */}
        {Object.entries(WineSugar as object).map(([value, label]) => ({
          value,
          label: label.charAt(0).toUpperCase() + label.slice(1),
        }))}
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
