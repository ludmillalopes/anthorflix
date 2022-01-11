import React, { Component } from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import MovieInfo from "../components/MovieInfo";
import BuscaFilme from "../components/BuscaFilme";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1,
      currentMovie: null,
    }
    this.apiKey = process.env.REACT_APP_API
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({movies: [...data.results], totalResults: data.total_results})
      console.log(this.state);
    })
  }
  
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({movies: [...data.results], currentPage: pageNumber})
    })
  }

  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id);
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;

    this.setState({currentMovie: newCurrentMovie});
  }

  closeMovieInfo = () => {
    this.setState({currentMovie: null});
  }

  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);

    return (
      <>
        <Header />

        {this.state.currentMovie == null ? 
          <div>
            <Content
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
              <BuscaFilme
                viewMovieInfo={this.viewMovieInfo}
                movies={this.state.movies}
              />
          </div> : 
            <MovieInfo
              currentMovie={this.state.currentMovie}
              closeMovieInfo={this.closeMovieInfo}
            />
        }

        {
          this.state.totalResults > 20 && this.currentMovie == null ? 
            <Pagination
              pages={numberPages}
              nextPage={this.nextPage}
              currentPage={this.state.currentPage}
            /> : ''
        }

        <Footer />
      </>  
    );
  }
}

export default Home;