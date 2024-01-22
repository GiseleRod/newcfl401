import React, { Suspense, lazy }  from 'react';
import './App.css';
import { Container, Box } from '@mui/material';
import Navegacion from './components/Navegacion';
import { NavLink, Route, Routes, Router, Link, useLocation } from "react-router-dom";
//import Home from './Page/Home';
//import Contactos from './Page/Contacto';
//import Institucional from './Page/Institucional1';,
import Footer from './components/Footer1';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import ReactGA from 'react-ga';




const Home = lazy(() =>import ('./Page/Home'));
const Contactos = lazy(() =>import ('./Page/Contacto'));
const  Institucional= lazy(() =>import ('./Page/Institucional1'));
const  ImageUploader= lazy(() =>import ('./Page/ImageUploader'));

function App() {
 
  useEffect(()=>{
    ReactGA.initialize('394488770');
  ReactGA.pageview(window.location.pathname);
  })
  
  
  return (


    <Container>

      <Navegacion></Navegacion>
      
      <Suspense >
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Contacto' element={<Contactos />} />
        <Route path='/Institucional' element={<Institucional />} />
        <Route path='/upload' element={<ImageUploader/>} />
      </Routes>
      <Footer></Footer>
      </Suspense>
    </Container>


  );
}

export default App;
