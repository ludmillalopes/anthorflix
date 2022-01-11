import React from 'react';
import '../components/style/Movie.css';


export default function Movie(props) {

  return (
    <>
      <div className="movie">

        <div className="movie_item">
          <div className="">
            {
              props.image == null ?
              <a
                id="movie_poster"
                href="#"
                onClick={(e) => props.viewMovieInfo(props.movieId)}
              ><img
                  id="movie_poster-static"
                  src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
                  alt="card"
                /></a> :
                    <a
                      id="movie_poster"
                      href="#"
                      onClick={(e) => props.viewMovieInfo(props.movieId)}
                    ><img src={`https://image.tmdb.org/t/p/w185${props.image}`}
                      alt="card"
                    /></a>
            }
          </div>
        </div>
      </div>
    </>  
  );
}