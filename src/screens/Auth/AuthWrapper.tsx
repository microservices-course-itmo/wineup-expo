import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import styled from 'styled-components/native'
import SignUpScreen from './SignUpScreen'
import ROUTES from '../../routes'
import SignInScreen from './SignInScreen'
import SignInConfirm from './SignInConfirm'
import AgeConfirm from './AgeConfirm'
import AgeDenied from './AgeDenied'
import authBackground from '../../../assets/authBackground.png'
import authBackgroundLogo from '../../../assets/authBackgroundLogo.png'

const Stack = createStackNavigator()

const AuthWrapper: React.FC = () => (
  <StyledImageBackground source={authBackground} resizeMode='cover'>
    <StyledLogo source={authBackgroundLogo} />
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
  </StyledImageBackground>
)

const StyledImageBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`
const StyledLogo = styled.Image`
  position: absolute;
  top: 0px;
  right: 20px;
`

export default AuthWrapper
