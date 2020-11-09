import React from 'react'
import Svg, { Path } from 'react-native-svg'

function UncheckedIcon() {
  return (
    <Svg width='16' height='16' fill='none' viewBox='0 0 16 16'>
      <Path
        fill='#fff'
        d='M0 3a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H3a3 3 0 01-3-3V3z'
      />
    </Svg>
  )
}

export default UncheckedIcon
