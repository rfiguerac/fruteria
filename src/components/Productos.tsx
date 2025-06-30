import { Button, Card, Col, Row } from "react-bootstrap";
import type { Product } from "../data/data";

interface Props {
  product: Product;
  handleAddProduct: (id: number) => void;
}

export const Productos = ({ product, handleAddProduct }: Props) => {
  return (
    <Card style={{ width: 300 }} className="mt-2">
      <Card.Body >
        <Card.Title>{product.id}</Card.Title>
          <Row>
            <Col className="col-lg-6">
            <p>{product.nom}</p>
            
            </Col>
            <Col>
              <Button
                variant="success"
                onClick={() => handleAddProduct(product.id)}>
                Agregar
              </Button>
            </Col>
          </Row>
      </Card.Body>
    </Card>
  );
};
