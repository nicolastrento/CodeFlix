import React from 'react';
import { 
  CarouselControls,
  ControlButton,
  CarouselIndicators,
  IndicatorDot,
  CarouselProgress,
  ProgressBar
} from '../../containers/Movies/styles';
import { CAROUSEL_CONFIG } from '../../utils/movieHelpers';

const CarouselControlsComponent = ({ 
  heroMovies, 
  currentMovieIndex, 
  isTransitioning, 
  isAutoPlaying,
  prevMovie, 
  nextMovie, 
  goToMovie,
  progressRef 
}) => {
  return (
    <>
      {/* Controles de navegação */}
      <CarouselControls>
        <ControlButton 
          onClick={prevMovie}
          disabled={isTransitioning}
          className="prev"
        >
          ‹
        </ControlButton>
        <ControlButton 
          onClick={nextMovie}
          disabled={isTransitioning}
          className="next"
        >
          ›
        </ControlButton>
      </CarouselControls>

      {/* Indicadores */}
      <CarouselIndicators>
        {heroMovies.map((_, index) => (
          <IndicatorDot
            key={index}
            $active={index === currentMovieIndex}
            onClick={() => goToMovie(index)}
            disabled={isTransitioning}
          />
        ))}
      </CarouselIndicators>

      {/* Barra de progresso */}
      {isAutoPlaying && (
        <CarouselProgress>
          <ProgressBar 
            ref={progressRef}
            $duration={CAROUSEL_CONFIG.AUTOPLAY_DELAY}
            key={`progress-${currentMovieIndex}`}
          />
        </CarouselProgress>
      )}
    </>
  );
};

export default CarouselControlsComponent;