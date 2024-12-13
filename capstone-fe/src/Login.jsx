import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Image, Card, Form, Button, CardText } 
    from 'react-bootstrap';


function Login() {
  return (
    <Container style={{marginTop: '10em'}}>
        <Row className="mx-auto" style={{width: '14rem'}}>
            <Col>
                <Image src="Frame.png" rounded />
            </Col>  
        </Row>    
        <Row className="mx-auto">
            <Col>
            <Card>
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Form>
      <Form.Group className="mb-3">
        <Form.Control type="email" placeholder="Email address" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="password" placeholder='Password' />
      </Form.Group>
    </Form>
    <Card.Link style={{display: 'block', textDecoration: 'none', color: 'black', textAlign: 'right'}} href="#">lupa password</Card.Link>
    <Link to={'/home'}>
      <Button className='mt-2' style={{background: "#FF5276", width: '100%'}}>Masuk</Button>
    </Link>
    <CardText className='mt-2'> Belum punya akun?</CardText>
    <Link to={'/regist'}>
      <Button className='mt-2' variant='dark' style={{background: "#FFFFFF", color:"#000000", width: '100%'}}>Daftar</Button>
    </Link>
      </Card.Body>
    </Card>
            </Col>  
        </Row>    
    </Container>
  );
}

export default Login;
