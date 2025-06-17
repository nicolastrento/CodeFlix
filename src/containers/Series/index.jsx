import React, { useEffect, useState } from 'react';
import { BackgroundFilmes, PosterFilmes } from './styles';
import { Container } from '../Home/styles';
import { getImages } from '../../utils/getImages';
import { useMovieCarousel } from '../../hooks/useMovieCarousel';
import MovieInfo from '../../components/SerieInfo';
import CarouselControlsComponent from '../../components/CarouselControls';
import Slider from '../../components/Slider';
import Modal from '../../components/Modal';
import { getHeroSeries, getPopularSeries, getTopSeries } from '../../services/serieService';

function Series() {
  const [heroSeries, setHeroSeries] = useState([]);
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [showModal, setShowModal] = useState(false);
  const [selectedMovieForModal, setSelectedMovieForModal] = useState(null); // ADICIONADO: Estado para filme selecionado

  console.log(heroSeries);

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
  } = useMovieCarousel(heroSeries);

  // Filme atual
  const currentMovie = heroSeries[currentMovieIndex];

  // ADICIONADO: Função para abrir modal com filme específico
  const handleShowModal = (movie) => {
    console.log('=== OPENING MODAL ===');
    console.log('Movie for modal:', movie.name || movie.title);
    console.log('Movie ID for modal:', movie.id);

    setSelectedMovieForModal(movie);
    setShowModal(true);
  };

  // Carregar dados dos filmes
  useEffect(() => {
    const loadSeries = async () => {
      try {
        const [heroData, topData, popSeries] = await Promise.all([
          getHeroSeries(),
          getTopSeries(),
          getPopularSeries(),
        ]);

        setHeroSeries(heroData);
        setTopSeries(topData);
        setPopularSeries(popSeries);
      } catch (error) {
        console.error('Erro ao carregar filmes:', error);
      }
    };

    loadSeries();
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
            movieIndex={currentMovieIndex} // Adicione o índice
            heroMovies={heroSeries} // Adicione a lista completa
            isTransitioning={isTransitioning}
            setShowModal={handleShowModal}
          />

          <PosterFilmes $isTransitioning={isTransitioning}>
            <img
              src={getImages(currentMovie.poster_path)}
              alt={`Poster de ${currentMovie.name}`}
            />
          </PosterFilmes>
        </Container>

        <CarouselControlsComponent
          heroMovies={heroSeries}
          currentMovieIndex={currentMovieIndex}
          isTransitioning={isTransitioning}
          isAutoPlaying={isAutoPlaying}
          prevMovie={prevMovie}
          nextMovie={nextMovie}
          goToMovie={goToMovie}
          progressRef={progressRef}
        />
      </BackgroundFilmes>

      {topSeries && <Slider info={topSeries} title={"Top Séries"} />}
      {popularSeries && <Slider info={popularSeries} title={"Populares"} />}

      {showModal && selectedMovieForModal && (
        <Modal
          movieId={selectedMovieForModal.id}  // MODIFICADO: Usando ID do filme selecionado
          setShowModal={setShowModal}
        />
      )}
    </>
  );
}

export default Series;