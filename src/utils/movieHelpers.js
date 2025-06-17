

export const GENRE_MAP = {
  28: 'Ação',
  12: 'Aventura',
  16: 'Animação',
  35: 'Comédia',
  80: 'Crime',
  99: 'Documentário',
  18: 'Drama',
  10751: 'Família',
  14: 'Fantasia',
  36: 'História',
  27: 'Terror',
  10402: 'Música',
  9648: 'Mistério',
  10749: 'Romance',
  878: 'Ficção Científica',
  10770: 'Cinema TV',
  53: 'Thriller',
  10752: 'Guerra',
  37: 'Faroeste'
};

// Configurações do carrossel
export const CAROUSEL_CONFIG = {
  AUTOPLAY_DELAY: 6000, // 6 segundos
  HERO_MOVIES_COUNT: 5, // Quantos filmes no carrossel
  TRANSITION_DURATION: 300 // Duração da transição em ms
};

// Função para formatar gêneros
export const getGenreNames = (genreIds) => {
  return genreIds?.slice(0, 3).map(id => GENRE_MAP[id]).filter(Boolean) || [];
};

// Função para formatar ano
export const getYear = (dateString) => {
  return dateString ? new Date(dateString).getFullYear() : '';
};

// Função para formatar nota
export const formatRating = (rating) => {
  return rating ? rating.toFixed(1) : '0.0';
};

// Função para filtrar filmes válidos
export const filterValidMovies = (movies) => {
  return movies.filter(movie => 
    movie.backdrop_path && 
    movie.poster_path && 
    movie.overview && 
    movie.vote_average > 6.5
  );
};