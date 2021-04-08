import React from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'
import SearchInput from '../molecules/SearchInput'
import AboutUsInfo from '../organisms/AboutUsInfo'

export default function StartScreen() {
  return (
    <ScrollView>
      <StyledSearchInput value='' />
      <AboutUsInfo />
    </ScrollView>
  )
}

const StyledSearchInput = styled(SearchInput)`
  margin: 15px 10px;
`
