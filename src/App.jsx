import React from 'react'
import hero from './assets/hero.png';
import Search from './components/Search';
import { useState,useEffect } from 'react';
import Spinner from './components/Spinner';
import { MovieCard } from './components/MovieCard';

const API_BASE_URL ='https://api.themoviedb.org/3' ;
const  API_KEY=import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
}



function App() {
  const [searchterm, setSearchterm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchMovies = async(query) =>{
    try{
      setIsLoading(true);
      const endpoint = query?`${API_BASE_URL}/search/movie?query=${query}`:`${API_BASE_URL}/discover/movie?sort_by=popularity,desc`;

      const response=await fetch(endpoint,API_OPTIONS);
      if(!response.ok){
          throw new Error('Failed to fetch movies')
        }
        const data = await response.json();

        if(data.response==='False'){
          setErrorMessage(data.Error||'Failed to fetch data');
          setMovieList([]);
          return;
        }
        console.log(data);
        setMovieList(data.results||[]);
    }
    catch(e){
      console.error(err.msg);
    }
    finally{
      setIsLoading(false);
    }
  }
  useEffect(()=>{
    fetchMovies(searchterm);
  },[searchterm])

  return (
    <>
        <div className="pattern" />
        <div className="wrapper">
            <header>
                <img src={hero} alt="Hero Banner"/>
                <h1>Find <span className="text-gradient">Movies </span> you'll enjoy without the Hassle</h1>
                <Search searchterm={searchterm} setSearchterm={setSearchterm}/>
            </header>
           <section className="all-movies">
            <h2 className="mt-[40px]">All Movies</h2>
            {isLoading?( <Spinner/>):
              errorMessage?(<p className="text-red-500">{errorMessage}</p>):(
                <ul>
                  {movieList.map((movie)=>(
                    <MovieCard movie={movie}/>
                  ))}
                </ul>
              )}
           </section>
        </div>
    </>
  )
}

export default App