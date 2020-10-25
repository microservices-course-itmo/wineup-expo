import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

export default Countdown

function Countdown({ isTimerEnabled, time, handleEnd }) {
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
    }, 1000))
  }

  return (
    <View>
      <div>Отправить повторно через {timer}с</div>
    </View>
  )
}
