import {nanoid} from 'nanoid';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {addMovieDispatch} from '../../redux/slice';
import Alert from '../Alert/Alert';
import Button from '../Ui/Button';
import styles from './AddMovieForm.module.css';

const AddMovieForm = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    poster: '',
    type: '',
  });
  const [isError, setIsError] = useState({
    title: false,
    date: false,
    poster: false,
  });

  const validate = () => {
    if (formData.title === '') {
      setIsError({
        ...formData,
        title: true,
      });
      return false;
    } else if (formData.date === '') {
      setIsError({
        ...formData,
        date: true,
      });
      setIsError({
        ...formData,
        title: false,
      });
      return false;
    } else if (formData.poster === '') {
      setIsError({
        ...formData,
        poster: true,
      });
      setIsError({
        ...formData,
        date: false,
      });
      return false;
    } else {
      setIsError({
        ...formData,
        title: false,
      });
      setIsError({
        ...formData,
        date: false,
      });
      return true;
    }
  };

  const addMovie = () => {
    const newMovie = {
      id: nanoid(),
      title: formData.title,
      year: formData.date,
      type: formData.type,
      poster: formData.poster,
    };
    dispatch(addMovieDispatch(newMovie));
    navigation('/');
  };

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate() && addMovie();
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
                value={formData.title}
                onChange={handleChange}
              />
              {isError.title && <Alert>Title Wajib Diisi</Alert>}
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
                value={formData.date}
                onChange={handleChange}
              />
              {isError.poster && <Alert>Poster Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="date" className={styles.form__label}>
                Images
              </label>
              <input
                id="poster"
                className={styles.form__input}
                type="text"
                name="poster"
                value={formData.poster}
                onChange={handleChange}
              />
              {isError.date && <Alert>Date Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="type" className={styles.form__label}>
                Type
              </label>
              <select name="type" value={formData.type} onChange={handleChange}>
                <option value="action">Action</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="comedy">Comedy</option>
              </select>
            </div>
            <div>
              <Button variant="secondary" full size="lg">
                Add Movie
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddMovieForm;
