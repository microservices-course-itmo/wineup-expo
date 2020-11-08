import React from 'react'
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
    extraOptions: [
      {
        param: 'Виноград',
        answ: 'Изабелла',
      },
      {
        param: 'Градус',
        answ: '13°C',
      },
      {
        param: 'Производитель',
        answ: 'ООО Вина Абхазии',
      },
    ],
  })

  return (
    <>
      <SearchInput />
      <FiltersBar filters={['Рекомендованное', 'Цена', 'Страна', 'Цвет']} />
      <CatalogView>{wines}</CatalogView>
    </>
  )
}
