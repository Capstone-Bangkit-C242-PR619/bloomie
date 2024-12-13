import React from 'react';
import './App.css';

import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Image, Card, Form, Button, CardText, CardTitle } 
    from 'react-bootstrap';

    import Carousel from 'react-bootstrap/Carousel';

function Artikel() {
  const navigate = useNavigate()
  return (
    <Container>
        <Row className="my-auto">
            <Col>
            <Container style={{width:'100%'}}>
              <Row>
                <Col>
                
          </Col>
        </Row>

        <Row style={{marginTop:"2em"}}>
          <Col>
          <h4>Artikel Populer</h4>
          <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'13em'}}
          src="art.png"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'13em'}}
          src="art.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'13em'}}
          src="art.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <h6>Bermanfaat untuk Anak, Orangtua Bisa Bacakan Dongeng sejak Masa Kehamilan</h6>
          </Col>
        </Row>

        <Row style={{marginTop:"2em"}}>
          <h5>Artikel Terbaru</h5>
          <Col xs={9}>
          Mendidik Anak di Era Digital dengan Melalui Digital Parenting
          </Col>
          <Col xs={2}>
          <Image src="sub.png" rounded />
          </Col>
        </Row>

        <Row style={{marginTop:"2em"}}>
          <Col xs={9}>
          Mendidik Anak di Era Digital dengan Melalui Digital Parenting
          </Col>
          <Col xs={2}>
          <Image src="sub.png" rounded />
          </Col>
        </Row>

        <Row style={{marginTop:"2em"}}>
          <Col xs={9}>
          Mendidik Anak di Era Digital dengan Melalui Digital Parenting
          </Col>
          <Col xs={2}>
          <Image src="sub.png" rounded />
          </Col>
        </Row>

        <Row style={{marginTop:"2em"}}>
          <Col xs={9}>
          Mendidik Anak di Era Digital dengan Melalui Digital Parenting
          </Col>
          <Col xs={2}>
          <Image src="sub.png" rounded />
          </Col>
        </Row>

        <Row style={{marginTop:"2em"}}>
          <Col xs={9}>
          Mendidik Anak di Era Digital dengan Melalui Digital Parenting
          </Col>
          <Col xs={2}>
          <Image src="sub.png" rounded />
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
    </Col>  
    </Row>
    </Container>
  );
}

export default Artikel;
