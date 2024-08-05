import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CardContext } from '../../context/CardContext'

export const CartWidget = () => {

    const { cantidadCarrito} = useContext(CardContext);

  return (
    <>
        <Link to={"/carrito"}>Carrito
        <span className='numero'>{cantidadCarrito()}</span></Link>
    </>
  )
}
