import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { useResource } from 'rest-hooks'
import { action } from '@storybook/addon-actions'
import FilterSheet from './index'
import RegionResource from '../../resources/region'

storiesOf('FilterSheet', module)
  .add('Checkbox', () => {
    const regions: RegionResource[] = useResource(RegionResource.list(), {})

    return (
      <FilterSheet
        title='Страна'
        onApply={action('onApply')}
        filter='country'
        height={570}
      >
        {regions.map((region) => ({ label: region.country, value: region.id }))}
      </FilterSheet>
    )
  })
  .add('Checkbox with search', () => {
    const regions: RegionResource[] = useResource(RegionResource.list(), {})

    return (
      <FilterSheet
        title='Страна'
        onApply={action('onApply')}
        filter='country'
        height={570}
        withSearch
      >
        {regions.map((region) => ({ label: region.country, value: region.id }))}
      </FilterSheet>
    )
  })
  .add('Radio', () => {
    const regions: RegionResource[] = useResource(RegionResource.list(), {})

    return (
      <FilterSheet
        title='Страна'
        onApply={action('onApply')}
        filter='country'
        height={570}
        type='radio'
      >
        {regions.map((region) => ({ label: region.country, value: region.id }))}
      </FilterSheet>
    )
  })
  .add('Price', () => {
    return (
      <FilterSheet
        type='price'
        height={400}
        title='Цена'
        filter='price'
        onApply={action('onApply')}
      >
        {[
          [0, 1500],
          [1500, 3000],
          [3000, 5000],
          [5000, 10000],
        ]}
      </FilterSheet>
    )
  })
