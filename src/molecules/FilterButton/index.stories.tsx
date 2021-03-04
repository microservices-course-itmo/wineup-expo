import React from 'react'
import { storiesOf } from '@storybook/react-native'
import FilterButton from './index'

storiesOf('FilterButton', module).add('Default', () => {
  const renderFilterPage = (onApply = () => console.log('test')) => {
    onApply()

    return <div>qfqwfqw</div>
  }

  return <FilterButton renderFilterPage={renderFilterPage} />
})
