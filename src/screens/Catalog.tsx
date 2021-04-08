import React, { Suspense } from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'
import CatalogView from '../organisms/CatalogView'
import SearchInput from '../molecules/SearchInput'
import FiltersBar from '../organisms/FiltersBar'
import WineCardLoader from '../molecules/WineCard/Loader'
import { FiltersProvider } from '../organisms/FiltersBar/FiltersContext'

export default function CatalogScreen() {
  const [search, setSearch] = React.useState('')

  const loader = (
    <ScrollView showsVerticalScrollIndicator={false}>
      <WineCardLoader />
      <WineCardLoader />
      <WineCardLoader />
    </ScrollView>
  )

  return (
    <FiltersProvider>
      <StyledSearchInput value={search} onChange={setSearch} />
      <FiltersBar />
      <Suspense fallback={loader}>
        <CatalogView />
      </Suspense>
    </FiltersProvider>
  )
}

const StyledSearchInput = styled(SearchInput)`
  margin: 15px 10px;
`
