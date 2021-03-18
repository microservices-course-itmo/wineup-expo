import React from 'react'
import styled, { css } from 'styled-components/native'
import CatalogResource from 'src/resources/catalog'
import { useFetcher } from 'rest-hooks'
import Recommendation from '../../atoms/Recommendation'
import WineBottlePicture from '../../atoms/WineBottlePicture'
import Like from '../../atoms/Like'
import WineInfo from '../../atoms/WineInfo'
import FavoritesResource from '../../resources/favorites'

export interface WineCardProps {
  position: CatalogResource
  full?: boolean
}

function WineCard({ position, full }: WineCardProps) {
  const like = useFetcher(FavoritesResource.create())
  const unlike = useFetcher(FavoritesResource.delete())

  const onLikePress = (value: boolean) => {
    if (value) {
      like({ id: position.winePositionId }, undefined)
    } else {
      unlike({ id: position.winePositionId })
    }
  }

  return (
    <Container full={full}>
      <TopBar>
        <Recommendation ratioAdvice={45} />
        <Like onPress={onLikePress} />
      </TopBar>
      <WineBottlePicture position={position} />
      <WineInfo position={position} full={full} />
    </Container>
  )
}

export default WineCard

const Container = styled.View<{ full?: boolean }>`
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 30px;
  background-color: #fff;
  border-radius: 15px;
  ${({ full }) =>
    !full
      ? css`
          box-shadow: 0px 3px 4px rgba(178, 178, 178, 0.5);
          border: 1px solid rgba(178, 178, 178, 0.3);
        `
      : css`
          padding-top: 20px;
        `}
`

const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`
