import React from 'react'
import hero from './assets/hero.png';
import Search from './components/Search';
import { useState,useEffect } from 'react';
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