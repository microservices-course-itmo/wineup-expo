import React, { useState } from 'react'
import { Switch, Text } from 'react-native'
import styled from 'styled-components/native'

const UserTypeSwitcher: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((prev) => !prev)

  return (
    <StyledSwitcher>
      <Text>Common User</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#767577' }}
        thumbColor='#C23232'
        ios_backgroundColor='#3e3e3e'
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text>Business User</Text>
    </StyledSwitcher>
  )
}

const StyledSwitcher = styled.View`
  display: flex;
  align-items: center;
  justifycontent: space-between;
  flex-direction: row;
  position: absolute;
  top: 15%;
`

export default UserTypeSwitcher

