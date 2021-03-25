import React, { useState } from 'react'
import styled from 'styled-components/native'
import { useResource } from 'rest-hooks'

import image from '../../assets/profile-main.png'
import ProfileEdit from '../organisms/ProfileEdit'
import ProfileInfo from '../organisms/ProfileInfo'
import UserResource from '../resources/user'

const AuthorizedProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false)
  const user = useResource(UserResource.me(), {})

  const onEdit = () => {
    setIsEditing(true)
  }

  const onSave = () => {
    setIsEditing(false)
  }

  return (
    <Container>
      <MainImgBox>
        <Image source={image} />
      </MainImgBox>
      {isEditing ? (
        <ProfileEdit onSave={onSave} user={user} />
      ) : (
        <ProfileInfo user={user} onEdit={onEdit} />
      )}
    </Container>
  )
}

const Image = styled.Image`
  width: 60px;
  height: 68px;
`

const MainImgBox = styled.View`
  position: absolute;
  border: 10px solid #f4f4f4;
  left: 50%;
  top: -60px;
  transform: translateX(-60px);
  border-top-right-radius: 120px;
  border-top-left-radius: 120px;
  border-bottom-right-radius: 120px;
  border-bottom-left-radius: 120px;
  background-color: #fff;
  padding: 16px 20px;
`

const Container = styled.View`
  padding: 115px 0 60px;
  margin: 0 14px 0;
  background-color: white;
  position: relative;
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
  margin-top: auto;
`

export default AuthorizedProfile
