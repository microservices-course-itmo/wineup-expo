import { ScrollView } from 'react-native'
import React, { Suspense } from 'react'
import styled from 'styled-components/native'
import CatalogView from '../organisms/CatalogView'
import WineCardLoader from '../molecules/WineCard/Loader'
import SearchInput from '../molecules/SearchInput'

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
      <CatalogView />
    </Suspense>
  )
}

const StyledSearchInput = styled(SearchInput)`
  margin: 15px 10px;
`
