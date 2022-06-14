/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import {useEffect, useState} from 'react';
import ENDPOINTS from '../../utils/constants/endpoints';
import Button from '../Ui/Button';
import StyledHero from './Hero.styled';

const Hero = () => {
  const [movie, setMovie] = useState('');
  const trailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  const getTrendingMovie = async () => {
    const response = await axios(ENDPOINTS.HERO);
    return response.data.results[0];
  };

  const getDetailMovie = async () => {
    const {id} = await getTrendingMovie();
    const {data} = await axios(ENDPOINTS.DETAIL_MOVIE(id));
    setMovie(data);
  };

  useEffect(() => getDetailMovie(), []);

  return (
    <StyledHero>
      <section>
        <hero__left>
          <h2>{movie.title}</h2>
          <h3>{movie && movie.genres.map((genre) => genre.name).join(', ')}</h3>
          <p>{movie.overview}</p>
          <Button
            variant="info"
            size="md"
            as="a"
            href={trailer}
            target="_blank"
          >
            Watch
          </Button>
        </hero__left>
        <div>
          <img
            src={
              movie && `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
            }
            alt="placeholder"
          />
        </div>
      </section>
    </StyledHero>
  );
};

export default Hero;
