import React from 'react'
import styled from 'styled-components/native'
import ContentLoader, { Circle, Rect } from 'react-content-loader/native'

export default function ProfilePlaceholder() {
  return (
    <Container>
      <Background />
      <ContentLoader
        speed={1}
        width='100%'
        height='100%'
        viewBox='0 0 500 900'
        backgroundColor='#969696'
        foregroundColor='#931332'
      >
        <Circle cx={250} cy={140} r={100} />
        <Rect x={50} y={450} rx={5} ry={5} width={400} height={57} />
        <Rect x={50} y={570} rx={5} ry={5} width={400} height={57} />
        <Rect x={100} y={750} rx={5} ry={5} width={300} height={70} />
      </ContentLoader>
    </Container>
  )
}

const Container = styled.View`
  height: 100%;
  width: 100%;
`

const Background = styled.View`
  position: absolute;
  top: 100px;
  left: 5%;
  height: 100%;
  width: 90%;
  background-color: white;
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
`
