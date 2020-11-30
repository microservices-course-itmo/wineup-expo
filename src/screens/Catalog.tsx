import React, { Suspense } from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'
import { NetworkErrorBoundary } from 'rest-hooks'
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
        <NetworkErrorBoundary
          fallbackComponent={(props) => {
            console.log(props)

            return null
          }}
        >
          <CatalogView />
        </NetworkErrorBoundary>
      </Suspense>
    </>
  )
}

const StyledSearchInput = styled(SearchInput)`
  margin: 15px 10px;
`
