import React, {
  forwardRef,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import styled from 'styled-components/native'
import PriceInput from '../../molecules/PriceInput'
import RoundedButton from '../../atoms/RoundedButton'
import Switch from '../../atoms/Switch'
import { FiltersState, useFilters } from '../FiltersBar/FiltersContext'

interface PriceFilterSheetProps {
  children: Array<[number, number]>
  filter: 'price'
}

interface PriceFilterSheetRef {
  reset(): void
  getState(): FiltersState['price']
}

function PriceFilterSheet(
  { children, filter }: PriceFilterSheetProps,
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

  const { filters } = useFilters()
  const [state, setState] = useState(filters[filter])
  const [selectedOption, setSelectedOption] = useState<number | undefined>()

  useImperativeHandle(
    ref,
    () => ({
      reset: () => {
        setState(defaultState)
        setSelectedOption(undefined)
      },
      getState(): FiltersState['price'] {
        return state
      },
    }),
    [state]
  )

  useEffect(() => {
    const index = children.findIndex(
      ([from, to]) => from === state.from && to === state.to
    )

    if (index > -1) {
      setSelectedOption(index)
    }
  }, [])

  const onChange = (name: string) => (value: string | boolean) => {
    setSelectedOption(undefined)

    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  const onSelect = (index: number) => () => {
    if (index === selectedOption) {
      setState((prevState) => {
        return {
          ...prevState,
          from: defaultState.from,
          to: defaultState.to,
        }
      })

      setSelectedOption(undefined)

      return
    }

    const [from, to] = children[index]

    setState((prevState) => {
      return {
        ...prevState,
        from,
        to,
      }
    })

    setSelectedOption(index)
  }

  return (
    <>
      <InputsContainer>
        <PriceInput
          label='От'
          value={state.from.toString()}
          onChange={onChange('from')}
        />
        <PriceInput
          label='До'
          value={state.to.toString()}
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
                fontWeight: '400',
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
        <Switch checked={state.discounts} onChange={onChange('discounts')} />
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
