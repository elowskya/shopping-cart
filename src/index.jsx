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
  const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await fetch(url);
          const json = await res.json();

          setData(json);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      }
      fetchData()
    }, [url]); 
    console.log(data);
    return { loading, error, data };
  }; 

  const homeURL = 'http://localhost:1337/products';
  useFetch(homeURL);
  
    const [items, setItems] = React.useState([{}]);
    const [cart, setCart] = React.useState([{}]);
    const [total, setTotal] = React.useState(0);

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
            <ul style={ myStyle }>
            {items.map((item) => (
                  <li key={item}>
                  <Button variant="primary" size="large">
                  {item.name}:{item.cost}
                  </Button>
                  <input name={item.name} type="submit"></input>
                  </li>
            )
              )}
            </ul>
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
