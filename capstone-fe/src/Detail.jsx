import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Image, Card, Form, Button, CardText, CardTitle } 
    from 'react-bootstrap';

    import Carousel from 'react-bootstrap/Carousel';

function Detail() {
  return (
    <Container className='mx-auto' style={{background:'#EFEEEA', height:'100%'}}>
      <Row>
        <Col>
        <Row style={{
          position:'fixed',
          top:'0',
          background:'#ffffff',
          width:'100%',
          padding:'1em'}}>
            <Col xs={1}>
            <img src='back.png'/>
            </Col>
            <Col xs={4}>
            <h5 style={{color:'#FF5276'}}>Kembali</h5>
          </Col>
        </Row>
        
        <Container>
        <Row style={{marginTop:'5em'}}>
          <Col>
          <Container>
          <Row>
            <Col>
            <img className="d-block w-100"
          style={{height:'13em'}}
          src="bayi.png"/>
          </Col>
        </Row>
        
        <Row>
          <Col xs={1}>
          <img src='tgl.png'/>
          </Col>
          <Col xs={5}>29 Juli 2023</Col>
          <Col xs={1}>
          <img src='jam.png'/>
          </Col>
          <Col xs={3}>10 Menit</Col>
        </Row>

        <h3 className='mt-2'>Kenali Penyakit Pada Anak</h3>

        <Row style={{marginTop:'2em'}}>
        <Col xs={1}>
            <img src='people.png'/>
            </Col>
            <Col xs={10}>
            <p>dr. Bangkit Reynaldi, S.Kom., S.Ked, Sp.A</p>
          </Col>
        </Row>
        
        </Container>
        </Col>  
        </Row>

        <Row style={{marginTop:'2em'}}>
        <Col className='px-4'>
        <p style={{textAlign:'justify'}}>Pada usia batita, anak-anak rentan terhadap berbagai penyakit karena sistem kekebalan tubuh mereka masih dalam tahap perkembangan. Salah satu penyakit yang umum terjadi adalah infeksi saluran pernapasan atas (ISPA), termasuk pilek, flu, dan batuk. Infeksi ini sering kali disebabkan oleh virus seperti rhinovirus dan virus influenza, yang mudah menyebar di lingkungan tempat anak bermain dan berinteraksi dengan orang lain. Gejala ISPA biasanya meliputi hidung tersumbat, batuk, demam, dan kadang-kadang disertai dengan rewel atau kurang nafsu makan. Meski umumnya tidak serius, infeksi ini bisa membuat anak merasa tidak nyaman dan memerlukan perhatian khusus dari orang tua untuk memastikan mereka mendapatkan istirahat yang cukup dan cairan yang cukup.

Infeksi telinga tengah atau otitis media juga merupakan kondisi yang sering ditemui pada batita, terutama setelah mereka mengalami pilek atau infeksi saluran pernapasan. Anak yang mengalami otitis media mungkin menunjukkan gejala seperti demam, rewel, dan sering menarik-narik telinga mereka karena merasa tidak nyaman atau sakit. Penyakit ini terjadi ketika bakteri atau virus dari saluran pernapasan menyebar ke telinga tengah, menyebabkan peradangan dan penumpukan cairan. Meskipun kebanyakan kasus otitis media dapat sembuh dengan sendirinya, beberapa mungkin memerlukan antibiotik, terutama jika gejalanya parah atau berlangsung lama.

Diare dan gastroenteritis adalah masalah kesehatan lain yang sering dialami oleh anak batita. Kondisi ini biasanya disebabkan oleh infeksi virus seperti rotavirus atau infeksi bakteri yang menyerang saluran pencernaan. Gejala utama termasuk diare, muntah, demam, dan dehidrasi, yang dapat berbahaya jika tidak ditangani dengan tepat. Orang tua perlu memastikan anak mereka tetap terhidrasi dengan memberikan cairan yang cukup, dan dalam beberapa kasus, rehidrasi oral atau perawatan medis mungkin diperlukan untuk mencegah komplikasi lebih lanjut. Kebersihan yang baik, seperti mencuci tangan sebelum makan dan setelah menggunakan toilet, dapat membantu mencegah penyebaran infeksi ini.

Selain infeksi, anak batita juga rentan terhadap masalah kulit seperti ruam popok dan penyakit tangan, kaki, dan mulut. Ruam popok terjadi akibat iritasi dari kelembapan dan gesekan di area popok, sementara penyakit tangan, kaki, dan mulut disebabkan oleh virus coxsackie, yang menghasilkan luka di mulut dan ruam di tangan serta kaki. Kedua kondisi ini dapat menyebabkan ketidaknyamanan yang signifikan bagi anak, tetapi biasanya dapat diatasi dengan perawatan di rumah yang tepat. Penggunaan krim pelindung dan sering mengganti popok dapat mencegah ruam popok, sedangkan menjaga kebersihan dan menghindari kontak dengan anak-anak yang terinfeksi dapat membantu mencegah penyebaran penyakit tangan, kaki, dan mulut.
Menghadapi berbagai penyakit ini, penting bagi orang tua untuk selalu waspada dan memberikan perawatan yang tepat untuk memastikan kesehatan dan kenyamanan anak mereka.</p>
        </Col>
      </Row>
        </Container>


        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
