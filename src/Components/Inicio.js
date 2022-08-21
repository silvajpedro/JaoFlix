import React, { Component } from "react";
import axios from "axios";
import Carousel from "nuka-carousel/lib/carousel";
import { FilmsImages, BoxFilm, SecondFilmsImages, Teste, Carrosel, Botao } from "./Style";
const FilmesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/trending/all/day?api_key=3cb82dd81c0e63bdd11ee02aefb8bb83"
})

export default class Inicio extends Component {
    state = {
        movies: [],
    }
    componentDidMount() {
        this.getMovies()
    }
    getMovies = async () => {
        const resposta = await FilmesApi.get()
        const AllFilmes = resposta.data.results.map((item) => {
            return {
                ...item,
                image: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
                image2: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
            }
        })
        console.log(AllFilmes)
        this.setState({
            movies: AllFilmes,
            data: AllFilmes
        })
    }

    Show = () => {
        const info = document.body.getElementsByTagName("section")[0]
        info.style.color = "white"
    }
    render() {
        const Mover = {
            position: 'relative',
            top: '-1vh',
            paddingTop: '20px',
            paddingBottom: '30px',
            paddingLeft: '100px',
            width: '89vw'
        }
        return (
            <BoxFilm>
                <Carrosel defaultControlsConfig={{
                    nextButtonText: '>',
                    nextButtonStyle: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        right: '1vw',
                        backgroundColor: '#0BE463',
                        color: "black",
                        fontSize: '35px',
                        borderRadius: '100%',
                        width: '4.5vw',
                        height: '8vh'
                    },
                    prevButtonText: '<',
                    prevButtonStyle: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        right: '-0.5vw',
                        backgroundColor: '#0BE463',
                        color: "black",
                        fontSize: '35px',
                        borderRadius: '100%',
                        width: '4.5vw',
                        height: '8vh'
                    }
                }}
                     speed={500} style={Mover} cellSpacing={0} cellAlign="center" wrapAround={true} slidesToShow={3} renderBottomCenterControls={false}>
                    {this.state.movies.splice(1, 10).map((item) => (
                        <>
                         
                            <Teste>
                            <FilmsImages  src={item.image} alt="poster" />
                                <ul>
                                    <li>{item.title}</li>
                                    {/* <li>{item.overview}</li> */}
                                    {/* <li>{item.vote_average}</li> */}
                                <Botao>Assitir agora</Botao>
                                </ul>
                            </Teste>
                            {/* {this.state.data.map((item) => (
                                <p>{item.release_date.replace(/-/g, " ").split(" ").reverse().splice(2, 3)}</p>
                            ))} */}


                            {/* replace(/-/g, " ").split(" ").reverse().join("/") */}
                        </>
                    ))}
                </Carrosel>
                <Carousel defaultControlsConfig={{
                    nextButtonText: '>',
                    nextButtonStyle: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        right: '1vw',
                        backgroundColor: '#0BE463',
                        color: "black",
                        fontSize: '35px',
                        borderRadius: '100%',
                        width: '4.5vw',
                        height: '8vh'
                    },
                    prevButtonText: '<',
                    prevButtonStyle: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        right: '-0.5vw',
                        backgroundColor: '#0BE463',
                        color: "black",
                        fontSize: '35px',
                        borderRadius: '100%',
                        width: '4.5vw',
                        height: '8vh'
                    }
                }} style={Mover} speed={1000} autoplay={true} cellSpacing={0} cellAlign="center" wrapAround={true} slidesToShow={3} renderBottomCenterControls={false}>
                    {this.state.movies.splice(1, 7).map((item) => (
                        <>
                            <ul>
                                {/* <li>{item.title}</li>
                        <li>{item.overview}</li>
                        <li>{item.vote_average}</li> */}
                            </ul>
                            <FilmsImages src={item.image} alt="poster" />
                            {/* <FilmsImages className="imagem2" src={item.image2} alt="poster" /> */}

                            {/* replace(/-/g, " ").split(" ").reverse().join("/") */}

                        </>

                    ))}
                </Carousel>
            </BoxFilm>
        )
    }
}