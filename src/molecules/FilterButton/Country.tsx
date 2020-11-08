import React from 'react'
import styled from 'styled-components/native'
import FilterButton from './index'
import FilterSheet from '../../organisms/FilterSheet'

function CountryFilterButton() {
  const sheetHeight = 570

  const renderFilterPage = (onApply: () => void) => {
    return (
      <FilterSheet
        onApply={onApply}
        title='Страна'
        withSearch
        height={sheetHeight}
      >
        {[
          'Австралия',
          'Австрия',
          'Германия',
          'Испания',
          'Италия',
          'Новая Зеландия',
          'Португалия',
          'Франция',
          'США',
          'Чили',
          'Россия',
          'Грузия',
        ]}
      </FilterSheet>
    )
  }

  return (
    <StyledFilterButton
      filterPageHeight={sheetHeight}
      renderFilterPage={renderFilterPage}
    >
      Страна
    </StyledFilterButton>
  )
}

export default CountryFilterButton

const StyledFilterButton = styled(FilterButton)`
  margin-left: 10px;
`
