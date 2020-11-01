import React, {
  forwardRef,
  MutableRefObject,
  useImperativeHandle,
  useState,
} from 'react'
import styled from 'styled-components/native'
import PriceInput from '../../molecules/PriceInput'
import RoundedButton from '../../atoms/RoundedButton'
import Switch from '../../atoms/Switch'

interface PriceFilterSheetProps {
  children: Array<[number, number]>
}

interface PriceFilterSheetRef {
  reset(): void
}

function PriceFilterSheet(
  { children }: PriceFilterSheetProps,
  ref:
    | ((instance: PriceFilterSheetRef | null) => void)
    | MutableRefObject<PriceFilterSheetRef | null>
    | null
) {
  const defaultState = {
    from: 0,
    to: 10000,
    discounts: false,
  }

  const [filters, setFilters] = useState(defaultState)
  const [selectedOption, setSelectedOption] = useState<number | undefined>()

  useImperativeHandle(ref, () => ({
    reset: () => {
      setFilters(defaultState)
      setSelectedOption(undefined)
    },
  }))

  const onChange = (name: string) => (value: string | boolean) => {
    setSelectedOption(undefined)

    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const onSelect = (index: number) => () => {
    setSelectedOption(() => {
      if (index === selectedOption) {
        setFilters((prevState) => ({
          ...prevState,
          from: defaultState.from,
          to: defaultState.to,
        }))

        return undefined
      }

      const [from, to] = children[index]

      setFilters((prevState) => ({ ...prevState, from, to }))

      return index
    })
  }

  return (
    <>
      <InputsContainer>
        <PriceInput
          label='От'
          value={filters.from.toString()}
          onChange={onChange('from')}
        />
        <PriceInput
          label='До'
          value={filters.to.toString()}
          onChange={onChange('to')}
        />
      </InputsContainer>
      <OptionsLabel>До:</OptionsLabel>
      <Options>
        {children.map(([from, to], i) => {
          let label = ''

          if (from !== 0) {
            label += `${from}-`
          }

          label += `${to} ₽`

          return (
            <StyledRoundedButton
              selected={selectedOption === i}
              key={i}
              onPress={onSelect(i)}
              textStyle={{
                fontSize: 11,
                fontWeight: 400,
                fontStyle: 'italic',
                fontFamily: 'Roboto_400Regular_Italic',
              }}
            >
              {label}
            </StyledRoundedButton>
          )
        })}
      </Options>
      <Discounts>
        <DiscountsLabel>Товары со скидкой</DiscountsLabel>
        <Switch checked={filters.discounts} onChange={onChange('discounts')} />
      </Discounts>
    </>
  )
}

export default forwardRef<PriceFilterSheetRef, PriceFilterSheetProps>(
  PriceFilterSheet
)

const InputsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 25px;
`

const OptionsLabel = styled.Text`
  margin-top: 30px;
`

const Options = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`

const StyledRoundedButton = styled(RoundedButton)`
  padding: 5px 10px;
`

const Discounts = styled.View`
  flex-direction: row;
  margin: 40px 0;
`

const DiscountsLabel = styled.Text`
  margin-right: 15px;

  font-family: Roboto_300Light;
  font-weight: 300;
  font-size: 14px;

  color: #333333;
`
