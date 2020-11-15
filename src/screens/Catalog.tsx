import React from 'react'
import styled from 'styled-components/native'
import { useResource } from 'rest-hooks'
import { Wine } from '../molecules/WineCard'
import CatalogView from '../organisms/CatalogView'
import SearchInput from '../molecules/SearchInput'
import FiltersBar from '../organisms/FiltersBar'
import WineCardResource from '../resources/WineCardResource'

export default function CatalogScreen() {
  const list = useResource(WineCardResource.listShape(), {})

  const wines: Wine[] = list.map((wine) => {
    return {
      name: wine.name,
      country: 'Австралия',
      dryness: wine.sugar,
      color: wine.color,
      volume: 0.75,
      shop: { name: 'Ароматный мир', description: 'Супермаркет напитков' },
      year: wine.year,
    }
  })

  return (
    <>
      <StyledSearchInput value='' />
      <FiltersBar />
      <CatalogView>{wines}</CatalogView>
    </>
  )
}

const StyledSearchInput = styled(SearchInput)`
  margin: 15px 10px;
`
