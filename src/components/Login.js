import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/Home'
import '../components/Login.css';


export default function Login() {

  const loginUser = function() {
    ReactDOM.render(
      <Home />,
      document.getElementById('root')
    );
  }

  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  
  useEffect(() => {
    console.log(form);
  }, [form]);
  
  return (
    <>
      <section className="login">
        <div className="login_container">
          <h2>Faça o seu login</h2>
          
          <form className="login_form">
            <div className="login_form-item">
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

            <div className="login_form-item">
              <label htmlFor="password">Senha<span> *</span></label>
              <input 
                type="password"
                id="password"
                name="password"
                placeholder="Sua senha aqui"
                value={form.password}
                required
                onChange={(e) => {
                  setForm({ ...form, password: e.target.value });
                }}
              />
            </div>

            <a 
              className="link-cadastro"
              href="/cadastro"> Quero fazer meu cadastro
            </a>

            <button 
              type="button"
              className="login_form-btn"
              id="login_form-btn"
              onClick={() => {
                loginUser();
              }}
            >Entrar
            </button>
          </form>
        </div>
      </section>
    </>  
  );
}