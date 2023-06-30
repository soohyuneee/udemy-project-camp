import { useParams } from 'react-router-dom';
import styles from 'styles/Detail.module.css';
import Loading from 'components/Loding';
import useFetchMovies from 'hooks/useFetchMovies';

function Detail() {
  const { id } = useParams();
  const { movies, loading } = useFetchMovies(`/movie_details.json?movie_id=${id}`, 'movie');

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.detail}>
          <div className={styles.coverImg}>
            <img src={movies.large_cover_image} alt="coverImg" />
          </div>
          <div className={styles.desc}>
            <h1>{movies.title}</h1>
            <ul>
              {movies.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <p>{movies.description_full}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
