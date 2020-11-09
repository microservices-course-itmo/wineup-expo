import React, { ReactElement } from 'react'
import Svg, { Path } from 'react-native-svg'

function CheckedIcon(): ReactElement {
  return (
    <Svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
      <Path
        d='M0 3C0 1.34315 1.34315 0 3 0H13C14.6569 0 16 1.34315 16 3V13C16 14.6569 14.6569 16 13 16H3C1.34315 16 0 14.6569 0 13V3Z'
        fill='#931332'
      />
      <Path
        d='M3.54028 8.33372L6.64908 11.2208M6.58369 10.5598L12.0274 4.69751'
        stroke='white'
      />
    </Svg>
  )
}

export default CheckedIcon
