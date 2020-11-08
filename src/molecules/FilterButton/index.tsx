import React, { PropsWithChildren, ReactElement, useRef, useState } from 'react'
import { StyleProp } from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet'
import RoundedButton from '../../atoms/RoundedButton'

interface FilterButtonProps {
  style?: StyleProp<any>
  renderFilterPage: (onApply: () => void) => ReactElement
  filterPageHeight?: number
}

function FilterButton({
  children,
  style,
  renderFilterPage,
  filterPageHeight = 320,
}: PropsWithChildren<FilterButtonProps>) {
  const [selected, setSelected] = useState(false)
  const rbSheetRef = useRef<RBSheet>(null)

  const onPress = () => {
    setSelected(() => {
      rbSheetRef.current!.open()

      return true
    })
  }

  const onClose = () => {
    setSelected(false)
  }

  const onApply = () => {
    rbSheetRef.current!.close()
  }

  return (
    <>
      <RoundedButton style={style} selected={selected} onPress={onPress}>
        {children}
      </RoundedButton>
      <RBSheet
        height={filterPageHeight}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(27, 5, 10, 0.75)',
          },
        }}
        onClose={onClose}
        ref={rbSheetRef}
      >
        {renderFilterPage(onApply)}
      </RBSheet>
    </>
  )
}

export default FilterButton
