import Movie from 'components/Movie';
import styles from 'styles/Home.module.css';
import Loading from 'components/Loding';
import useFetchMovies from 'hooks/useFetchMovies';

function Home() {
  const { movies, loading } = useFetchMovies();

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
