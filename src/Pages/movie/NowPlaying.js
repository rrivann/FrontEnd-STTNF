/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import {useEffect, useState} from 'react';
import Hero from '../../Components/Hero/Hero';
import Movies from '../../Components/Movies/Movies';
import ENDPOINTS from '../../utils/constants/endpoints';

const NowPlayingMovie = () => {
  const [movies, setMovies] = useState([]);

  const getNowPlayingMovies = async () => {
    const data = await axios(ENDPOINTS.NOW_PLAYING);
    setMovies(data.data.results);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <>
      <Hero />
      <Movies movies={movies} title="Now Playing Movies" />
    </>
  );
};

export default NowPlayingMovie;
