import React from 'react';
import Movie from './Movie';
import '../components/style/BuscaFilme.css';


export default function BuscaFilme(props) {

  
  return (
    <>
      <section className="busca-filme">
        {
          props.movies.map((movie, i) => {
            return (
                <Movie
                  key={i}
                  viewMovieInfo={props.viewMovieInfo}
                  movieId={movie.id}
                  image={movie.poster_path}
                />
            )
          })
        }
      </section>
    </>  
  );
}