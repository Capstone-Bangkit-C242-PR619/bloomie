import React from 'react';
import './App.css';

import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Image, Card, Form, Button, CardText } 
    from 'react-bootstrap';


function DataBayi() {
  const navigate = useNavigate()
  return (
    <Container style={{marginTop: '5em'}}>
        <Row className="mx-auto" style={{width: '14rem'}}>
        </Row>    
        <Row className="mx-auto">
            <Col>
            <Card>
      <Card.Body>
        <Card.Title>Isi Data Buah Hati</Card.Title>
        <Form>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Nama Lengkap Bayi" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Tanggal Lahir Bayi" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Jenis Kelamin Bayi" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Tinggi Badan (Cm)" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Berat Badan (Kg)" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Lingkar Lengan Tangan Atas (Cm)" />
      </Form.Group>
    </Form>
    <Link to={'/done'}>
      <Button className='mt-2' style={{background: "#FF5276", width: '100%'}}>Daftar</Button>
    </Link>
      <Button onClick={() => navigate(-1)} className='mt-2' variant='dark' style={{background: "#FFFFFF", color:"#000000", width: '100%'}}>Kembali</Button>
      </Card.Body>
    </Card>
            </Col>  
        </Row>    
    </Container>
  );
}

export default DataBayi;
