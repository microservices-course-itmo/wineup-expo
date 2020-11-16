import React from 'react'
import styled from 'styled-components'
import FilterSheet from '../../organisms/FilterSheet'
import { SortBy } from '../../organisms/FiltersBar/FiltersContext'
import FilterButton from './index'

function RecommendedFilterButton() {
  const renderFilterPage = (onApply: () => void) => {
    return (
      <FilterSheet
        filter='sortBy'
        onApply={onApply}
        type='radio'
        title='Рекомендованное'
      >
        {[
          { label: 'Наиболее вам подходящее', value: SortBy.Recommended },
          { label: 'По рейтингу', value: SortBy.Rating },
        ]}
      </FilterSheet>
    )
  }

  return (
    <StyledFilterButton renderFilterPage={renderFilterPage}>
      Рекомендованное
    </StyledFilterButton>
  )
}

export default RecommendedFilterButton

const StyledFilterButton = styled(FilterButton)`
  margin-left: 10px;
`
