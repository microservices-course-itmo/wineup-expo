import React from 'react'
import styled from 'styled-components/native'
import shop from './shop.png'
import wines from './wines.png'

function AboutUsInfo() {
  return (
    <Wrapper>
      <Title>Немного о нашем приложении</Title>
      <Image source={shop} />
      <ShopText>Более 5000 магазинов в Москве и Санкт-Петербурге</ShopText>
      <Image source={wines} />
      <WinesText>Более 40000 вин в нашем каталоге</WinesText>
      <Image source={shop} />
      <UsersText>512 пользователей, которые расскажут больше о вине</UsersText>
    </Wrapper>
  )
}

export default AboutUsInfo

const Wrapper = styled.View`
  padding: 0 15px;
`
const Title = styled.Text`
  font-size: 25px;
  text-align: center;
  margin-bottom: 31px;
`
const ShopText = styled.Text`
  font-family: Roboto_300Light;
  font-size: 16px;
  text-align: center;
  width: 230px;
  margin: auto auto 44px 64px;
  line-height: 24px;
`
const Image = styled.Image`
  margin-left: auto;
  margin-right: auto;
`

const WinesText = styled.Text`
  font-family: Roboto_300Light;
  font-size: 16px;
  text-align: center;
  margin: auto 105px 44px 105px;
  line-height: 24px;
`
const UsersText = styled.Text`
  font-family: Roboto_300Light;
  font-size: 16px;
  text-align: center;
  margin: auto auto 44px 47px;
  width: 265px;
  line-height: 24px;
`
