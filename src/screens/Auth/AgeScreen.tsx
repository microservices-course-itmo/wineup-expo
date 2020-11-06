import React, { ReactElement } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import ROUTES from '../../routes'

type AgeScreenNavigationProps = StackNavigationProp<any, 'AgeScreen'>

interface AgeScreenProps {
  navigation: AgeScreenNavigationProps
}

function AgeScreen({
  navigation,
}: AgeScreenProps): ReactElement<AgeScreenProps> {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16 }}>Добро пожаловать</Text>
      <Text style={{ marginTop: 36, marginBottom: 47 }}>
        Вам уже исполнилось 18?
      </Text>
      <View
        style={{ flexDirection: 'row', marginHorizontal: 30, marginTop: 20 }}
      >
        <TouchableOpacity
          style={styles.buttonConfirm}
          onPress={() => navigation.navigate(ROUTES.SIGN_IN)}
        >
          <Text style={styles.buttonConfirmText}>Да</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonConfirm}
          onPress={() => navigation.navigate(ROUTES.AGE_DENIED)}
        >
          <Text style={styles.buttonConfirmText}>Нет</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AgeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    padding: 20,
  },
  buttonConfirm: {
    width: 60,
    height: 40,
    backgroundColor: '#C23232',
    borderRadius: 2,
    flexDirection: 'row',
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonConfirmText: {},
})
