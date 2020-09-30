import React, { useEffect, useState } from 'react'

export interface Wine {
  name: string
  description: string
  volume: number
  price?: number
}

const WineExample = {
  name: 'Canti Merlot',
  description: 'Австралия, Красное, сухое',
  volume: 0.75,
}

const getWine = async (): Promise<Wine> => {
  return new Promise<Wine>((resolve) => {
    resolve({
      name: WineExample.name,
      description: WineExample.description,
      volume: WineExample.volume,
    })
  })
}

const WineTitle: React.FC<Wine> = () => {
  const [wine, setWine] = useState<Wine>()
  useEffect(() => {
    getWine().then((res) => {
      setWine(res)
    })
  })
  return (
    <div>
      <h3 style={{ margin: 0 }}>{wine?.name}</h3>
      <div>{wine?.description}</div>
      <div>{wine?.volume}</div>
    </div>
  )
}
export default WineTitle
