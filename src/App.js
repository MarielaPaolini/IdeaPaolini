
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Container from 'react-bootstrap/Container';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import CartProvider from './Components/Context/CartContext';



function App() {
  return (
    <>
    
    <BrowserRouter>
    
    <Container>
    <CartProvider>
    <NavBar ClassName="App" />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos al Museo del Vino Mendoza"/>}/>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer />}/>
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />}/>
        <Route path='/carrito' element={<Cart />}/>
      </Routes>
      </CartProvider>
    </Container>
    </BrowserRouter>
    
    </>
  );
}

export default App;
