/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import {useEffect, useState} from 'react';
import Movies from '../../Components/Movies/Movies';
import Hero from '../../Components/Hero/Hero';

const PopularMovie = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  const [movies, setMovies] = useState([]);

  const getPopularMovies = async () => {
    const data = await axios(URL);
    setMovies(data.data.results);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <>
      <Hero />
      <Movies movies={movies} title="Popular Movies" />
    </>
  );
};

export default PopularMovie;
