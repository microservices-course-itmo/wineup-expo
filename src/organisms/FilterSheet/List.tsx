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

interface ListFilterSheetProps {
  type?: 'checkbox' | 'radio' | 'price'
  withSearch?: boolean
  onChange?: (filters: { [key: string]: boolean }) => void
  children: string[]
  state?: { [key: string]: boolean }
}

export interface ListFilterSheetRef {
  reset(): void
}

function ListFilterSheet(
  {
    withSearch,
    type,
    children,
    state,
    onChange = () => {},
  }: ListFilterSheetProps,
  ref:
    | ((instance: ListFilterSheetRef | null) => void)
    | MutableRefObject<ListFilterSheetRef | null>
    | null
) {
  const [options, setOptions] = useState(children)

  const defaultState: { [key: string]: boolean } = state || {}

  if (state) {
    children.forEach((option) => {
      defaultState[option] = state[option]
    })
  } else {
    children.forEach((option) => {
      defaultState[option] = false
    })
  }

  if (!state && type === 'radio') {
    defaultState[children[0]] = true
  }
  const [filters, setFilters] = useState(defaultState)
  const [searchQuery, setSearchQuery] = useState('')

  useImperativeHandle(ref, () => ({
    reset: () => {
      setFilters(defaultState)
      onChange(defaultState)
      onSearch('')
    },
  }))

  const onSelect = (option: string) => () => {
    setFilters((prevState) => {
      let selectState: { [key: string]: boolean }

      switch (type) {
        case 'checkbox':
          selectState = {
            ...prevState,
            [option]: !prevState[option],
          }
          break

        case 'radio': {
          const newState = { ...prevState }

          // eslint-disable-next-line no-restricted-syntax,guard-for-in
          for (const key in newState) {
            newState[key] = false
          }

          newState[option] = true

          selectState = newState

          break
        }

        default:
          selectState = prevState
      }

      onChange(selectState)

      return selectState
    })
  }

  const onSearch = (value: string) => {
    setSearchQuery(() => {
      setOptions(
        children.filter((option) =>
          option.toLowerCase().includes(value.toLowerCase())
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
            key={option}
            onPress={onSelect(option)}
            checked={filters[option]}
            label={option}
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
