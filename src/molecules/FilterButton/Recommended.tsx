import React from 'react'
import styled from 'styled-components/native'
import FilterButton from './index'
import FilterSheet from '../../organisms/FilterSheet'

function RecommendedFilterButton() {
  const renderFilterPage = (onApply: () => void) => {
    return (
      <FilterSheet onApply={onApply} type='radio' title='Рекомендованное'>
        {['Наиболее вам подходящее', 'По рейтингу']}
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
