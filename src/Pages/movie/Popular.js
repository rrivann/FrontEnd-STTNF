/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import {useEffect, useState} from 'react';
import Movies from '../../Components/Movies/Movies';
import Hero from '../../Components/Hero/Hero';
import ENDPOINTS from '../../utils/constants/endpoints';

const PopularMovie = () => {
  const [movies, setMovies] = useState([]);

  const getPopularMovies = async () => {
    const data = await axios(ENDPOINTS.POPULAR);
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
