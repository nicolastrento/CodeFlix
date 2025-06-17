import api from './api';
import { filterValidMovies, CAROUSEL_CONFIG } from '../utils/movieHelpers';

// Buscar filmes para o hero carousel
export const getHeroSeries = async () => {
  try {
    const { data: { results: popularResults } } = await api.get('/tv/airing_today');
    const { data: { results: trendingResults } } = await api.get('/trending/tv/week');
    
    const combinedMovies = [...popularResults.slice(0, 3), ...trendingResults.slice(0, 2)];
    const validMovies = filterValidMovies(combinedMovies);
    
    return validMovies.slice(0, CAROUSEL_CONFIG.HERO_MOVIES_COUNT);
  } catch (error) {
    console.error('Erro ao buscar filmes para o hero:', error);
    // Fallback para filmes populares apenas
    const { data: { results } } = await api.get('/tv/airing_today');
    return results.slice(0, CAROUSEL_CONFIG.HERO_MOVIES_COUNT);
  }
};

// Buscar top filmes
export const getTopSeries = async () => {
  try {
    const { data: { results } } = await api.get('/tv/top_rated');
    return results;
  } catch (error) {
    console.error('Erro ao buscar top filmes:', error);
    return [];
  }
};

export const getPopularSeries = async () => {
  try {
    const { data: { results } } = await api.get('/tv/popular');
    return results;
  } catch (error) {
    console.error('Erro ao buscar filmes populares:', error);
    return [];
  }
};

export const getSerieDetail = async (id) => {
  const response = await api.get(`/tv/${id}`);
  return response.data;
};

export const getSerieById = async (id) => {
  const response = await api.get(`/tv/${id}`);
  return response.data;
};

export const getSerieCredits = async (id) => {
  const response = await api.get(`/tv/${id}/credits`);
  // Retorna apenas o cast, igual ao getMovieCredits
  return response.data.cast; // ← MUDANÇA AQUI
};

export const getSerieVideos = async (id) => {
  const { data: { results } } = await api.get(`/tv/${id}/videos`);
  return results;
};

export const getSerieSimilar = async (id) => {
  const { data: { results } } = await api.get(`/tv/${id}/similar`);
  return results;
};