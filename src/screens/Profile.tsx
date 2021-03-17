import React, { Suspense } from 'react'
import { useAuthContext } from './Auth/AuthContext'
import AuthorizedProfile from './AuthorizedProfile'
import UnauthorizedProfile from './UnauthorizedProfile'
import ProfilePlaceholder from '../molecules/ProfilePlaceholder'

const Profile = () => {
  const { accessToken } = useAuthContext()

  return (
    <Suspense fallback={<ProfilePlaceholder />}>
      {accessToken ? <AuthorizedProfile /> : <UnauthorizedProfile />}
    </Suspense>
  )
}

export default Profile
