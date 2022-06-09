/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import {useEffect, useState} from 'react';
import Movies from '../../Components/Movies/Movies';
import Hero from '../../Components/Hero/Hero';
import ENDPOINTS from '../../utils/constants/endpoints';

const TopRatedMovie = () => {
  const [movies, setMovies] = useState([]);

  const getTopRatedMovies = async () => {
    const data = await axios(ENDPOINTS.TOP_RATED);
    setMovies(data.data.results);
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
  return (
    <>
      <Hero />
      <Movies movies={movies} title="Top Rated Movies" />
    </>
  );
};

export default TopRatedMovie;
