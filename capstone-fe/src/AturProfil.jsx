import React from 'react';
import './App.css';

import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Image, Card, Form, Button, CardText, CardTitle } 
    from 'react-bootstrap';


function AturProfil() {
  const navigate = useNavigate()
  return (
    <Container style={{marginTop: '20em'}}>
        <Row className="mx-auto" style={{textAlign:'center'}}>
            <Col>
                <Image onClick={() => navigate('/foto')} src="face.png" rounded />
            </Col>
        </Row>
        <CardTitle className='m-3' style={{color:"#FF5276", textAlign: 'center'}}>Selanjutnya Atur Foto Profil Anda</CardTitle>    
        <Button className='mt-2' onClick={() => navigate('/takePhoto')} style={{background: "#FF5276", width: '100%'}}>Ambil Foto</Button>
        <Button className='mt-2 ' onClick={() => navigate('/regist')} variant='dark' style={{background: "#FFFFFF", color:"#000000", width: '100%'}}>Kembali</Button>
      
        
    </Container>
  );
}

export default AturProfil;
