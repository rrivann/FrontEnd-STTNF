/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import {useEffect, useState} from 'react';
import Hero from '../../Components/Hero/Hero';
import Movies from '../../Components/Movies/Movies';

const NowPlayingMovie = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

  const [movies, setMovies] = useState([]);

  const getNowPlayingMovies = async () => {
    const data = await axios(URL);
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
