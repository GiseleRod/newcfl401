import logo from './logo.svg';
import './App.css';
import { Container, Box } from '@mui/material';
import Navegacion from './components/Navegacion';
import { NavLink, Route, Routes, Router, Link, useLocation } from "react-router-dom";
import Home from './Page/Home';
import Contactos from './Page/Contacto';
import Institucional from './Page/Institucional';
import Footer from './components/Footer';
function App() {
  return (


    <Container>
      <Navegacion></Navegacion>
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Contactos' element={<Contactos />} />
        <Route path='/Institucional' element={<Institucional />} />
      </Routes>
      <Footer></Footer>

    </Container>


  );
}

export default App;
