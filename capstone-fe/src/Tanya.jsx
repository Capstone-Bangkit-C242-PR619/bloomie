import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Image, Card, Form, Button, CardText, CardTitle } 
    from 'react-bootstrap';


function Tanya() {
  return (
    <Container style={{marginTop: '20em'}}>
        <Row className="mx-auto" style={{textAlign:'center'}}>
            <Col>
                <Image src="tanya.png" rounded />
            </Col>
        </Row>
        <h1 className='m-3' style={{color:"#FF5276", textAlign: 'Center'}}>Tanya Bloomie</h1>

        <Row>
          <Col>
          <p>“Apa saja indikator gizi pada anak dan tunjukkan data anak-ku”</p>
          </Col>
          <Col>
          <p>“Apa saja indikator gizi pada anak dan tunjukkan data anak-ku”</p>
          </Col>
        </Row>

        <Row style={{position:'fixed', bottom:'0', marginBottom:'2em'}}>
        <Col >
        <Form style={{display: 'inline-flex'}}>
        <Form.Group>
        <Form.Control type="text" style={{width: '21em'}} placeholder="Masukkan Text" />
      </Form.Group>
      <Form.Group>
        <Button variant='transparent' style={{height: '3em'}}><Image style={{ marginTop: '-0.7em'}} src='send.png' roundedCircle/></Button>
      </Form.Group>
          </Form>
          </Col>
        </Row>    
        
        
      
        
    </Container>
  );
}

export default Tanya;
