import React from 'react'
import styled from 'styled-components/native'
import FilterButton from './index'
import FilterSheet from '../../organisms/FilterSheet'
import { WineColor } from '../../atoms/WineInfo'

function ColorFilterButton() {
  const sheetHeight = 330

  const renderFilterPage = (onApply: () => void) => {
    return (
      <FilterSheet
        filter='color'
        height={sheetHeight}
        title='Цвет'
        onApply={onApply}
      >
        {/* eslint-disable-next-line @typescript-eslint/ban-types */}
        {Object.entries(WineColor as object).map(([value, label]) => ({
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
      Цвет
    </StyledFilterButton>
  )
}

export default ColorFilterButton

const StyledFilterButton = styled(FilterButton)`
  margin-left: 10px;
`
