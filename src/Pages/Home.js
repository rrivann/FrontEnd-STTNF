/* eslint-disable react-hooks/exhaustive-deps */
import Hero from '../Components/Hero/Hero';
import Movies from '../Components/Movies/Movies';

const Home = () => {
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
