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
        console.log("item", item, "cantidad", cantidad)
        const newProduct = {
            ...item,
            cantidad 
        }
        console.log("newProduct", newProduct)
            
            if(isInCart(item.id)){
                const productPos = productCartList.findIndex(product => product.id === item.id);
                const newArreglo = [...productCartList];
                newArreglo[productPos].cantidad = newArreglo[productPos].cantidad + cantidad;
                setProductCartList(newArreglo); 
            } else {
                const newArreglo = [...productCartList];
                newArreglo.push(newProduct);
                setProductCartList(newArreglo);
            }
    }

    const removeItem = (itemId) => {
        console.log("itemId", itemId)
        const newArreglo = productCartList.filter(product => product.id !== itemId);
        setProductCartList(newArreglo);
    }

    const clear = () => {
        setProductCartList([]);
    }

     return(
        <CartContext.Provider value={{productCartList, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}