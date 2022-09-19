import React, { useState, useContext } from 'react';
export const useCartContext = () => useContext(CartContext);

const CartContext = React.createContext([]);

const CartProvider = ({ children}) => {
    const [cart, setCart] = useState([]);

    console.log('carrito ', cart);

    // const addProduct = (item, nuevaCantidad) => {
    //     const newCart = cart.filter(prod => prod.id !== item.id);
    //     newCart.push({...item, cantidad: nuevaCantidad});
    //     setCart(newCart);
    // }

    const addProduct = (Item, nuevaCantidad) => {
        const {cantidad = 0} = cart.find(prod => prod.id === Item.id) || {};
        const newCart = cart.filter(prod => prod.id !== Item.id);
        setCart([...newCart, {...Item, cantidad: cantidad + nuevaCantidad}]);
    }

    const clearCart = () => setCart([]);

    const inCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));


  return (
    <CartContext.Provider value={{
        clearCart,
        inCart,
        removeProduct,
        addProduct,
    }}>
    {children}
    </CartContext.Provider>
  )
}

export default CartProvider;