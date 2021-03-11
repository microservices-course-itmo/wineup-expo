import { useEffect, useRef } from 'react'
import * as Notifications from 'expo-notifications'
import { Subscription } from '@unimodules/core'
import { registerForPushNotificationsAsync } from '../utils/notifications'

export default function useNotifications() {
  const notificationListener = useRef<Subscription>()
  const responseListener = useRef<Subscription>()

  useEffect(() => {
    notificationListener.current = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log(notification)
      }
    )

    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response)
      }
    )

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current as Subscription
      )
      Notifications.removeNotificationSubscription(
        responseListener.current as Subscription
      )
    }
  }, [])

  return { registerForPushNotificationsAsync }
}
