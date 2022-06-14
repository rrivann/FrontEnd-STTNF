/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import data from '../utils/constants/data';
import Hero from '../Components/Hero/Hero';
import Movies from '../Components/Movies/Movies';
import {updateMovieDispatch} from '../redux/slice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateMovieDispatch(data));
  }, []);

  return (
    <>
      <main>
        <Hero />
        <Movies title="Latest Movies" />
      </main>
    </>
  );
};

export default Home;
