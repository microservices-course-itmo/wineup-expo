import React, { useEffect, useState } from 'react'
import { View, Text, StyleProp } from 'react-native'

interface CountdownProps {
  time: number
  onEnd: () => void
  style: StyleProp<any>
}

const Countdown = ({ time, onEnd, style }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState(time)
  const [showTimer, setShoweTimer] = useState(true)

  useEffect(() => {
    if (timeLeft === 0) {
      setShoweTimer(false)
      onEnd()
    } else {
      setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
    }
  }, [timeLeft])

  return showTimer ? (
    <View>
      <Text style={style}>Отправить повторно через {timeLeft} с</Text>
    </View>
  ) : (
    <View />
  )
}

export default Countdown
