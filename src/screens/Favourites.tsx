import { ScrollView } from 'react-native'
import React, { Suspense } from 'react'
import styled from 'styled-components/native'
import WineCardLoader from '../molecules/WineCard/Loader'
import SearchInput from '../molecules/SearchInput'
import FavouritesPlaceholder from '../molecules/FavoritesPlaceholder'

export default function FavouritesScreen() {
  const loader = (
    <ScrollView showsVerticalScrollIndicator={false}>
      <WineCardLoader />
      <WineCardLoader />
      <WineCardLoader />
    </ScrollView>
  )

  return (
    <Suspense fallback={loader}>
      <StyledSearchInput value='' />
      <FavouritesPlaceholder />
    </Suspense>
  )
}

const StyledSearchInput = styled(SearchInput)`
  margin: 15px 10px;
`
