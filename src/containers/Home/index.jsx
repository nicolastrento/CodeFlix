import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Background, Container, ContainerButtons, Info, Poster } from "./styles";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";
import Modal from "../../components/Modal";
import { getMovies, getPersonPopular, getPopularSeries, getTopMovies, getTopSeries } from "../../services/getData";

function Home() {

    const [ShowModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [PopularSeries, setPopularSeries] = useState()
    const [PersonPopular, setPersonPopular] = useState()

    const  navigate = useNavigate()

    useEffect( () => {

        async function getAllData() {
        
            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getPersonPopular()
            ])
            .then(( [movie, topMovies, topSeries, popularSeries, personPopular] ) => {
            setMovie(movie)
            setTopMovies(topMovies)
            setTopSeries(topSeries)
            setPopularSeries(popularSeries)
            setPersonPopular(personPopular)
            })
            .catch( error => console.error(error))}
       
           getAllData()
    }, [] ) 
    
    return (
        <>
          { movie && (
            <Background img={getImages(movie.backdrop_path)}>
               { ShowModal && <Modal movieId={movie.id} setShowModal={setShowModal} />} 
              <Container>
                  <Info>
                      <h1>{movie.title}</h1>
                      <p>{movie.overview}</p>
                      <ContainerButtons>
                        <Button onClick={ () => navigate(`/detalhe/${movie.id}`) } red={true}>
                            ▶ Assista Agora</Button>
                        <Button onClick={() => setShowModal(true) }>
                            Assista o Trailer</Button>
                      </ContainerButtons>
                  </Info>
                  <Poster>
                      <img
                       alt="capa-do-filme"
                       src={getImages(movie.poster_path)} />
                  </Poster>
              </Container>
            </Background>
          )}
            { topMovies && <Slider info={topMovies} title={'Top Filmes'}/> }
            { topSeries && <Slider info={topSeries} title={'Top Series'}/> }
            { PopularSeries && <Slider info={PopularSeries} title={'Series Populares'}/> }
            { PersonPopular && <Slider info={PersonPopular} title={'Top Artistas'}/> }
        </>
    )
}

export default Home;