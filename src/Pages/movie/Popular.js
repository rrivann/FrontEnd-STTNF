/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Hero from '../../Components/Hero/Hero';
import Movies from '../../Components/Movies/Movies';
import {updateMovieDispatch} from '../../redux/slice';
import ENDPOINTS from '../../utils/constants/endpoints';

const PopularMovie = () => {
  const movies = useSelector(({movies}) => movies);
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await axios(ENDPOINTS.POPULAR);
    dispatch(updateMovieDispatch(data.data.results));
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
