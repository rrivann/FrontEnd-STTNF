import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import Movies from '../Components/Movies/Movies';
import Footer from '../Components/Footer/Footer';
import AddMovieForm from '../Components/AddMovieForm/AddMovieForm';

const Main = () => {
  return (
    <main>
      <Hero />
      <Movies />
      <AddMovieForm />
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
