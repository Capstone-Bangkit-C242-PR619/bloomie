import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Image, Card, Form, Button, CardText, CardTitle } 
    from 'react-bootstrap';

    import Carousel from 'react-bootstrap/Carousel';

function Screen() {
  return (
    <Container style={{background:'#FF5276', height:'100vh'}}>
      <Row>
        <Col style={{textAlign:'center', marginTop:'40vh'}}>
        <img
        src='logo.png'/>
        </Col>
      </Row>
    </Container>
  );
}

export default Screen;
