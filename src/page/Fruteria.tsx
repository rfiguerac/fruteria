






import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { products, type Product } from "../data/data";
import { Productos } from "../components/Productos";
import { Ticket } from "../components/Ticket";

export interface ShoppingCart{
  id: number;
  cantidad: number,
  name: string, 
  precio: number

}
export const Fruteria = () => {
  const [total, setTotal] = useState(0);


  const [shoppingCart, setShoppingCart] = useState<ShoppingCart[]>([]);


const handleDeleteProduct = (prod : ShoppingCart) =>{

    const newArray = shoppingCart.filter(producto => producto.id!= prod.id);
    setShoppingCart(newArray);
    setTotal((prev) => prev-(prod.precio*prod.cantidad));
    
}

const handleAddProduct = (prod: Product) => {
  const producto = products.find((item) => item.id === prod.id);
  if (!producto) return;

  setShoppingCart((prevCart) => {
    const productoExistente = prevCart.find((item) => item.id === prod.id);

    if (productoExistente) {
      return prevCart.map((item) =>
        item.id === prod.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
    } else {
      return [
        ...prevCart,
        {
          id: prod.id,
          cantidad: 1,
          name: prod.nom,
          precio: prod.preu,
        },
      ];
    }
  });
  setTotal((prev) => prev+prod.preu);
};    


  return (
    <Container>
      <Row className="">
        <Col>
          <h1>Fruteria</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          {products.map((item) => (
            <Productos
            key={item.id}
              product={item}
              handleAddProduct={() => handleAddProduct(item)}
            />
          ))}
        </Col>
        <Col>
          <Row>
            <Col>
            <Col>
          {shoppingCart.map((item) => (
            <Ticket
            key={item.id}
              product={item}
              handleDeleteProduct={() => handleDeleteProduct(item)}
            />
          ))}
        </Col>
            </Col>
          </Row>
          <Row>
            <Col>Total : {total.toFixed(2)} €</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
