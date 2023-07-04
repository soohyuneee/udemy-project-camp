import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from 'redux/LoadingSlice';
import { setMovies } from 'redux/MovieSlice';

function useFetchMovies() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);
  const { loading } = useSelector((state) => state.loading);

  const getMovies = async () => {
    try {
      const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)).json();
      const data = json.data.movies;
      dispatch(setMovies(data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { movies, loading };
}

export default useFetchMovies;
