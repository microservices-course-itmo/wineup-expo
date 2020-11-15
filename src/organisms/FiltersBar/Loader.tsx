import React from 'react'
import ContentLoader, { Rect } from 'react-content-loader/native'

function FiltersBarLoader() {
  return (
    <ContentLoader
      speed={1}
      width={400}
      height={56}
      viewBox='0 0 400 56'
      backgroundColor='#f3f3f3'
      foregroundColor='#d31717'
    >
      <Rect x='0' y='0' rx='0' ry='0' width='400' height='56' />
    </ContentLoader>
  )
}

export default FiltersBarLoader
