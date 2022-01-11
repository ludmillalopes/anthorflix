import React from 'react';
import '../components/style/Footer.css';

export default function Footer() {

  return (
    <>
      <footer className="footer">
        <div className="footer_container">
          <nav className="footer_menu">
            <ul className="footer_menu-item sobre">
              <h2>Sobre</h2>
              <li><a href="#" target="_blank">Sobre o Anthorflix</a></li>
              <li><a href="#" target="_blank">Cadastrar filme</a></li>
              <li><a href="#" target="_blank">Perguntas Frequentes</a></li>
              <li><a href="#" target="_blank">Contato</a></li>
            </ul>
            
            <ul className="footer_menu-item generos">
              <h2>Gêneros</h2>
              <li><a href="#" target="_blank">Animação</a></li>
              <li><a href="#" target="_blank">Ação</a></li>
              <li><a href="#" target="_blank">Comédia</a></li>
              <li><a href="#" target="_blank">Drama</a></li>
              <li><a href="#" target="_blank">Terror</a></li>
              <li><a href="#" target="_blank">Veja mais</a></li>
            </ul>
            
            <ul className="footer_menu-item listas">
              <h2>Listas</h2>
              <li><a href="#">Melhores Avaliações</a></li>
              <li><a href="#">Populares</a></li>
              <li><a href="#">Populares da Semana</a></li>
              <li><a href="#">Recentes</a></li>
              <li><a href="#" target="_blank">Minhas Listas</a></li>
            </ul>            
          </nav>

          <div className="footer_privacidade-item rede-social">
            <a href="#" title="Facebock" target="_blank"><i className="fab fa-facebook-f"></i></a>
            <a href="#" title="Instagram" target="_blank"><i className="fab fa-instagram"></i></a>
            <a href="#" title="Twitter" target="_blank"><i className="fab fa-twitter"></i></a>
            <a href="#" title="YouTube" target="_blank"><i className="fab fa-youtube"></i></a>
          </div>
          
          <div className="footer_privacidade">
            <a href="#" className="footer_privacidade-item" target="_blank">Política de Privacidade</a>
            <p href="#" className="footer_privacidade-item" target="_blank">Todos os direitos reservados a Anthorflix™.</p>
            <a href="#" className="footer_privacidade-item" target="_blank">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </>  
  );
}