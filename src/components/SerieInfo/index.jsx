import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import { 
  InfoFilmes, 
  ContainerButtonsFilmes,
  MovieMetadata,
  MetaBadge
} from '../../containers/Movies/styles';
import { getGenreNames, getYear, formatRating } from '../../utils/movieHelpers';

const SerieInfo = ({ movie, isTransitioning, setShowModal }) => {
  const navigate = useNavigate();

  const handleNavigateToDetails = () => {
    
    // Verificar se é série ou filme
    const isTV = movie.name || movie.first_air_date;
    
    // Usar o ID correto do objeto movie
    const movieId = movie.id;
    
    if (movieId) {
      navigate(`/detalhe/${movieId}`);
    } else {
      console.error('No ID found for:', movie);
    }
  };

  return (
    <InfoFilmes $isTransitioning={isTransitioning}>
      <MovieMetadata>
        <MetaBadge className="year">{getYear(movie.first_air_date || movie.release_date)}</MetaBadge>
        <MetaBadge className="rating">⭐ {formatRating(movie.vote_average)}</MetaBadge>
        {getGenreNames(movie.genre_ids).map((genre, index) => (
          <MetaBadge key={index} className="genre">{genre}</MetaBadge>
        ))}
      </MovieMetadata>
      
      <h1>{movie.name}</h1>
      <p>{movie.overview}</p>
      
      <ContainerButtonsFilmes>
        <Button onClick={handleNavigateToDetails} red={true}>
          ▶ Assista Agora
        </Button>
        <Button onClick={() => setShowModal(movie)}>
          Assista o Trailer
        </Button>
      </ContainerButtonsFilmes>
    </InfoFilmes>
  );
};

export default SerieInfo;