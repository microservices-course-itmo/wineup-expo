import React from 'react'

export const defaultState = {
  country: {},
  price: {
    from: 0,
    to: 10000,
    discounts: false,
    indexButton: -1,
  },
  setCountry(country) {
    this.country = { ...country }
  },
  setPrice(price) {
    this.price = { ...this.price, ...price }
  },
}

export const Context = React.createContext(defaultState)
