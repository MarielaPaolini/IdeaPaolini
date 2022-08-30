import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';

const onAdd = (cantidad) =>{
  console.log(`Compraste ${cantidad} unidades`);
}

function App() {
  return (
    <div className="App">
     <NavBar />
     <div className='itemListContainer'>
        <h3><ItemListContainer greeting='Bienvenidos al Museo del Vino Mendoza'/></h3>
     </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <ItemCount initial={1} stock={10} onAdd={onAdd}/>
      </header>
    </div>
  );
}

export default App;
