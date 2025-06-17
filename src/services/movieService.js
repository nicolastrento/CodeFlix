import api from './api';
import { filterValidMovies, CAROUSEL_CONFIG } from '../utils/movieHelpers';

// Buscar filmes para o hero carousel
export const getHeroMovies = async () => {
  try {
    const { data: { results: popularResults } } = await api.get('/movie/popular');
    const { data: { results: trendingResults } } = await api.get('/trending/movie/week');
    
    const combinedMovies = [...popularResults.slice(0, 3), ...trendingResults.slice(0, 2)];
    const validMovies = filterValidMovies(combinedMovies);
    
    return validMovies.slice(0, CAROUSEL_CONFIG.HERO_MOVIES_COUNT);
  } catch (error) {
    console.error('Erro ao buscar filmes para o hero:', error);
    // Fallback para filmes populares apenas
    const { data: { results } } = await api.get('/movie/popular');
    return results.slice(0, CAROUSEL_CONFIG.HERO_MOVIES_COUNT);
  }
};

// Buscar top filmes
export const getTopMovies = async () => {
  try {
    const { data: { results } } = await api.get('/movie/top_rated');
    return results;
  } catch (error) {
    console.error('Erro ao buscar top filmes:', error);
    return [];
  }
};

export const getPopularMovies = async () => {
  try {
    const { data: { results } } = await api.get('/movie/popular');
    return results;
  } catch (error) {
    console.error('Erro ao buscar filmes populares:', error);
    return [];
  }
};

