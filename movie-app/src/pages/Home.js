import { useEffect, useState } from 'react';
import Movie from 'components/Movie';
import styles from 'styles/Home.module.css';
import Loading from 'components/Loding';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const minRating = 9;

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=${minRating}&sort_by=year`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className={styles.movieContainer}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </section>
      )}
    </>
  );
}

export default Home;
