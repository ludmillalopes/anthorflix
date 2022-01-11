import React from 'react';
import '../components/style/Content.css'


export default function Content(props) {

  return (
    <>
      <main className="content">
        <div className="content_intro">
          <h2>Bem-Vindo(a) ao Anthorflix!</h2>
          <p> Compartilhe com seus amigos os filmes que você assistiu e suas avaliações.</p>

          <form action="" onSubmit={props.handleSubmit}>
            <input 
              className="content_busca"
              type="text"
              placeholder="Faça aqui sua busca"
              onChange={props.handleChange}
            />
          </form>

        </div>
      </main>
    </>  
  );
}