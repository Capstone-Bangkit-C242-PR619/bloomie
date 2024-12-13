import React from 'react';
import './App.css';

import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Image, Card, Form, Button, CardText, CardTitle, FormControl } 
    from 'react-bootstrap';

function AmbilFoto() {
  const navigate = useNavigate()
  const fileInput = React.useRef(null)
  const handleClickFile = (event) => {
    fileInput.current.click()
  }
  const handleChange = (event) => {
    navigate('/success')
  }
  return (
    <Container style={{marginTop: '10em'}}>
        <Row className="mx-auto" style={{textAlign:'center'}}>
            <Col>
                <Image src="Frame1.png"/>
            </Col>
        </Row>    
        <Button onClick={() => navigate('/success')} className='mt-2' style={{background: "#FF5276", width: '100%'}}>Ambil Foto</Button>
        <Button onClick={handleClickFile} className='mt-2' variant='dark' style={{background: "#FFFFFF", color:"#000000", width: '100%'}}>Pilih dari Galeri</Button> 
        <FormControl onChange={handleChange} accept='image/*' ref={fileInput}  type='file' hidden></FormControl>
    </Container>
  );
}

export default AmbilFoto;
