import React, {useState} from 'react';
import '../components/Content.css'
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';

export default function Content() {

  // const history = useHistory();
  const [filme, setFilme] = useState('');
  // const [ erro, setErro ] = useState(false);
   
  return (
    <>
      <main className="content">
        <div className="content_intro">
          <h2>Bem-Vindo(a) ao Anthorflix!</h2>
          <p> Compartilhe com seus amigos os filmes que você assistiu e suas avaliações.</p>
          <input type="search" placeholder="Faça aqui sua busca" value={filme} onChange={e => setFilme(e.target.value)}></input>
        </div>

        <div id="pop-semana" className="content_pop-semana">
          <h2>Teste</h2>
        </div>

        <div id="melhores-avaliações" className="content_melhores-avaliações">
          <h2>Teste</h2>
        </div>

        <div id="pop" className="content_pop">
          <h2>Teste</h2>
        </div>

        <div id="recentes" className="content_recentes">
          <h2>Teste</h2>
        </div>

        <div id="content_melhores-avaliações" className="content_melhores-avaliações">
          <h2>Teste</h2>
        </div>

        <div id="content_melhores-avaliações" className="content_melhores-avaliações">
          <h2>Teste</h2>
        </div>

      </main>
    </>  
  );
}