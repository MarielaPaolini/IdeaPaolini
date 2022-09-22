
import React, { useContext } from 'react';
import { CartContext } from './Context/CartContext';
import { Link } from 'react-router-dom'; 


const Cart = () => {

const {productCartList, removeItem, clear, getTotalPrice} = useContext(CartContext);

  return (
    <div>
      {
        productCartList.length > 0 ?
        <div>
          {productCartList.map(producto =>(
            <>
            <p>{producto.vino}</p>
            <p>Cantidad: {producto.cantidad}</p>
            <p>Precio por Unidad: ${producto.precio}</p>
            <p>Subtotal: ${producto.cantidadPrecio} </p>
            <button onClick={() => removeItem(producto.id)}>Eliminar del Carrito</button>
            </>
      ))} 

            <button onClick={clear}>Vaciar Carrito</button>
            <p>Monto Total: ${getTotalPrice()}</p> 
        </div>
   
          :
          <>
          <p>El Carrito está vacío</p>
          <Link to="/">
            <p>Agregar Producto</p>
          </Link>
          </>

  }
    </div>
  );
} 


export default Cart;