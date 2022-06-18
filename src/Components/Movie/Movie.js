import {Link} from 'react-router-dom';
import StyledMovie from './Movie.styled';

const Movie = ({movie}) => {
  const {id, title, year, poster, release_date, poster_path} = movie;

  return (
    <StyledMovie>
      <img
        src={poster || `https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt=""
      />
      <Link to={`/movie/${id}`}>{title}</Link>
      <p>{year || release_date}</p>
    </StyledMovie>
  );
};

export default Movie;
