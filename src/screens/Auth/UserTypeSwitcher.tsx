import React, { useState } from 'react'
import { View, Switch, StyleSheet, Text } from 'react-native'

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

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    top: '15%',
  },
})
