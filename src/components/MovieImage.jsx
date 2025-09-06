import React from 'react';
import star from '../assets/star.svg';
export const MovieImage= ({movie:{title,id,vote_average,release_date,original_language,poster_path,origin_country,genres,status}}) => {
  return (
    <div className="movie-image" id={id} >
      <img onClick={()=>window.location.href=`/movie/${id}`} src={poster_path?`https://image.tmdb.org/t/p/w500/${poster_path}`:'/no-movie.png'} alt={title}/>
      <div className="mt-4">
        <div className="content">
                  <div className="rating">
                    <img src={star} alt="star icon" />
                    <p>{vote_average?vote_average.toFixed(1):'N/A'}</p>
                  </div>
                  <span>•</span>
                  <p className="lang">{original_language}</p>
                  <span>•</span>
                  <p className="year">{release_date?release_date.split('-')[0]:'N/A'}</p>
                  <span>•</span>
                  <p className="status">{status}</p>
                  <span>•</span>
                  <p>{origin_country}</p>
        </div>
        <div className="content">
        {genres && (
            <div className="genres">
            {genres.map((genre) => (
                <p key={genre.id}>{genre.name}</p>
            ))}
            </div>
        )}
        </div>
            
      </div>
    </div>
  )
}
