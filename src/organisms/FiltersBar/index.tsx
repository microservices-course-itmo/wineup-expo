import React from 'react'
import styled from 'styled-components/native'
import { ScrollView, TouchableWithoutFeedback } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ColorFilterButton from '../../molecules/FilterButton/Color'
import CountryFilterButton from '../../molecules/FilterButton/Country'
import RecommendedFilterButton from '../../molecules/FilterButton/Recommended'
import SugarFilterButton from '../../molecules/FilterButton/Sugar'
import PriceFilterButton from '../../molecules/FilterButton/Price'

function FiltersBar() {
  return (
    <Container>
      <TouchableWithoutFeedback>
        <AllFiltersContainer>
          <AllFiltersText>Все фильтры</AllFiltersText>
          <StyledIonicons name='ios-arrow-down' color='#333' />
        </AllFiltersContainer>
      </TouchableWithoutFeedback>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FiltersContainer>
          <CountryFilterButton />
          <PriceFilterButton />
          <RecommendedFilterButton />
          <SugarFilterButton />
          <ColorFilterButton />
        </FiltersContainer>
      </ScrollView>
    </Container>
  )
}

export default FiltersBar

const Container = styled.View`
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 56px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  box-shadow: 0px 5px 4px rgba(178, 178, 178, 0.1);
`

const AllFiltersContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 100%;
  padding: 0 10px;

  border-right-color: #eeeeee;
  border-right-width: 1px;
`

const AllFiltersText = styled.Text`
  font-family: Roboto_300Light;
  font-weight: 300;
  font-size: 10px;
`

const StyledIonicons = styled(Ionicons)`
  margin-left: 5px;
  margin-top: 2px;
`

const FiltersContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding-right: 10px;
`
