import React, { useEffect, useState } from 'react';
import { BackgroundFilmes, PosterFilmes } from './styles';
import { Container } from '../Home/styles';
import { getImages } from '../../utils/getImages';
import { getHeroMovies, getTopMovies, getPopularMovies } from '../../services/movieService';
import { useMovieCarousel } from '../../hooks/useMovieCarousel';
import MovieInfo from '../../components/MovieInfo';
import CarouselControlsComponent from '../../components/CarouselControls';
import Slider from '../../components/Slider';
import Modal from '../../components/Modal';

function Movies() {
  const [heroMovies, setHeroMovies] = useState([]);
  const [topMovies, setTopMovies] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [showModal, setShowModal] = useState(false);
  
  // Hook customizado para gerenciar o carrossel
  const {
    currentMovieIndex,
    isAutoPlaying,
    isTransitioning,
    progressRef,
    nextMovie,
    prevMovie,
    goToMovie,
    handleMouseEnter,
    handleMouseLeave
  } = useMovieCarousel(heroMovies);

  // Filme atual
  const currentMovie = heroMovies[currentMovieIndex];

  // Carregar dados dos filmes
  useEffect(() => {
    const loadMovies = async () => {
      try {
        const [heroData, topData, popMovies] = await Promise.all([
          getHeroMovies(),
          getTopMovies(),
          getPopularMovies(),
        ]);
        
        setHeroMovies(heroData);
        setTopMovies(topData);
        setPopularMovies(popMovies)
      } catch (error) {
        console.error('Erro ao carregar filmes:', error);
      }
    };

    loadMovies();
  }, []);

  if (!currentMovie) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <BackgroundFilmes
        $img={getImages(currentMovie.backdrop_path)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        $isTransitioning={isTransitioning}
      >
        <Container>
          <MovieInfo 
            movie={currentMovie} 
            isTransitioning={isTransitioning}
            setShowModal={setShowModal} 
          />
          
          <PosterFilmes $isTransitioning={isTransitioning}>
            <img 
              src={getImages(currentMovie.poster_path)} 
              alt={`Poster de ${currentMovie.title}`}
            />
          </PosterFilmes>
        </Container>

        <CarouselControlsComponent
          heroMovies={heroMovies}
          currentMovieIndex={currentMovieIndex}
          isTransitioning={isTransitioning}
          isAutoPlaying={isAutoPlaying}
          prevMovie={prevMovie}
          nextMovie={nextMovie}
          goToMovie={goToMovie}
          progressRef={progressRef}
        />
      </BackgroundFilmes>

      {topMovies && <Slider info={topMovies} title={"Top Filmes"} />}
      {popularMovies && <Slider info={popularMovies} title={"Populares"} />}

      {showModal && (
        <Modal
          movieId={currentMovie.id}     // id do filme cujo trailer você quer
          setShowModal={setShowModal}   // para o botão de fechar
        />
      )}
    </>
  );
}

export default Movies;