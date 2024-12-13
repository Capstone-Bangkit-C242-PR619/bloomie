import React from 'react';
import './App.css';

import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Image, Card, Form, Button, CardText, CardTitle } 
    from 'react-bootstrap';

    import Carousel from 'react-bootstrap/Carousel';
 
function DetailAkun() {
  const navigate = useNavigate()
  return (
    <Container style={{height:'100vh'}}>
      <Row>
        <Col style={{textAlign:'center', marginTop:'5em'}}>
        <img src='pp1.png'/>
        <h5>Rianti Kusuma</h5>
        </Col>
      </Row>
      
      <Row className='m-2'>
        <Col>
        <Container>
      <Row>
        <Col>
        <Button className='mt-4' variant="light" style={{width:'100%', height:'4em'}} >
      <Row>
        <Col xs={1}>
        <img src='akun.png'/>
        </Col>
        <Col xs={5}>
        Informasi Akun
        </Col>
        <Col xs={6} style={{textAlign:'right'}}>
        <img src='next.png'/>
        </Col>
      </Row>
        </Button>
        </Col>
      </Row>

      <Row>
        <Col>
        <Button className='mt-2' variant="light" style={{width:'100%', height:'4em'}} >
      <Row>
        <Col xs={1}>
        <img src='set.png'/>
        </Col>
        <Col xs={4}>
        Pengaturan
        </Col>
        <Col xs={7 } style={{textAlign:'right'}}>
        <img src='next.png'/>
        </Col>
      </Row>
        </Button>
        </Col>
      </Row>

      <Row>
        <Col>
        <Link to={'/'}>
        <Button className='mt-2' variant="light" style={{width:'100%', height:'4em'}} >
      <Row>
        <Col xs={1}>
        <img src='exit.png'/>
        </Col>
        <Col xs={3}>
        Keluar
        </Col>
      </Row>
        </Button>
          
        </Link>
        </Col>
      </Row>
        </Container>
        </Col>
      </Row>

      <Row style={{
        textAlign:'center',
        position:'fixed',
          bottom:'0',
          background:'#ffffff',
          width:'100%',
          paddingTop:'2em'}}>
          <Col>
          <Image onClick={() => navigate('/home')} src="home.png" rounded />
          <p>Beranda</p>
          </Col>
          <Col>
          <Image onClick={() => navigate('/article')} src="artikel.png" rounded />
          <p>Artikel</p>
          </Col>
          <Col>
          <Image onClick={() => navigate('/profile')} src="pp.png" rounded />
          <p>Profil</p>
          </Col>
        </Row>
    </Container>
  );
}

export default DetailAkun;
