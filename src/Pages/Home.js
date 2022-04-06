import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import Movies from '../Components/Movies/Movies';
import Footer from '../Components/Footer/Footer';
import AddMovieForm from '../Components/AddMovieForm/AddMovieForm';
import {useState} from 'react';
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
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
