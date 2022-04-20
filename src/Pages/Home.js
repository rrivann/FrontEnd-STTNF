import {useState} from 'react';
import AddMovieForm from '../Components/AddMovieForm/AddMovieForm';
import Hero from '../Components/Hero/Hero';
import Movies from '../Components/Movies/Movies';
import data from '../utils/constants/data';

const Main = () => {
  const [movies, setMovies] = useState(data);

  return (
    <main>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </main>
  );
};

const Home = () => {
  return (
    <>
      <Main />
    </>
  );
};

export default Home;
