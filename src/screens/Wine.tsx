import React from 'react'
import { useCache } from 'rest-hooks'
import { useRoute } from '@react-navigation/native'
import styled from 'styled-components/native'
import PositionResource from '../resources/position'
import WineCard from '../molecules/WineCard'
import WineDescription from '../organisms/WineDescription'

function WineScreen() {
  const {
    params: { winePositionId },
  } = useRoute()
  const position = useCache(PositionResource.detailShape(), { winePositionId })

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <WineCard position={position} full />
        <StyledWineDescription />
      </Container>
    </ScrollView>
  )
}

export default WineScreen

const ScrollView = styled.ScrollView`
  background-color: #fff;
`

const Container = styled.View`
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
`
const StyledWineDescription = styled(WineDescription)`
  margin-top: 70px;
`
