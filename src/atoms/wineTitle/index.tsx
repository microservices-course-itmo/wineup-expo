import React from 'react'

export interface IWine {
  name: string
  description: string
  volume: number
  price?: number
}

interface IWineResponse {
  status: number
  data: IWine
  errorText?: string
}

const wineExample = {
  name: 'Canti Merlot',
  description: 'Австралия, Красное, сухое',
  volume: 0.75,
}

export const getWine = (): Promise<IWineResponse> => {
  const promise = new Promise<IWineResponse>((resolve) => {
    resolve({
      status: 200,
      data: wineExample,
    })
  })

  return promise
}

const WineCard: React.FC<IWine> = () => {
  const [wine, setWine] = React.useState<IWine>()
  React.useEffect(() => {
    getWine()
      .then((res) => {
        setWine(res.data)
      })
      .catch((err) => {
        console.warn('error', err)
      })
  })
  return (
    <article>
      <h1 style={{ margin: 0 }}>{wine?.name}</h1>
      <div>{wine?.description}</div>
      <div>{wine?.volume}л</div>
    </article>
  )
}
export default WineCard
