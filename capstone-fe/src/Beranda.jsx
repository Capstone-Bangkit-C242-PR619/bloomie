import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Image, Card, Form, Button, CardText, CardTitle } 
    from 'react-bootstrap';

import Carousel from 'react-bootstrap/Carousel';


function Beranda() {
  const navigate = useNavigate()
  const handleClickProfile = () => {
      navigate('/profile')
    }
  return (
    <Container style={{background: "#FF9CB1", height:'100vh'}}>
        <Row className="mx-auto">
        <Col>
            <Card style={{marginTop:"2em"}}>
      <Card.Body>
      <Container>
      <Row className='mt-2'>
        <Col xs={3}><Image src="verif.png" rounded /></Col>
        <Col xs={5}>
        <p>BangkitBeyond</p>
        <p>2 Tahun 10 Bulan</p>
        </Col>
        <Col>
          <Link to={'/question'}>
            <Button style={{background: "#FF5276", width:'5.5em'}}>Tanya Bloomie</Button>
          </Link>
        </Col>
      </Row>
    </Container>      
    </Card.Body>
    </Card>
      </Col>  
        </Row> 

        <Row className="my-auto">
            <Col style={{background:'#ffffff', marginTop:'2em'}}>
            <Container style={{width:'100%'}}>
              <Row>
                <Col>
                <Card style={{marginTop:"2em", width:'100%'}}>
      <Card.Body>
        <Row style={{textAlign:"center"}}>
        <Col>
              <Image src="verif.png" rounded />
            </Col>
            <CardText>Luar biasa! Status Gizi si Kecil Sangat Baik. Pertahankan ya!</CardText>
        </Row>
        <Row style={{borderBottom:'1px solid black', padding:'0.5em'}}>
          <Col>Nama</Col>
          <Col style={{textAlign:'right'}}>BangkitBeyond</Col>
        </Row>
        <Row style={{borderBottom:'1px solid black', padding:'0.5em'}}>
          <Col>Umur (Bulan)</Col>
          <Col style={{textAlign:'right'}}>1</Col>
        </Row>
        <Row style={{borderBottom:'1px solid black', padding:'0.5em'}}>
          <Col>Tinggi Badan(Cm)</Col>
          <Col style={{textAlign:'right'}}>61</Col>
        </Row>
        <Row style={{borderBottom:'1px solid black', padding:'0.5em'}}>
          <Col>Berat Badan(Kg)</Col>
          <Col style={{textAlign:'right'}}>16</Col>
        </Row>
        <Row style={{borderBottom:'1px solid black', padding:'0.5em'}}>
          <Col>Jenis Kelamin</Col>
          <Col style={{textAlign:'right'}}>Laki-laki</Col>
        </Row>
        <Row>
          <Col>
          <Link to={'/baby'}>
            <Button className='mt-4' style={{background: "#FF5276", width: '100%'}}>Update Status</Button>
          </Link>
          </Col>
        </Row>
          </Card.Body>
          </Card>
          </Col>
        </Row>

        <Row style={{marginTop:"2em"}}>
          <Col>
          <h5>Informasi Untukmu</h5>
          <Link to={'/article'}>
          <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'15em'}}
          src="art.png"
        />
        <Carousel.Caption>
          <p>Bermanfaat untuk Anak, Orangtua Bisa Bacakan Dongeng sejak Masa Kehamilan</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'15em'}}
          src="art.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>Bermanfaat untuk Anak, Orangtua Bisa Bacakan Dongeng sejak Masa Kehamilan</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'15em'}}
          src="art.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>
          Bermanfaat untuk Anak, Orangtua Bisa Bacakan Dongeng sejak Masa Kehamilan
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </Link>
          </Col>
        </Row>

        <Row>
          <Col>
          <Carousel style={{marginTop:"2em"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'15em'}}
          src="art.png"
        />
        <Carousel.Caption>
          <p>Bermanfaat untuk Anak, Orangtua Bisa Bacakan Dongeng sejak Masa Kehamilan</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'15em'}}
          src="art.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>Bermanfaat untuk Anak, Orangtua Bisa Bacakan Dongeng sejak Masa Kehamilan</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'15em'}}
          src="art.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>
          Bermanfaat untuk Anak, Orangtua Bisa Bacakan Dongeng sejak Masa Kehamilan
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </Col>
        </Row>

        <Row>
          <Col>
          <Carousel style={{marginTop:"2em"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'15em'}}
          src="art.png"
        />
        <Carousel.Caption>
          <p>Bermanfaat untuk Anak, Orangtua Bisa Bacakan Dongeng sejak Masa Kehamilan</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'15em'}}
          src="art.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>Bermanfaat untuk Anak, Orangtua Bisa Bacakan Dongeng sejak Masa Kehamilan</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'15em'}}
          src="art.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>
          Bermanfaat untuk Anak, Orangtua Bisa Bacakan Dongeng sejak Masa Kehamilan
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </Col>
        </Row>

        <Row style={{
          textAlign:'center',
          position:'fixed',
          bottom:'0',
          background:'#ffffff',
          zIndex: '1',
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

export default Beranda;
