import React from 'react'
import styled from 'styled-components/native'
import { useResource } from 'rest-hooks'
import FilterButton from './index'
import FilterSheet from '../../organisms/FilterSheet'
import RegionResource from '../../resources/region'

function CountryFilterButton() {
  const sheetHeight = 570
  const regions: RegionResource[] = useResource(RegionResource.list(), {})
  const countries = (() => {
    const countriesSet = new Set<string>()
    const resultArray = new Array<{ label: string; value: string }>()

    regions.forEach((region) => {
      if (
        countriesSet.has(region.country) ||
        region.country === 'COUNTRY_NOT_PRESENTED'
      ) {
        return
      }
      resultArray.push({ label: region.country, value: region.country })
      countriesSet.add(region.country)
    })

    return resultArray
  })()

  const renderFilterPage = (onApply: () => void) => {
    return (
      <FilterSheet
        onApply={onApply}
        title='Страна'
        withSearch
        height={sheetHeight}
        filter='country'
      >
        {countries}
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
