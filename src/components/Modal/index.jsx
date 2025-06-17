import { useEffect, useState } from "react"
import { Container, Background, CloseButton, LoadingSpinner } from "./styles"
import { FiX } from "react-icons/fi";
import { getMovieVideos } from "../../services/getData";
import { getSerieVideos } from "../../services/serieService";

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getVideos() {
      try {
        setMovie(null);
        setLoading(true);
        
        console.log('=== MODAL DEBUG ===');
        console.log('Movie ID para buscar vídeos:', movieId);
        
        let videos = [];
        
        // Tenta buscar como série primeiro
        try {
          console.log('Tentando buscar vídeos como SÉRIE...');
          const serieVideos = await getSerieVideos(movieId);
          
          if (serieVideos && serieVideos.length > 0) {
            console.log('✅ Encontrados vídeos de SÉRIE:', serieVideos.length);
            videos = serieVideos;
          } else {
            throw new Error('Nenhum vídeo de série encontrado');
          }
        } catch (error) {
          console.log('❌ Não encontrou vídeos de série, tentando como FILME...');
          
          // Se não encontrar vídeos de série, tenta como filme
          try {
            const movieVideos = await getMovieVideos(movieId);
            
            if (movieVideos && movieVideos.length > 0) {
              console.log('✅ Encontrados vídeos de FILME:', movieVideos.length);
              videos = movieVideos;
            }
          } catch (movieError) {
            console.log('❌ Também não encontrou vídeos de filme');
          }
        }
        
        console.log('Vídeos finais:', videos);
        setMovie(videos);
        
      } catch (error) {
        console.error('Erro ao buscar vídeos:', error);
        setMovie([]);
      } finally {
        setLoading(false);
      }
    }
    
    if (movieId) {
      getVideos();
    }
  }, [movieId]);

  const handleBackgroundClick = () => {
    setShowModal(false);
  };

  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Background onClick={handleBackgroundClick}>
      <Container onClick={handleContainerClick}>
        <CloseButton onClick={() => setShowModal(false)}>
          <FiX />
        </CloseButton>

        {loading ? (
          <LoadingSpinner />
        ) : !movie || movie.length === 0 ? (
          <div style={{ 
            color: 'white', 
            textAlign: 'center', 
            padding: '50px 20px',
            fontSize: '18px' 
          }}>
            Nenhum trailer disponível para este conteúdo
          </div>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${movie[0].key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </Container>
    </Background>
  );
}

export default Modal;