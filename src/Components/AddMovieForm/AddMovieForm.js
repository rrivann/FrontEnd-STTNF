import styles from './AddMovieForm.module.css';

const AddMovieForm = () => {
  return (
    <div className={styles.container}>
      <section className={styles.addmovie}>
        <div className="addmovie__right">
          <img
            className={styles.addmovie__image}
            src="https://picsum.photos/536/354"
            alt="placeholder"
          />
        </div>
        <div className={styles.addmovie__left}>
          <h2 className={styles.addmovie__title}>Add Movie</h2>
          <form action="">
            <label htmlFor="">Title</label>
            <br />
            <input type="text" />
            <br />
            <br />
            <label htmlFor="">Year</label>
            <br />
            <input type="text" />
          </form>
          <br />
          <button className={styles.addmovie__button}>Submit</button>
        </div>
      </section>
    </div>
  );
};

export default AddMovieForm;
