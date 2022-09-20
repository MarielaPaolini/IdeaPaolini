
import React, { useContext } from 'react';
import { CartContext } from './Context/CartContext';


const Cart = () => {

  const {productCartList, removeItem, clear} = useContext(CartContext);


  return (
    <div>
    <h2>MI CARRITO</h2>
    <div>
      {productCartList.map(producto =>(
        <>
        <p>{producto.vino} - {producto.cantidad}</p>
        <button onClick={() => removeItem(producto.id)}>Eliminar del Carrito</button>
        </>
      ))}
      <button onClick={clear}>Vaciar Carrito</button>
    </div>
    
    </div>
  )
}

export default Cart;