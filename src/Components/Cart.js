
import React, { useContext, useState } from 'react';
import { CartContext } from './Context/CartContext';
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { db } from '../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';


const Cart = () => {

const {productCartList, removeItem, clear, getTotalPrice} = useContext(CartContext);
const [ idOrder, setIdOrder ] = useState(" ");

const sendOrder = (event) => {
event.preventDefault();
      const order = {
        buyer: {
          nombre: event.target[0].value,
          email: event.target[1].value, 
          telefono: event.target[2].value, 
        },
        items: productCartList,
        total: getTotalPrice(),
  }
  const queryRef = collection(db, "orders");
  addDoc(queryRef, order).then(response => {
  setIdOrder(response.id)
  clear();
});
}

return (
  <div>
  {idOrder && <p>Su orden fue creada con éxito. Número de órden: {idOrder}</p>}
     {
      productCartList.length > 0 ?
      <div>
      {productCartList.map(producto => (
        <>
        <p>{producto.vino}</p>
        <p>Cantidad: {producto.cantidad}</p>
        <p>Precio por Unidad: ${producto.precio}</p>
        <p>Subtotal: ${producto.cantidadPrecio} </p>
        <button onClick={() => removeItem(producto.id)}>Eliminar Producto</button>
        </>
      ))}
      <button onClick={clear}>Vaciar Carrito</button>
      <p>Monto Total: ${getTotalPrice()}</p> 
      <Form onSubmit={sendOrder}>
         <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="" />
         </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Email</Form.Label>
       <Form.Control type="email" placeholder="Enter email" />
         <Form.Text className="text-muted">
           Introduzca su correo electrónico.
         </Form.Text>
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Teléfono</Form.Label>
          <Form.Control type="text" placeholder="" />
          <Form.Text className="text-muted">
            Introduzca su número de contacto.
          </Form.Text>
         </Form.Group>
        <Button variant="primary" type="submit">
             Enviar
         </Button>
    </Form>
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