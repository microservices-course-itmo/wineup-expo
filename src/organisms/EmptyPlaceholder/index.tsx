import React from 'react'
import styled from 'styled-components/native'
import PrimaryButton from '../../atoms/PrimaryButton'

export interface EmpptyPlaceholderProps {
  place?: string
  handlePress?: () => void
}

function EmptyPlaceholder({
  place = 'каталог',
  handlePress,
}: EmpptyPlaceholderProps) {
  return (
    <Container>
      <Title>Тут пока пусто</Title>
      <Subtitle>Наш {place} поможет Вам что-нибудь найти...</Subtitle>
      <PrimaryButton onPress={handlePress}>
        <TextBtn>Перейти в {place}</TextBtn>
      </PrimaryButton>
    </Container>
  )
}

const Container = styled.View`
  margin: 0 auto;
  width: 250px;
  flex: 1;
  justify-content: center;
`

const Title = styled.Text`
  font-size: 22px;
  text-align: center;
`

const Subtitle = styled.Text`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
  margin: 10px 0 20px;
  text-align: center;
`

const TextBtn = styled.Text`
  color: white;
`

export default EmptyPlaceholder
