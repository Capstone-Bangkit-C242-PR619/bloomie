import React from 'react';
import './App.css';

import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Image, Card, Form, Button, CardText, CardTitle } 
    from 'react-bootstrap';


function Selesai() {
  const navigate = useNavigate()
  return (
    <Container style={{marginTop: '20em'}}>
        <Row className="mx-auto" style={{textAlign:'center'}}>
            <Col>
                <Image src="berhasil.png" rounded />
            </Col>
        </Row>
        <CardTitle className='m-3' style={{color:"#FF5276", textAlign: 'Center'}}>Semua siap! Mari kita mulai 
        petualangan baru bersama Bloomie</CardTitle>    
        <Button onClick={() => navigate('/home')} className='mt-2' style={{background: "#FF5276", width: '100%'}}>Selanjutnya</Button>
        <Button onClick={() => navigate('/baby')} className='mt-2' variant='dark' style={{background: "#FFFFFF", color:"#000000", width: '100%'}}>Kembali</Button>
      
        
    </Container>
  );
}

export default Selesai;
