import React, { Component } from 'react';

import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';
import MovieList from './components/MovieList';

 const API_KEY = 'b7b0662b8201fcffeebf59a5720d4977';

class App extends Component {

  state = {
    movies: []
  }
  
  
  getMovie = async(e) => {
    const movieName = e.target.elements.movieName.value;
    e.preventDefault();
    const api_call = await fetch (`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}`)
    //JSON.parse JSON.stringify
    const data = await api_call.json();
    this.setState({ movies: data.results })
    console.log(this.state.movies);
  }
  

  render() {
    return (
      
      <div className="App">
        <header>
          <Navbar />
        </header>
        <div className="my-5">
          <SearchForm getMovie={this.getMovie}/>
          <MovieList movies={this.state.movies}/>
        </div>
       
      </div>
            
    )
  }
}

export default App;