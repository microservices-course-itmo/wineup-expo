import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import ROUTES from '../../routes'
import styles from './styles'
import confirmButtonTick from '../../../assets/confirmButtonTick.png'
import welcomeHandShake from '../../../assets/handShake.png'
import confirmButtonCross from '../../../assets/confirmButtonCross.png'

export type TProps = StackScreenProps<any, typeof ROUTES.CONFIRM_AGE>

const AgeConfirm: React.FC<TProps> = ({ navigation }) => {
  const navigateToSignIn = (): void => {
    navigation.push(ROUTES.SIGN_IN)
  }

  const navigateToAgeDenied = (): void => {
    navigation.push(ROUTES.AGE_DENIED)
  }

  return (
    <View style={[styles.container, { marginBottom: 120 }]}>
      <Image source={welcomeHandShake} />
      <Text style={styles.welcomeMessage}> Добро пожаловать!</Text>
      <Text style={[styles.header, { fontSize: 22, marginTop: 36 }]}>
        Вам уже исполнилось 18 лет?
      </Text>
      <View style={{ flexDirection: 'row', marginTop: 47 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.buttonAgeConfirm}
          onPress={navigateToSignIn}
        >
          <Image source={confirmButtonTick} />
          <Text style={styles.buttonConfirmText}>Да</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.buttonAgeConfirm}
          onPress={navigateToAgeDenied}
        >
          <Image source={confirmButtonCross} />
          <Text style={styles.buttonDenyText}>Нет</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AgeConfirm
