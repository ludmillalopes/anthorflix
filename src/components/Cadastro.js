import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/Home'
import '../components/style/Cadastro.css';

export default function Cadastro() {

  const cadastroUser = function() {
    ReactDOM.render(
      <Home />,
      document.getElementById('root')
    );
  }

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })
  
  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <>
      <section className="cadastro">
        <div className="cadastro_container">
          <h2>Faça o seu cadastro</h2>
          
          <form action="/" className="cadastro_form">
            <div className="cadastro_form-item">
              <label htmlFor="username">Nome de usuário<span> *</span></label>
              <input 
                type="text"
                id="username"
                name="username"
                placeholder="Defina seu nome de usuário"
                value={form.username}
                required
                onChange={(e) => {
                  setForm({ ...form, username: e.target.value });
                }}
              />
            </div>

            <div className="cadastro_form-item">
              <label htmlFor="email">E-mail<span> *</span></label>
              <input 
                type="email"
                id="email"
                name="email"
                placeholder="Seu e-mail"
                value={form.email}
                required
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                }}
              />
            </div>

            <div className="cadastro_form-item">
              <label htmlFor="password">Senha<span> *</span></label>
              <input 
                type="password"
                id="password"
                name="password"
                placeholder="Digite sua senha aqui"
                value={form.password}
                required
                onChange={(e) => {
                  setForm({ ...form, password: e.target.value });
                }}
              />
            </div>
            
            <div className="cadastro_form-item">
              <label htmlFor="password">Confirme sua senha<span> *</span></label>
              <input 
                type="password"
                id="password"
                name="password"
                placeholder="Senha"
                value={form.passwordConfirm}
                required
                onChange={(e) => {
                  setForm({ ...form, passwordConfirm: e.target.value });
                }}
              />
            </div>

            <button 
              type="button"
              className="cadastro_form-btn"
              id="cadastro_form-btn"
              onClick={() => {
                cadastroUser();
              }}
            >Cadastrar
            </button>
          </form>
        </div>
      </section>
    </>  
  );
}