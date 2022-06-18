/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Hero from '../../Components/Hero/Hero';
import Movies from '../../Components/Movies/Movies';
import {updateMovieDispatch} from '../../redux/slice';
import ENDPOINTS from '../../utils/constants/endpoints';

const TopRatedMovie = () => {
  const movies = useSelector(({movies}) => movies);
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await axios(ENDPOINTS.TOP_RATED);
    dispatch(updateMovieDispatch(data.data.results));
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
