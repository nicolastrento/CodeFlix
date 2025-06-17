import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideos } from "../../services/getData"
import { getSerieById, getSerieCredits, getSerieSimilar, getSerieVideos } from "../../services/serieService"
import { Container, Background, Cover, Info, ContainerMovies } from "./styles"
import { getImages } from "../../utils/getImages"
import SpanGenres from "../../components/SpanGenres"
import Credits from "../../components/Credits"
import Slider from "../../components/Slider"

function Detail() {
  const { id } = useParams()
  const [movie, setMovie] = useState()
  const [movieVideos, setMovieVideos] = useState()
  const [movieCredits, setMovieCredits] = useState()
  const [movieSimilar, setMovieSimilar] = useState()
  const [loading, setLoading] = useState(true)
  const [contentType, setContentType] = useState(null) // 'movie' ou 'tv'

  useEffect(() => {
    async function getAllData() {
      try {
        setLoading(true)
        console.log('=== DETAIL COMPONENT ===');
        console.log('ID recebido:', id);

        // Tenta buscar como série primeiro
        let movie, videos, credits, similar, type;
        
        try {
          console.log('Tentando buscar como SÉRIE...');
          const [serieData, serieVideos, serieCredits, serieSimilar] = await Promise.all([
            getSerieById(id),
            getSerieVideos(id),
            getSerieCredits(id),
            getSerieSimilar(id),
          ]);

          // Verifica se retornou dados válidos de série (séries têm 'name')
          if (serieData && serieData.name) {
            console.log('✅ Encontrado como SÉRIE:', serieData.name);
            movie = serieData;
            videos = serieVideos;
            credits = serieCredits;
            similar = serieSimilar;
            type = 'tv';
          } else {
            throw new Error('Não é série');
          }
        } catch (error) {
          console.log('❌ Não é série, tentando como FILME...');
          
          // Se não for série, tenta como filme
          const [movieData, movieVideos, movieCredits, movieSimilar] = await Promise.all([
            getMovieById(id),
            getMovieVideos(id),
            getMovieCredits(id),
            getMovieSimilar(id),
          ]);

          console.log('✅ Encontrado como FILME:', movieData.title);
          movie = movieData;
          videos = movieVideos;
          credits = movieCredits;
          similar = movieSimilar;
          type = 'movie';
        }

        setMovie(movie);
        setMovieVideos(videos);
        setMovieCredits(credits);
        setMovieSimilar(similar);
        setContentType(type);
        
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      getAllData();
    }
  }, [id])

  // Mostra loading enquanto carrega os dados
  if (loading) {
    return <div>Carregando...</div>
  }

  // Verifica se movie existe antes de renderizar
  if (!movie) {
    return <div>Conteúdo não encontrado</div>
  }

  // Título correto baseado no tipo
  const title = contentType === 'tv' ? movie.name : movie.title;
  const similarTitle = contentType === 'tv' ? 'Séries Similares' : 'Filmes Similares';

  return (
    <>
      <Background $image={getImages(movie.backdrop_path)} />
      <Container>
        <Cover>
          <img src={getImages(movie.poster_path)} alt={title} />
        </Cover>
        <Info>
          <h2>{title}</h2>
          <SpanGenres genres={movie.genres} />
          <p>{movie.overview}</p>
          <div>Créditos</div>
          <div>
            <Credits credits={movieCredits} />
          </div>
        </Info>
      </Container>
      <ContainerMovies>
        {movieVideos && movieVideos.map((video) => (
          <div key={video.id}>
            <h4>{video.name}</h4>
            <iframe
              src={`https://www.youtube.com/embed/${video.key}`}
              title="Youtube Video Player"
              height="500px"
              width="100%"
            ></iframe>
          </div>
        ))}
      </ContainerMovies>
      {movieSimilar && <Slider info={movieSimilar} title={similarTitle}/>}
    </>
  )
}

export default Detail