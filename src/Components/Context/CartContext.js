import React from 'react';
import { useState } from 'react';

export const CartContext = React.createContext();


export const CartProvider = ({children}) => {
    
const [productCartList, setProductCartList] = useState([]);


const isInCart = (productId) => {

const productExist = productCartList.some(item => item.id === productId);
    return productExist;
}

const addItem = (item, cantidad) => {
const newProduct = {
    ...item,
    cantidad 
}
            
     if(isInCart(item.id)){
        const productPos = productCartList.findIndex(product => product.id === item.id);
        const newArreglo = [...productCartList];
        newArreglo[productPos].cantidad = newArreglo[productPos].cantidad + cantidad;
        newArreglo[productPos].cantidadPrecio = newArreglo[productPos].cantidad * newArreglo[productPos].precio;
        setProductCartList(newArreglo); 
    } else {
        const newArreglo = [...productCartList];
        newProduct.cantidadPrecio = newProduct.cantidad * newProduct.precio;
        newArreglo.push(newProduct);
        setProductCartList(newArreglo);
    }
}

const removeItem = (itemId) => {
const newArreglo = productCartList.filter(product => product.id !== itemId);
    setProductCartList(newArreglo);
}

const clear = () => {
    setProductCartList([]);
}

const getTotalPrice = () => {
    const precioTotal = productCartList.reduce((acc, item) => acc + item.cantidadPrecio, 0);
    return precioTotal;
}

const getTotalProducts = () => {
    const totalProducts = productCartList.reduce((acc, item) => acc + item.cantidad, 0);
    return totalProducts;

}


    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem, clear, getTotalPrice, getTotalProducts}}>
            {children}
        </CartContext.Provider>
    )
}