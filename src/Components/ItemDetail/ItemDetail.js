import { Card } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";


const ItemDetail = ({dato}) => {

  const [ cart, setCart ] = useState(false);

  const onAdd = (cantidad) =>{
    setCart(true);
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
                      <p>{dato.precio}</p>
                        {
                          cart 
                          ? <Link to="/carrito">Finalizar Compra</Link>
                          :  <ItemCount initial={1} stock={10} onAdd={onAdd} />
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