import React from 'react';
import './App.css';
import Row from './component/Row';
import request from './component/request';
import Banner from './component/Banner';
import Nav from './component/Nav';
function App() {
  return (
    <div className="App">
      <Nav/>
     <Banner/>
      <Row tittle="Trending movies" fetchUrl= {request.fetchTrending} isLargeRow/>
      <Row tittle="Top upcoming movies" fetchUrl={request.fetchUpcomingMovies}/>
      <Row tittle="Top Rated movies" fetchUrl={request.fetchTopRatedMovies}/>
      <Row tittle="Popular movies" fetchUrl={request.fetchPopularMovies}/>
      <Row tittle="Popular tv shows" fetchUrl={request.fetchPopularTVShows}/>
      <Row tittle="On the air tv shows" fetchUrl={request.fetchOnTheAirTVShows}/>
      <Row tittle="Airing today tv shows" fetchUrl={request.fetchAiringTodayTVShows}/>
    </div>
  );
}

export default App;
