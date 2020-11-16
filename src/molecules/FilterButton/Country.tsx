import React from 'react'
import styled from 'styled-components/native'
import { useResource } from 'rest-hooks'
import FilterButton from './index'
import FilterSheet from '../../organisms/FilterSheet'
import RegionResource from '../../resources/region'

function CountryFilterButton() {
  const sheetHeight = 570
  const regions: RegionResource[] = useResource(RegionResource.listShape(), {})

  const renderFilterPage = (onApply: () => void) => {
    return (
      <FilterSheet
        onApply={onApply}
        title='Страна'
        withSearch
        height={sheetHeight}
        filter='country'
      >
        {regions.map((region) => ({ label: region.country, value: region.id }))}
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
