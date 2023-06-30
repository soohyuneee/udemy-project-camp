import { useEffect, useState } from 'react';

function useFetchMovies(url, type) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const baseUrl = 'https://yts.mx/api/v2';

  const getMovies = async () => {
    try {
      const json = await (await fetch(baseUrl + url)).json();
      const data = json.data;
      const movieData = {
        movies: data.movies,
        movie: data.movie,
      };
      setMovies(movieData[type]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { movies, loading };
}

export default useFetchMovies;
