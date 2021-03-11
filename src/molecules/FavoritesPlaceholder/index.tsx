import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import image from '../../../assets/arrow.png'
import PrimaryButton from '../../atoms/PrimaryButton'

function FavouritesPlaceholder() {
  const navigation = useNavigation()

  const navigate = () => {
    navigation.navigate('Каталог')
  }

  return (
    <Container>
      <Heading>Тут пока пусто</Heading>
      <DescriptionBlock>
        <Description>Наш каталог поможет Вам</Description>
        <Description>что-нибудь найти..</Description>
      </DescriptionBlock>
      <Arrow source={image} />
      <Button onPress={navigate}>
        <ButtonLabel>Перейти в каталог</ButtonLabel>
      </Button>
    </Container>
  )
}

const Container = styled.View`
  position: relative;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 20px 150px;
`

const Heading = styled.Text`
  font-size: 25px;
  font-family: PlayfairDisplay_400Regular;
  text-align: center;
  margin-bottom: 20px;
`
const DescriptionBlock = styled.View`
  margin-bottom: 50px;
`
const Description = styled.Text`
  font-family: Roboto_300Light;
  font-weight: 300;
  font-size: 20px;
  text-align: center;
  color: #707070;
`

const Button = styled(PrimaryButton)`
  width: 250px;
  height: 70px;
  padding: 20px;
`

const ButtonLabel = styled.Text`
  font-size: 18px;
  color: #ffffff;
`

const Arrow = styled.Image`
  position: absolute;
  height: 60px;
  width: 25px;
  right: 20px;
  top: 50%;
  margin-top: 25px;
`

export default FavouritesPlaceholder
