import React,{useState, useEffect} from 'react';
import axios from './axios';
import request from './request';
import './Banner.css';


function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const requests = await axios.get(request.fetchPopularMovies);
            setMovie(requests.data.results[
            Math.floor(Math.random() * requests.data.results.length-1)]);
            return requests;
         
        }
    
    fetchData();
     
    }, [])
    console.log(movie);
    function truncate(str, n){
      return str?.length>n ? str.substr(0,n-1)+"...":str;
    }

  return (
  <header className='banner' style={{
    backgroundSize:"cover",
    backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundPosition:"center center",
  }}>
    <div className='banner_content'>
        <h1 className='title'>{movie?.title||movie?.name||movie?.original_name} </h1>
        <div className='banner_buttons'>
            <button className='banner_button' >Play</button>
            <button className='banner_button'style={{marginLeft:"10px"}}>More Info</button>
            <h3 className='overview'>{truncate(movie?.overview)} </h3>
        </div>

    </div>
    <div className='fade_bottom'/>
  </header>
  )
}

export default Banner