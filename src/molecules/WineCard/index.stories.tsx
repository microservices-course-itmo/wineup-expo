import React from 'react'
import { storiesOf } from '@storybook/react-native'
import CatalogResource from 'src/resources/catalog'
import WineCard from './index'

const testCatalog = new CatalogResource()

storiesOf('WineCard', module).add('Default', () => (
  <WineCard position={testCatalog} />
))
