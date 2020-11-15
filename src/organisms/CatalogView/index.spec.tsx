import React, { Suspense } from 'react'
import { render } from '@testing-library/react-native'
import { MockProvider } from '@rest-hooks/test'
import CatalogView from './index'
import { fixtures } from '../../tests/__mocks__/fixtures'

describe('CatalogView', () => {
  const renderComponent = () =>
    render(
      <Suspense fallback='Loading'>
        <MockProvider results={fixtures}>
          <CatalogView />
        </MockProvider>
      </Suspense>
    )

  it('should render', () => {
    renderComponent()
  })
})
