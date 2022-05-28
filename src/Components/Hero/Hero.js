import {useEffect, useState} from 'react';
import Button from '../Ui/Button';
import StyledHero from './Hero.styled';

const Hero = () => {
  const [movie, setMovie] = useState('');

  const fetchMovie = async () => {
    const response = await fetch(
      'https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590'
    );

    const data = await response.json();
    setMovie(data);
  };

  useEffect(() => fetchMovie(), []);

  return (
    <StyledHero>
      <section>
        <div>
          <h2>{movie.Title}</h2>
          <h3>{movie.Genre}</h3>
          <p>{movie.Plot}</p>
          <Button variant="info" size="md">
            Watch
          </Button>
        </div>
        <div>
          <img src={movie.Poster} alt="placeholder" />
        </div>
      </section>
    </StyledHero>
  );
};

export default Hero;
