import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import CadastroPage from './pages/CadastroPage';

export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/signin' component={SignIn} />
      <Route path='/cadastro' component={CadastroPage} />
    </Switch>
  </BrowserRouter>
  );
}