import React, { Fragment, useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Card, Accordion, Button, Container, Row, Col, Image, Input } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// simulate getting products from DataBase which we already set up
const products = [
    { name: "Apples:", country: "Italy", cost: 3, instock: 10 },
    { name: "Oranges:", country: "Spain", cost: 4, instock: 3 },
    { name: "Beans:", country: "USA", cost: 2, instock: 5 },
    { name: "Cabbage:", country: "USA", cost: 1, instock: 8 },
  ];

  const myStyle = {
    textAlign: 'center',
    padding: '3%'
  };

  const Products = (props) => {
  //=========Display Products=============
  const homeURL = 'http://localhost:1337/products';

  const useFetch = (url, options) => {
    const [response, setResponse] = useState(null);
    useEffect(() => {
      const doFetch = async () => {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
      }
      doFetch();
    }, []); 
  };  

  const currItems = Object.entries(products).map(([id, product]) => {
     console.log(id, product);
     return id;
 });

 console.log(currItems);
  
    const [items, setItems] = React.useState(products);
    const [cart, setCart] = React.useState([]);
    const [total, setTotal] = React.useState(0);
      
      let list = items.map((item, index) => {
        const Cart = (props) => {
        
          return <Accordion defaultActiveKey="0">{list}</Accordion>;
        };
        return (
          <li key={index}>
          <Button variant="primary" size="large">
          {item.name}:{item.cost}
          </Button>
          <input name={item.name} type="submit"></input>
          </li>
          );
        });
        let cartList = cart.map((item, index) => {
      return (
        <Card key={index}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={1 + index}>
              {item.name}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse
            onClick={alert('() => deleteCartItem(index)')}
            eventKey={1 + index}
          >
            <Card.Body>
              $ {item.cost} from {item.country}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      );
    });

    //dofetch to get database of existing products
    useFetch(homeURL);
  
    return (
      <Container>
        <Row>
          <Col>
            <h1 style={myStyle}>Online Grocery Center</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Product List</h1>
            <ul style={{ listStyleType: "none" }}>
            <li> {list}</li>
            </ul>
          </Col>
          <Col>
            <h1>Cart Contents</h1>
            <Accordion>{cartList}</Accordion>
          </Col>
          <Col>
            <h1>CheckOut</h1>
            <Button>click checkout</Button>
          </Col>
        </Row>
        <Row>
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <button type="submit">ReStock Products</button>
          </form>
        </Row>
      </Container>
    );
  };
  // ========================================
  ReactDOM.render(<Products />, document.getElementById("root"));  
