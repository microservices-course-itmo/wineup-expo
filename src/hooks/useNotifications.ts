import { useEffect, useRef } from 'react'
import * as Notifications from 'expo-notifications'
import { Subscription } from '@unimodules/core'
import { useFetcher } from 'rest-hooks'
import { registerForPushNotificationsAsync } from '../utils/notifications'
import { useAuthContext } from '../screens/Auth/AuthContext'
import NotificationTokenResource from '../resources/notificationToken'

export default function useNotifications() {
  const notificationListener = useRef<Subscription>()
  const responseListener = useRef<Subscription>()
  const { accessToken } = useAuthContext()
  const addNotificationToken = useFetcher(NotificationTokenResource.add(), true)

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

  useEffect(() => {
    if (!accessToken) {
      return
    }

    const effect = async () => {
      const token = await registerForPushNotificationsAsync()

      if (!token) {
        return
      }

      try {
        await addNotificationToken({ token }, undefined)
      } catch (e) {
        console.log(e)
      }
    }

    effect()
  }, [accessToken])
}
