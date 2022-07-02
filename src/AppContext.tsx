import React, { useContext } from 'react'
import CartContext from './CartContext'

export default function AppContext() {
    const {products} = useContext(CartContext);

  return (
    <ul>
        {products.map(products => products.name)}
    </ul>
  )
}
