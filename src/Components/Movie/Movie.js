import StyledMovie from './Movie.styled';

const Movie = ({movie}) => {
  const {title, year, poster} = movie;
  return (
    <StyledMovie>
      <img src={poster} alt="" />
      <h3>{title}</h3>
      <p>{year}</p>
    </StyledMovie>
  );
};

export default Movie;
