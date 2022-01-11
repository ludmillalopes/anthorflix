import React, {useState} from 'react';
import '../components/style/Header.css';

export default function Header(props) {
  
  const [show, setShow] = useState(false);
    
  return (
    <>
      <header className="header_container">
        <h1 className="header_logo"><a href="/">anthorflix</a></h1>
        
        <nav className="header_menu">
          <ul>
            <li><a href="#">Filmes</a></li>
            <li><a href="#">Séries</a></li>

            <a href="#">
              <i 
                id="icon-busca"
                className="fas fa-search"
                onClick={() => setShow((s) => !s)}
                ></i>
            </a>
            
            <form action="" onSubmit={props.handleSubmit}>
              <input 
                className="header_busca"
                type="text"
                onChange={props.handleChange}
                style={{ display: show ? "block" : "none" }}
              />
            </form>    
          </ul>
        </nav>

        <nav className="header_login">
          <ul>
            <li><a href="/signin">Login</a></li>
            <li><a href="/cadastro">Cadastre-se</a></li>
          </ul>
        </nav>
      </header>
    </>  
  );
}