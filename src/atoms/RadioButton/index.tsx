import React, { ReactElement } from 'react'
import styled from 'styled-components/native'

interface RadioButtonProps {
  checked?: boolean
}

const RadioButton = ({
  checked,
}: RadioButtonProps): ReactElement<RadioButtonProps> => {
  return <Container>{checked && <Circle />}</Container>
}

export default RadioButton

const Container = styled.View`
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  border: 1px #872424 solid;
`

const Circle = styled.View`
  width: 18px;
  height: 18px;
  border-radius: 7px;
  background: #872434;
`
