import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import {
  Inicio, Importancia, Polinizadores, ComoFunciona, Amenazas, Acciones, Fuentes,
} from './pages/Pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/importancia" element={<Importancia />} />
          <Route path="/polinizadores" element={<Polinizadores />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/amenazas" element={<Amenazas />} />
          <Route path="/acciones" element={<Acciones />} />
          <Route path="/fuentes" element={<Fuentes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
