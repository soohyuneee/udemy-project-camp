import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from 'styles/Detail.module.css';
import Loading from 'components/Loding';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

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
              {movie.genres.map((g) => (
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
