import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Header from './index'
import MockedNavigator from '../../tests/__mocks__/MockedNavigator'

storiesOf('Header', module).add('Default', () => (
  <MockedNavigator component={Header} params={{}} />
))
