import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Sobre from './Pages/Sobre/Sobre/Sobre';
import Botao from './Components/botao/botao';

const App = () => {
  return (
    <>
        <Header/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/sobre" element={<Sobre/>}/>
          </Routes>
        <Botao/> 
    </>
  )
}
export default App;
