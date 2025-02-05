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
  const [searchterm, setSearchterm] = useState('')

  useEffect(()=>{

  },[])

  return (
    <>
        <div className="pattern" />
        <div className="wrapper">
            <header>
                <img src={hero} alt="Hero Banner"/>
                <h1>Find <span className="text-gradient">Movies </span> you'll enjoy without the Hassle</h1>
            </header>
           <Search searchterm={searchterm} setSearchterm={setSearchterm}/>
        </div>
    </>
  )
}

export default App