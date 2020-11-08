import React from 'react'
import styled from 'styled-components/native'
import { Wine } from '../molecules/WineCard'
import CatalogView from '../organisms/CatalogView'
import SearchInput from '../molecules/SearchInput'
import FiltersBar from '../organisms/FiltersBar'

export default function CatalogScreen() {
  const wines: Wine[] = new Array(10).fill({
    name: 'Canti Merlot',
    country: 'Австралия',
    dryness: 'сухое',
    color: 'красное',
    volume: 0.75,
    shop: { name: 'Ароматный мир', description: 'Супермаркет напитков' },
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
