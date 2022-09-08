import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';
import Container from 'react-bootstrap/Container';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

const onAdd = (cantidad) =>{
  console.log(`Compraste ${cantidad} unidades`);
}

function App() {
  return (
    <Container fluid>
    <div className="App">
     <NavBar />
     {/* <div>
        <h3><ItemListContainer greeting='Bienvenidos al Museo del Vino Mendoza'/></h3>
     </div> */}
     <div>
        <ItemDetailContainer />
     </div>
      <header className="App-header">
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
      </header>
    </div>
    </Container>
  );
}

export default App;
