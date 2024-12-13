import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Image, Card, Form, Button, CardText, CardTitle } 
    from 'react-bootstrap';

import Carousel from 'react-bootstrap/Carousel';
import Login from './Login.jsx';
import Regist from './Regist.jsx';
import Beranda from './Beranda.jsx';
import IsiBayi from './IsiBayi.jsx';
import DataBayi from './DataBayi.jsx';
import Tanya from './Tanya.jsx';
import Artikel from './Artikel.jsx';
import DetailAkun from './DetailAkun.jsx';
import AmbilFoto from './AmbilFoto.jsx';
import AturProfil from './AturProfil.jsx';
import BerhasilAtur from './BerhasilAtur.jsx';
import Selesai from './Selesai.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Beranda />} />
        <Route path='/regist' element={<Regist />} />
        <Route path='/takePhoto' element={<AmbilFoto />} />
        <Route path='/setProfile' element={<AturProfil />} />
        <Route path='/success' element={<BerhasilAtur />} />
        <Route path='/confirmBaby' element={<IsiBayi />} />
        <Route path='/baby' element={<DataBayi />} />
        <Route path='/done' element={<Selesai />} />
        <Route path='/question' element={<Tanya />} />
        <Route path='/article' element={<Artikel />} />
        <Route path='/profile' element={<DetailAkun />} />
      </Routes>
    </>
  );
}

export default App;
