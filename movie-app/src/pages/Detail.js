import { useParams } from 'react-router-dom';
import styles from 'styles/Detail.module.css';
import Loading from 'components/Loding';
import useFetchMovies from 'hooks/useFetchMovies';
import { useEffect, useState } from 'react';

function Detail() {
  const { id } = useParams();
  const { movies, loading } = useFetchMovies();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const selectMovie = movies.filter((item) => String(item.id) === id);
    if (selectMovie.length > 0) {
      setMovie(selectMovie[0]);
    }
  }, [id, movies]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.detail}>
          <div className={styles.coverImg}>
            <img src={movie.large_cover_image} alt="coverImg" />
          </div>
          <div className={styles.desc}>
            <h1>{movie.title}</h1>
            <ul>
              {movie.genres?.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <p>{movie.description_full}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
