import React from 'react'
import { storiesOf } from '@storybook/react-native'
import FavouritesPlaceholder from './index'
import MockedNavigator from '../../tests/__mocks__/MockedNavigator'

storiesOf('FavouritesPlaceholder', module).add('Default', () => (
  <MockedNavigator component={FavouritesPlaceholder} params={{}} />
))
