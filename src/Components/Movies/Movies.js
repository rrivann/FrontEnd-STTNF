import {useSelector} from 'react-redux';
import Movie from '../Movie/Movie';
import styles from './Movies.module.css';

const Movies = ({title}) => {
  const movies = useSelector(({movies}) => movies);

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>{title}</h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => {
            return <Movie movie={movie} key={movie.id} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Movies;
