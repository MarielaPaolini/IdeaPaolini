import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const ItemDetail = ({dato}) => {
    return (
      <Row xs={1} md={1} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
            <Col>
            <Card>
            <Card.Img className="imagenCard" variant="top" src={dato.imagen} />
            <Card.Body>
                  <Card.Title><h2>{dato.vino}</h2></Card.Title>
                  <Card.Text>
                      <h3>{dato.bodega}</h3>
                      <p>{dato.varietal}</p>
                      <p>{dato.precio}</p>
                  </Card.Text> 
            <Button variant="secondary">Ver Producto</Button>
            </Card.Body>
            </Card>
            </Col>
          ))}
      </Row>
  );
}

export default ItemDetail;