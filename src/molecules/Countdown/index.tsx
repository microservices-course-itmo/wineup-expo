import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleProp } from 'react-native'

interface CountdownProps {
  isTimerEnabled: boolean
  time: number
  onEnd: () => void
  style: StyleProp<any>
}

function Countdown({ isTimerEnabled, time, onEnd, style }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(time)
  const timer = useRef<number>()

  useEffect(() => {
    if (isTimerEnabled) startTimer()
  }, [isTimerEnabled])

  useEffect(() => {
    if (timeLeft <= 0) {
      clearInterval(timer.current)
      timer.current = 0

      onEnd()
    }
  }, [timer])

  const decrementClock = () => {
    setTimeLeft((prevState) => Math.max(0, prevState - 1))
  }

  const startTimer = () => {
    timer.current = setInterval(() => {
      decrementClock()
    }, 1000)
  }

  return (
    <View>
      <Text style={style}>Отправить повторно через {timeLeft} с</Text>
    </View>
  )
}

export default Countdown
