import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react'
import RegionResource from '../../resources/region'
import { WineColor, WineSugar } from '../../atoms/WineInfo'

// eslint-disable-next-line no-shadow
export enum SortBy {
  Recommended,
  Rating,
}

// eslint-disable-next-line no-shadow
export enum FavouriteSortBy {
  Recommended,
  Rating,
  CostIncrease,
  CostDecrease,
}

export interface FiltersState {
  price: {
    from: number
    to: number
    discounts: boolean
  }
  country: RegionResource['id'][]
  sugar: Array<keyof typeof WineSugar>
  color: Array<keyof typeof WineColor>
  sortBy: SortBy
  favouriteSortBy: FavouriteSortBy
}

interface FiltersContextState {
  filters: FiltersState
  apply(name: keyof FiltersState, state: FiltersState[keyof FiltersState]): void
  query: string
}

const defaultFiltersState = {
  price: {
    from: 0,
    to: 10000,
    discounts: false,
  },
  country: [],
  sugar: [],
  color: [],
  sortBy: SortBy.Recommended,
  favouriteSortBy: FavouriteSortBy.Recommended,
}

export const FiltersContext = createContext<FiltersContextState>({
  filters: defaultFiltersState,
  apply: () => {},
  query: '',
})

export function FiltersProvider({ children }: PropsWithChildren<any>) {
  const [filters, setFilters] = useState<FiltersState>(defaultFiltersState)

  const apply = (
    name: keyof FiltersState,
    state: FiltersState[keyof FiltersState]
  ) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: state,
    }))
  }

  return (
    <FiltersContext.Provider
      value={{ filters, apply, query: composeQuery(filters) }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

export function useFilters(): FiltersContextState {
  return useContext(FiltersContext)
}

export function composeQuery(filters: FiltersContextState['filters']): string {
  const queries = [
    filters.sugar.map((value) => `sugar:${value};`).join('~'),
    filters.color.map((value) => `color:${value};`).join('~'),
  ].filter((query) => query.length > 0)

  return queries.join('*')
}
