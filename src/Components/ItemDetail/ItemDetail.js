import { Card } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../Context/CartContext";


const ItemDetail = ({dato}) => {

const {addItem} = useContext(CartContext);
const [ count, setCount ] = useState(parseInt(0));


const onAdd = (cantidad) =>{
  setCount(cantidad);
  addItem(dato, cantidad)
}
  

return ( 
  <Link to={`/detalle/${dato.id}`}>
    <Row xs={1} md={1} className="g-4">
    {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
          <Card.Img variant="top" src={dato.imagen} />
          <Card.Body>
            <Card.Title><h2>{dato.vino}</h2></Card.Title>
            <Card.Text>
                <h3>{dato.bodega}</h3>
                <p>{dato.varietal}</p>
                <p>${dato.precio}</p>
               <ItemCount stock={10} initial={1} onAdd={onAdd} />               
                  {
                    count > 0 &&
                    <Link to="/carrito">
                        <button>Terminar Compra</button>
                    </Link>
                          
                  }
            </Card.Text> 
          </Card.Body>
          </Card>
        </Col>
      ))}
    </Row> 
  </Link>
  );
}

export default ItemDetail;