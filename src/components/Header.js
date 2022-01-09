import React, {useState} from 'react';
import '../components/Header.css';

export default function Header() {
  
  const [show, setShow] = useState(true);


  const envioBusca = function() {
    alert('teste');
    const headerBusca = document.getElementsByClassName('header_busca');
    headerBusca.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    });
  }


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
                class="fas fa-search"
                onClick={() => setShow((s) => !s)}
                // on={() => setShow((s) => !s)} /* ENCONTRAR EVENTO QUE ESCONDA O INPUT AO CLICAR FORA DELE */
                ></i>
            </a>

            <input 
              className="header_busca"
              type="search"
              style={{ display: show ? "block" : "none" }}
            />
              
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