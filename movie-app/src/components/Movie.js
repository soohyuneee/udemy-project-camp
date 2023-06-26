import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from 'styles/Movie.module.css';

function Movie({ id, coverImg, title, summary, genres }) {
  const maxLen = 235;

  return (
    <div className={styles.movie}>
      <Link to={`/movie/${id}`}>
        <div className={styles.coverImg}>
          <img src={coverImg} alt="coverImg" />
          <div className={styles.summary}>
            <h2>{title}</h2>
            <p>{summary.length > maxLen ? `${summary.slice(0, maxLen)}...` : summary}</p>
            <ul>
              {genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Movie;

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
