import { ScrollView, Text } from 'react-native'
import React, { Suspense } from 'react'
import styled from 'styled-components/native'
import WineCardLoader from '../molecules/WineCard/Loader'
import SearchInput from '../molecules/SearchInput'
import FavoritesToolbar from '../organisms/FavoritesToolbar'
import FavoritesView from '../organisms/FavoritesView'
import { useAuthContext } from './Auth/AuthContext'
import UnauthorizedProfile from './UnauthorizedProfile'

export default function FavouritesScreen() {
  const { accessToken } = useAuthContext()

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
      {accessToken ? (
        [<FavoritesToolbar handleClear={() => {}} />, <FavoritesView />]
      ) : (
        <UnauthorizedProfile />
      )}
    </Suspense>
  )
}

const StyledSearchInput = styled(SearchInput)`
  margin: 15px 10px;
`
