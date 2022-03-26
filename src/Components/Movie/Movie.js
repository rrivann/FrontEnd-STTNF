import styles from './Movies.module.css';

const Movie = ({movie}) => {
  const {title, year, poster} = movie;
  return (
    <div className={styles.movie}>
      <img className={styles.movie__image} src={poster} alt="" />
      <h3 className={styles.movie__title}>{title}</h3>
      <p className={styles.movie__date}>{year}</p>
    </div>
  );
};

export default Movie;
