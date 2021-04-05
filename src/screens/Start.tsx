import React, { Suspense } from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'
import SearchInput from '../molecules/SearchInput'
import WineCardLoader from '../molecules/WineCard/Loader'
import AboutUsInfo from '../organisms/AboutUsInfo'

export default function StartScreen() {
  const loader = (
    <ScrollView showsVerticalScrollIndicator={false}>
      <WineCardLoader />
      <WineCardLoader />
      <WineCardLoader />
    </ScrollView>
  )

  return (
    <ScrollView>
      <StyledSearchInput value='' />
      <Suspense fallback={loader}>
        <AboutUsInfo />
      </Suspense>
    </ScrollView>
  )
}

const StyledSearchInput = styled(SearchInput)`
  margin: 15px 10px;
`
