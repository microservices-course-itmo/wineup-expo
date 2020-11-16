import React, {
  forwardRef,
  MutableRefObject,
  useImperativeHandle,
  useState,
} from 'react'
import styled from 'styled-components/native'
import SearchInput from '../../molecules/SearchInput'
import LabeledCheckbox from '../../molecules/LabeledCheckbox'
import LabeledRadioButton from '../../molecules/LabeledRadioButton'
import { FiltersState, useFilters } from '../FiltersBar/FiltersContext'

export interface ListFilterOption {
  value: string
  label: string
}

interface ListFilterSheetProps {
  type?: 'checkbox' | 'radio' | 'price'
  withSearch?: boolean
  children: ListFilterOption[]
  filter: keyof FiltersState
}

export interface ListFilterSheetRef {
  reset(): void
  getState(): FiltersState[keyof FiltersState]
}

function ListFilterSheet(
  { withSearch, type, children, filter }: ListFilterSheetProps,
  ref:
    | ((instance: ListFilterSheetRef | null) => void)
    | MutableRefObject<ListFilterSheetRef | null>
    | null
) {
  const [options, setOptions] = useState(children)
  const { filters } = useFilters()

  type FilterType<T extends typeof type> = T extends 'radio' ? string : string[]

  const [checkedFilters, setCheckedFilters] = useState<FilterType<typeof type>>(
    filters[filter] as FilterType<typeof type>
  )
  const [searchQuery, setSearchQuery] = useState('')

  useImperativeHandle(
    ref,
    () => ({
      reset: () => {
        setCheckedFilters(type === 'checkbox' ? [] : options[0].value)
        onSearch('')
      },
      getState: (): FiltersState[typeof filter] => {
        return checkedFilters
      },
    }),
    [checkedFilters]
  )

  const onSelect = (option: ListFilterOption) => () => {
    setCheckedFilters((prevState) => {
      switch (type) {
        case 'checkbox': {
          const index = prevState.indexOf(option.value)
          const newState = [...prevState]

          if (index !== -1) {
            newState.splice(index, 1)
          } else {
            newState.push(option.value)
          }

          return newState
        }

        case 'radio':
          return option.value

        default:
          return prevState
      }
    })
  }

  const onSearch = (value: string) => {
    setSearchQuery(() => {
      setOptions(
        children.filter(({ label }) =>
          label.toLowerCase().includes(value.toLowerCase())
        )
      )

      return value
    })
  }

  const Component =
    type === 'checkbox' ? StyledLabeledCheckbox : StyledRadioButton

  return (
    <>
      {withSearch && (
        <StyledSearchInput value={searchQuery} onChange={onSearch} />
      )}
      <Options
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
      >
        {options.map((option) => (
          <Component
            key={option.value}
            onPress={onSelect(option)}
            checked={
              type === 'checkbox'
                ? checkedFilters.includes(option.value)
                : checkedFilters === option.value
            }
            label={option.label}
          />
        ))}
      </Options>
    </>
  )
}

export default forwardRef<ListFilterSheetRef, ListFilterSheetProps>(
  ListFilterSheet
)

const StyledSearchInput = styled(SearchInput)`
  margin-top: 15px;
`

const Options = styled.ScrollView`
  margin: 20px 0 45px;
`

const StyledLabeledCheckbox = styled(LabeledCheckbox)`
  margin: 9px 0 9px 25px;
`

const StyledRadioButton = styled(LabeledRadioButton)`
  margin: 9px 0 9px 25px;
`
