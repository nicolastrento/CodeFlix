import { useState, useRef, useCallback, useEffect } from 'react';
import { CAROUSEL_CONFIG } from '../utils/movieHelpers';

export const useMovieCarousel = (heroMovies) => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const autoPlayRef = useRef(null);
  const progressRef = useRef(null);

  // Função para ir para o próximo filme
  const nextMovie = useCallback(() => {
    if (isTransitioning || heroMovies.length === 0) return;

    setIsTransitioning(true);
    setCurrentMovieIndex((prevIndex) =>
      prevIndex === heroMovies.length - 1 ? 0 : prevIndex + 1
    );

    setTimeout(() => {
      requestAnimationFrame(() => setIsTransitioning(false));
    }, CAROUSEL_CONFIG.TRANSITION_DURATION);
  }, [isTransitioning, heroMovies.length]);

  // Função para ir para filme específico
  const goToMovie = useCallback((index) => {
    if (isTransitioning || index === currentMovieIndex) return;

    setIsTransitioning(true);
    setCurrentMovieIndex(index);

    setTimeout(() => {
      requestAnimationFrame(() => setIsTransitioning(false));
    }, CAROUSEL_CONFIG.TRANSITION_DURATION);
  }, [isTransitioning, currentMovieIndex]);

  // Função para ir para filme anterior
  const prevMovie = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentMovieIndex((prevIndex) =>
      prevIndex === 0 ? heroMovies.length - 1 : prevIndex - 1
    );

    setTimeout(() => {
      requestAnimationFrame(() => setIsTransitioning(false));
    }, CAROUSEL_CONFIG.TRANSITION_DURATION);
  }, [isTransitioning, heroMovies.length]);

  // Auto-play logic
  useEffect(() => {
    if (!isAutoPlaying || heroMovies.length === 0) {
      return;
    }

    const intervalId = setInterval(() => {
      nextMovie();
    }, CAROUSEL_CONFIG.AUTOPLAY_DELAY);

    return () => {
      clearInterval(intervalId);
    };
  }, [isAutoPlaying, heroMovies.length, nextMovie]);

  // Controles de mouse
  const handleMouseEnter = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsAutoPlaying(true);
  }, []);

  return {
    currentMovieIndex,
    isAutoPlaying,
    isTransitioning,
    progressRef,
    autoPlayRef,
    nextMovie,
    prevMovie,
    goToMovie,
    handleMouseEnter,
    handleMouseLeave
  };
};

export default useMovieCarousel;