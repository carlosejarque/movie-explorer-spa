import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import MovieCard from '../components/MovieCard';

export default function SearchMovie() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const API_KEY = '4e0399a2b6ec47b65df5345c7e49cca0';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=es-ES&query=${query}`;

  const { data, loading } = useFetch(url);

  if (loading) return <p style={{ textAlign: 'center' }}>Buscando películas...</p>;

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Resultados para: "{query}"</h2>
      <div className="movie-grid">
        {data.results?.length > 0 ? (
          data.results.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p style={{ textAlign: 'center', color: '#111' }}>No se encontraron resultados</p>
        )}
      </div>
    </div>
  );
}
