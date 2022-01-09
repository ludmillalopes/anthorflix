import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import CadastroPage from './pages/CadastroPage';

export default function Rotas() {
  return (
    <Routes>
      <Route path='/' exact component={Home} />
      <Route path='/signin' component={SignIn} />
      <Route path='/cadastro' component={CadastroPage} />
    </Routes>
  );
}