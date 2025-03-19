import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieImage } from '../components/MovieImage';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
    },
};

const MovieDetails = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const Navigate=useNavigate();
    const FetchMovieDetails = async () => {
        const response = await fetch(`${API_BASE_URL}/movie/${id}`, API_OPTIONS);
        const data = await response.json();
        setMovieDetails(data);
        console.log(data);
    };

    useEffect(() => {
        FetchMovieDetails();
    }, [id]);

    return (
        <div className="movie-details">
            <div className="pattern" />
            <div className="wrapper">
            <div>
                <button className="Back" onClick={()=>Navigate('/')}>Back</button>
            </div>
            {movieDetails && (
              <div className="MovieDetails">
                <h2>{movieDetails.title}</h2>
                <MovieImage movie={movieDetails} />
                <p>{movieDetails.overview}</p>
              </div>
            )}
            </div>
           
        </div>
    );
};

export default MovieDetails;