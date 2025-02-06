import React from 'react'
import hero from './assets/hero.png';
import Search from './components/Search';
import { useState,useEffect } from 'react';

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
  const fetchMovies = async() =>{
    try{
      setIsLoading(true);
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity,desc`;

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
    fetchMovies();
  },[])

  return (
    <>
        <div className="pattern" />
        <div className="wrapper">
            <header>
                <img src={hero} alt="Hero Banner"/>
                <h1>Find <span className="text-gradient">Movies </span> you'll enjoy without the Hassle</h1>
                <Search searchterm={searchterm} setSearchterm={setSearchterm}/>
            </header>
           <section>
            <h2>All Movies</h2>
            {isLoading?( <p className="text-white">Loading...</p>):
              errorMessage?(<p className="text-red-500">{errorMessage}</p>):(
                <ul>
                  {movieList.map((movie)=>{
                    return <li className="text-white" key={movie.id}>{movie.title}</li>
                  })}
                </ul>
              )}
           </section>
        </div>
    </>
  )
}

export default App