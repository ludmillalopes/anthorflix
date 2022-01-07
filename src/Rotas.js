import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function Rotas() {
  return (
    <Routes>
      <Route path='/' exact component={Home} />
    </Routes>
  );
}