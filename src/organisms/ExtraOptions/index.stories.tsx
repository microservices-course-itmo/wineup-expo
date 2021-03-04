import React, { useRef, useState } from 'react'
import { storiesOf } from '@storybook/react-native'

import { TouchableOpacity, Text } from 'react-native'
import ExtraOptions from './index'

storiesOf('ExtraOptions', module).add('Default', () => {
  const [isVisible, setIsVisible] = useState(false)
  const target = useRef<Text>(null)

  return (
    <>
      <TouchableOpacity onPress={() => setIsVisible(true)}>
        <Text ref={target}>Show options</Text>
      </TouchableOpacity>
      <ExtraOptions
        data={[{ param: 'Параметр', answ: 'Значение' }]}
        visible={isVisible}
        handleClose={() => setIsVisible(false)}
        target={target}
      />
    </>
  )
})
