import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CadastroPage from './pages/CadastroPage';
import Home from './pages/Home';
import SignIn from './pages/SignIn';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="cadastro" element={<CadastroPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);