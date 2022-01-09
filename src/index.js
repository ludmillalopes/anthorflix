import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './pages/Home';
// import SignIn from './pages/SignIn';
// import CadastroPage from './pages/CadastroPage';
import CrudPage from './pages/CrudPage';

ReactDOM.render(
  <React.StrictMode>
    {/* <Home /> */}
    {/* <SignIn /> */}
    {/* <CadastroPage /> */}
    <CrudPage />
  </React.StrictMode>,
  document.getElementById('root')
);