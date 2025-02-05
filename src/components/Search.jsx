import React from 'react'

function Search({searchterm,setSearchterm}) {
  return (
    <div className="search">
        <div>
            <img src="search.svg" alt="search" />
            <input type="text" placeholder="Search for a movie..." value={searchterm} onChange={(e) => setSearchterm(e.target.value)}/>
        </div>

    </div>
   
    
  )
}

export default Search