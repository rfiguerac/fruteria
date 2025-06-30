import { Button, Card, Col, Row } from "react-bootstrap";
import type { ShoppingCart } from "../page/Fruteria";

interface Props {
  product: ShoppingCart;
  handleDeleteProduct: (prod: ShoppingCart) => void;
}

export const Ticket = ({ product, handleDeleteProduct }: Props) => {
  return (
    <Card style={{ width: 300 }} className="mt-2">
      <Card.Body >
        <Card.Title>{product.id}</Card.Title>
          <Row>
            <Col className="col-lg-6">
            <p>{product.name}</p>
            u {product.cantidad} X {product.precio.toFixed(2)} = {product.cantidad * product.precio}
            </Col>

            <Col>
              <Button
                variant="warning"
                onClick={() => handleDeleteProduct(product)}>
                quitar
              </Button>
            </Col>
          </Row>
      </Card.Body>
    </Card>
  );
};
