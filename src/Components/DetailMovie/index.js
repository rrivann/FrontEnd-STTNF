/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ENDPOINTS from '../../utils/constants/endpoints';
import Button from '../Ui/Button';
import StyledDetailMovie from './DetailMovie.styled';

const DetailMovie = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState('');
  const genres = movie && movie.genres.map((genre) => genre.name).join(', ');
  const trailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos?.results[0].key}`;

  const getDetailMovie = async () => {
    const {data} = await axios(ENDPOINTS.DETAIL_MOVIE(id));
    setMovie(data);
  };

  useEffect(() => {
    getDetailMovie();
  }, [id]);

  return (
    <StyledDetailMovie>
      <div className="poster">
        {movie && (
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt=""
          />
        )}
      </div>

      <div className="info">
        <h2>{movie.title}</h2>
        <h3>{genres}</h3>
        <p>{movie.overview}</p>
        <Button as="a" href={trailer}>
          Watch Trailer
        </Button>
      </div>
    </StyledDetailMovie>
  );
};

export default DetailMovie;
