import Movie from '../Movie/Movie';
import styles from './Movies.module.css';
import {nanoid} from 'nanoid';

const newMovie = {
  id: nanoid(),
  title: 'Spider-Man',
  year: '2021',
  type: 'Movie',
  poster:
    'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg',
};

const Movies = ({movies, setMovies}) => {
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => {
            return <Movie movie={movie} key={movie.id} />;
          })}
        </div>
        <button onClick={() => setMovies(movies.concat(newMovie))}>Add</button>
      </section>
    </div>
  );
};

export default Movies;
