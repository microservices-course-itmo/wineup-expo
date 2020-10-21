import React, { useState } from 'react'
import { View, Switch, Text } from 'react-native'

import styles from './styles'

const UserTypeSwitcher: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((prev) => !prev)

  return (
    <View style={styles.container}>
      <Text>Common User</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#767577' }}
        thumbColor='#C23232'
        ios_backgroundColor='#3e3e3e'
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text>Business User</Text>
    </View>
  )
}

export default UserTypeSwitcher
