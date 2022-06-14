/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Hero from '../../Components/Hero/Hero';
import Movies from '../../Components/Movies/Movies';
import {updateMovieDispatch} from '../../redux/slice';
import ENDPOINTS from '../../utils/constants/endpoints';

const NowPlayingMovie = () => {
  const movies = useSelector(({movies}) => movies);
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await axios(ENDPOINTS.NOW_PLAYING);
    dispatch(updateMovieDispatch(data.data.results));
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
