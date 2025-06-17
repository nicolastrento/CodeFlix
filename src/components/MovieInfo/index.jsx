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

const MovieInfo = ({ movie, isTransitioning, setShowModal }) => {
  const navigate = useNavigate();

  return (
    <InfoFilmes $isTransitioning={isTransitioning}>
      <MovieMetadata>
        <MetaBadge className="year">{getYear(movie.release_date)}</MetaBadge>
        <MetaBadge className="rating">⭐ {formatRating(movie.vote_average)}</MetaBadge>
        {getGenreNames(movie.genre_ids).map((genre, index) => (
          <MetaBadge key={index} className="genre">{genre}</MetaBadge>
        ))}
      </MovieMetadata>
      
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      
      <ContainerButtonsFilmes>
        <Button onClick={() => navigate(`/detalhe/${movie.id}`)} red={true}>
          ▶ Assista Agora
        </Button>
        <Button onClick={() => setShowModal(true)}>
          Assista o Trailer
        </Button>
      </ContainerButtonsFilmes>
    </InfoFilmes>
  );
};

export default MovieInfo;