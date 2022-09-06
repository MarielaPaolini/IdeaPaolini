import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Item = ({id, varietal, bodega, vino, precio, imagen, stock}) => {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 2 }).map((_, idx) => (
          <Col>
          <Card>
          <Card.Img variant="top" src={imagen} />
          <Card.Body>
                <Card.Title><h2>{vino}</h2></Card.Title>
                <Card.Text>
                    <h3>{bodega}</h3>
                    <p>{varietal}</p>
                    <p>{precio}</p>
                </Card.Text> 
          <Button variant="secondary">Ver Producto</Button>
          </Card.Body>
          </Card>
          </Col>
        ))}
    </Row>
  );
}

export default Item;