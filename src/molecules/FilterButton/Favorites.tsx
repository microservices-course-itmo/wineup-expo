import React from 'react'
import styled from 'styled-components'
import { EvilIcons } from '@expo/vector-icons'
import FilterSheet from '../../organisms/FilterSheet'
import { FavouriteSortBy } from '../../organisms/FiltersBar/FiltersContext'
import FilterButton from './index'

function FavoritesFilterButton() {
  const renderFilterPage = (onApply: () => void) => {
    return (
      <FilterSheet
        filter='favouriteSortBy'
        onApply={onApply}
        type='radio'
        title='Рекомендованное'
        height={380}
      >
        {[
          { label: 'По рекомендации', value: FavouriteSortBy.Recommended },
          { label: 'По рейтингу', value: FavouriteSortBy.Rating },
          { label: 'По возрастанию цены', value: FavouriteSortBy.CostIncrease },
          { label: 'По убыванию цены', value: FavouriteSortBy.CostDecrease },
        ]}
      </FilterSheet>
    )
  }

  return (
    <StyledFilterButton
      filterPageHeight={400}
      textStyle={{
        color: 'white',
        marginRight: 10,
        marginTop: -3,
      }}
      renderFilterPage={renderFilterPage}
      btnImg={<EvilIcons name='navicon' size={24} color='white' />}
    >
      Сортировать по
    </StyledFilterButton>
  )
}

export default FavoritesFilterButton

const StyledFilterButton = styled(FilterButton)`
  margin-left: 10px;
  background: #931332;
  width: 150px;
  height: 40px;
  align-items: center;
  flex-direction: row;
  border-radius: 0px;
`
