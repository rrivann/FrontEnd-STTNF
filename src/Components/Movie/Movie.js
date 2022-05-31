import StyledMovie from './Movie.styled';

const Movie = ({movie}) => {
  const {title, year, poster, release_date, poster_path} = movie;
  return (
    <StyledMovie>
      <img
        src={poster || `https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt=""
      />
      <h3>{title}</h3>
      <p>{year || release_date}</p>
    </StyledMovie>
  );
};

export default Movie;
