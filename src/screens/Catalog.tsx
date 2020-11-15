import React, { Suspense } from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'
import CatalogView from '../organisms/CatalogView'
import SearchInput from '../molecules/SearchInput'
import FiltersBar from '../organisms/FiltersBar'
import WineCardLoader from '../molecules/WineCard/Loader'

export default function CatalogScreen() {
  const loader = (
    <ScrollView showsVerticalScrollIndicator={false}>
      <WineCardLoader />
      <WineCardLoader />
      <WineCardLoader />
    </ScrollView>
  )

  return (
    <>
      <StyledSearchInput value='' />
      <FiltersBar />
      <Suspense fallback={loader}>
        <CatalogView />
      </Suspense>
    </>
  )
}

const StyledSearchInput = styled(SearchInput)`
  margin: 15px 10px;
`
