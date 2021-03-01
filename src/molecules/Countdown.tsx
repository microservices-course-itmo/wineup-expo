import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

function Countdown({ isTimerEnabled, time, handleEnd, style }) {
  const [timer, setTimer] = useState(time)
  const [clockCall, setClockCall] = useState()

  useEffect(() => {
    if (isTimerEnabled) startTimer()
  }, [isTimerEnabled])

  useEffect(() => {
    if (timer === 0) {
      clearInterval(clockCall)
      handleEnd()
    }
  }, [timer])

  const decrementClock = () => {
    setTimer((prevState) => prevState - 1)
  }

  const startTimer = () => {
    setClockCall(
      setInterval(() => {
        decrementClock()
      }, 1000)
    )
  }

  return (
    <View>
      <Text style={style}>Отправить повторно через {timer} с</Text>
    </View>
  )
}

export default Countdown
