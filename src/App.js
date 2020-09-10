import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css'

class App extends React.Component {
  state = {
    isLoading: true, //로딩 상태값을 저장하는 변수. 컴포넌트가 마운트되면 true
    movies: [], //로딩한 영화데이터를 저장할 배열
  };

  getMovies = async () => {
    //구조 분해 할당 적용해 movies 객체 접근, 데이터 저장
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({movies, isLoading: false});
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state; 

    return (
      <section className= "container">
        {isLoading ? (

          <div className="loader">
            <span className= "loader__text">Loading...</span>
          </div>

          ) : (<div className="movies">
            {movies.map((movie) => {
              return <Movie 
                key = {movie.id}
                id= {movie.id}
                year= {movie.year}
                title= {movie.title}
                summary = {movie.summary}
                poster = {movie.medium_cover_image}
                genres = {movie.genres}
            />; //movie 컴포넌트 반환!
          })}
          </div>
        )}
      </section>
      );
  }
}

export default App;
