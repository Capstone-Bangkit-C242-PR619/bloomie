import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Image, Card, Form, Button, CardText } 
    from 'react-bootstrap';


function Regist() {
  return (
    <Container style={{marginTop: '5em'}}>
        <Row className="mx-auto" style={{width: '14rem'}}>
        </Row>    
        <Row className="mx-auto">
            <Col>
            <Card>
      <Card.Body>
        <Card.Title>Buat Akun</Card.Title>
        <Form>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Nama Lengkap" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Tanggal Lahir" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Jenis Kelamin" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Alamat" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="password" placeholder='Password' />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="password" placeholder='Konfirmasi Password' />
      </Form.Group>
    </Form>
    <Link to={'/setProfile'}>
      <Button className='mt-2' style={{background: "#FF5276", width: '100%'}}>Daftar</Button>
    </Link>
    <Link to={'/'}>
      <Button className='mt-2' variant='dark' style={{background: "#FFFFFF", color:"#000000", width: '100%'}}>Kembali</Button>
    </Link>
      </Card.Body>
    </Card>
            </Col>  
        </Row>    
    </Container>
  );
}

export default Regist;
