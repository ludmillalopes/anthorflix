import React from "react";
import MovieInfoComment from "./MovieInfoComment";
import StarRatings from "./StarRatings";
import "./style/MovieInfo.css"

export default function MovieInfo(props) {

  return (
    <>
    <section className="movie-info">
      <div className="icon-voltar_container" onClick={props.closeMovieInfo}> 
        <i id="icon-voltar" className="fas fa-arrow-left"></i>
        <span style={{marginLeft: 10}}>Voltar</span>
      </div>

      <div className="movie-info_container">
        <div className="movie-info_container-item image">
          {
            props.currentMovie.poster_path == null ?
              <img
                src={"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"}
                alt="card"
              /> :
                <img
                  src={`https://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`}
                  alt="card"
                />
          }
        </div>

        <div className="movie-info_container-item info">
          <div className="movie-info_info">
            <div className="title">
              <h3>{props.currentMovie.title}</h3>
              <div className="movie-info_rating" title="Avaliar">
                <StarRatings />
              </div>
              <p id="media-votos" title="Média de Votos">{props.currentMovie.vote_average}</p>
            </div>
            <div className="info-details">
              <p><span>Título original: </span>{props.currentMovie.original_title}</p>
              <p><span>Ano de lançamento: </span>{props.currentMovie.release_date.substring(5).split("-").concat(props.currentMovie.release_date.substring(0, 4)).join("/")}</p>
              <p><span>Popularidade: </span>{props.currentMovie.popularity}</p>
              <p><span>Resumo: </span>{props.currentMovie.overview}</p>
            </div>
            
            <div className="movie-cast">
              <a>Adicionar elenco</a>
            </div>
          </div>

        </div>
      </div>
        <div className="movie-info_comment">
          <MovieInfoComment />
        </div>
    </section>
    </>
  )
}