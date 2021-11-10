import React, { Fragment, useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Card, Accordion, Button, Container, Row, Col, Image, Input } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

  const myStyle = {
    textAlign: 'center',
    padding: '3%',
    listStyleType: 'none'
  };

  const Products = (props) => {
  //=========Display Products=============
    const [data, setData] = useState([]);
  //   const [error, setError] = useState(null);
  //   const [loading, setLoading] = useState(true);

const getProductsDB = {
  method: 'get',
  url: 'http://localhost:1337/products',
  headers: { }
};

useEffect(() => {
  getRoute();
}, [],
);



  async function getRoute() {
    try {
      const response = await axios(getProductsDB);
        setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  console.log(data);

  
  const listItems = data.map((product) => 
  <Card key={product.id}>
  Add Image for
  {product.name} : $ {product.cost}
  <Button onClick={()=>addToCart(product.id)}>
  Add to cart
  </Button>
  </Card>
  );

  function addToCart(moveToCartProductId) {
    alert(`clicked ${moveToCartProductId}`);
  }

  return (
      <Container>
        <Row>
          <Col>
            <h1 style={ myStyle }>Online Grocery Center</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Product List</h1>
            <ul>{listItems}</ul>
          </Col>
          <Col>
            <h1>Cart Contents</h1>
            <Accordion>List out the cart here</Accordion>
          </Col>
        </Row>
      </Container>
    );
  };
  // ========================================
  ReactDOM.render(<Products />, document.getElementById("root"));  
