import React, { ReactElement } from 'react'
import Svg, { Path } from 'react-native-svg'

function GoBackArrowIcon(): ReactElement {
  return (
    <Svg width='13' height='9' viewBox='0 0 13 9' fill='none'>
      <Path
        d='M0.146447 4.14645C-0.0488155 4.34171 -0.0488155 4.65829 0.146447 4.85355L3.32843 8.03553C3.52369 8.2308 3.84027 8.2308 4.03553 8.03553C4.2308 7.84027 4.2308 7.52369 4.03553 7.32843L1.20711 4.5L4.03553 1.67157C4.2308 1.47631 4.2308 1.15973 4.03553 0.964466C3.84027 0.769204 3.52369 0.769204 3.32843 0.964466L0.146447 4.14645ZM13 4L0.5 4V5L13 5V4Z'
        fill='white'
      />
    </Svg>
  )
}

export default GoBackArrowIcon
