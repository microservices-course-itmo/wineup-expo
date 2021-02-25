import React from 'react'
import { ImageBackground, StyleSheet, Image } from 'react-native'
import { enableScreens } from 'react-native-screens'
import { createStackNavigator } from '@react-navigation/stack'
import SignUpScreen from './SignUpScreen'
import ROUTES from '../../routes'
import SignInScreen from './SignInScreen'
import SignInConfirm from './SignInConfirm'
import AgeConfirm from './AgeConfirm'
import AgeDenied from './AgeDenied'
import authBackground from '../../../assets/authBackground.png'
import authBackgroundLogo from '../../../assets/authBackgroundLogo.png'

enableScreens()
const Stack = createStackNavigator()

const AuthWrapper: React.FC = () => {
  return (
    <ImageBackground
      source={authBackground}
      resizeMode='cover'
      style={styles.container}
    >
      <Image style={styles.logo} source={authBackgroundLogo} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' },
          animationEnabled: false,
        }}
      >
        <Stack.Screen name={ROUTES.CONFIRM_AGE} component={AgeConfirm} />
        <Stack.Screen name={ROUTES.AGE_DENIED} component={AgeDenied} />
        <Stack.Screen name={ROUTES.SIGN_IN} component={SignInScreen} />
        <Stack.Screen name={ROUTES.SIGN_IN_CONFIRM} component={SignInConfirm} />
        <Stack.Screen name={ROUTES.SIGN_UP} component={SignUpScreen} />
      </Stack.Navigator>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  logo: {
    position: 'absolute',
    top: 0,
    right: 20,
  },
})

export default AuthWrapper
