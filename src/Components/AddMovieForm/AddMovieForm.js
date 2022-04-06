import {useState} from 'react';
import styles from './AddMovieForm.module.css';
import {nanoid} from 'nanoid';
import Alert from '../Alert/Alert';

const AddMovieForm = ({movies, setMovies}) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [poster, setPoster] = useState('');
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: nanoid(),
      title: title,
      year: date,
      type: type,
      poster: poster,
    };

    if (title === '') {
      setIsTitleError(true);
    } else if (date === '') {
      setIsDateError(true);
    } else {
      setIsTitleError(false);
      setIsDateError(false);
      setMovies(movies.concat(newMovie));
      console.log(newMovie);
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label}>
                Title
              </label>
              <input
                id="title"
                className={styles.form__input}
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="date" className={styles.form__label}>
                Date
              </label>
              <input
                id="date"
                className={styles.form__input}
                type="text"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              {isDateError && <Alert>Date Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="date" className={styles.form__label}>
                Images
              </label>
              <input
                id="image"
                className={styles.form__input}
                type="text"
                name="image"
                value={poster}
                onChange={(e) => setPoster(e.target.value)}
              />
              {isDateError && <Alert>Date Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="type" className={styles.form__label}>
                Type
              </label>
              <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="action">Action</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="comedy">Comedy</option>
              </select>
            </div>
            <div>
              <button className={styles.form__button}>Add Movie</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddMovieForm;
