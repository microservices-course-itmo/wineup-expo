import React from 'react'
import styled from 'styled-components/native'

export default (Story) => (
  <Centered>
    <Story />
  </Centered>
)

const Centered = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: center;
`
