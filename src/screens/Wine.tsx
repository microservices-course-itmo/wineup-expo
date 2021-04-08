import React, { Suspense } from 'react'
import { useCache } from 'rest-hooks'
import { useNavigation, useRoute } from '@react-navigation/native'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'
import WineCard from '../molecules/WineCard'
import RecommendationBlock from '../organisms/RecommendationBlock'
import CatalogResource from '../resources/catalog'
import WineCardLoader from '../molecules/WineCard/Loader'
import ErrorBoundary from '../ErrorBoundary'
import Error from './Error'

function WineScreen(): React.ReactNode {
  const {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    params: { winePositionId },
  } = useRoute()
  const position = useCache(CatalogResource.detail(), { winePositionId })
  const { goBack } = useNavigation()

  return (
    <ErrorBoundary fallBack={<Error errorCode={400} />}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <BackButton onPress={goBack}>
            <Ionicons name='ios-arrow-back' size={24} color='black' />
          </BackButton>
          {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
          <WineCard position={position!} full />
          <Suspense fallback={<WineCardLoader />}>
            <StyledRecommendationBlock id={position!.winePositionId} />
          </Suspense>
        </Container>
      </ScrollView>
    </ErrorBoundary>
  )
}

export default WineScreen

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 27px;
  left: 30px;
  z-index: 1;
`

const ScrollView = styled.ScrollView`
  background-color: #fff;
`

const Container = styled.View`
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
`

const StyledRecommendationBlock = styled(RecommendationBlock)`
  margin-top: 20px;
`
