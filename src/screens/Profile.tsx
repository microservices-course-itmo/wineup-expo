import React, { Suspense } from 'react'
import { useAuthContext } from './Auth/AuthContext'
import AuthorizedProfile from './AuthorizedProfile'
import UnauthorizedProfile from './UnauthorizedProfile'
import { Text } from 'react-native'
const Profile = () => {
  const { accessToken } = useAuthContext()

  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      {accessToken ? <AuthorizedProfile /> : <UnauthorizedProfile />}
    </Suspense>
  )
}

export default Profile
