import React, { Component } from "react";
import axios from "axios";
import * as S from "./Style";
const FilmesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/trending/all/day?api_key=3cb82dd81c0e63bdd11ee02aefb8bb83"
})

export default class Inicio extends Component {
    state = {
        movies: []
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
    render() {
        const Mover = {
            paddingTop:'6px',
            paddingBottom: '30px',
            paddingLeft: '100px',
            width: '89vw',
            height:'59vh',
        }
        return (
            <S.BoxFilm>
                <S.Carrosel defaultControlsConfig={{
                    nextButtonText: '>',
                    nextButtonStyle: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        top: '-1vh',
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
                        top: '-1vh',
                        right: '-0.5vw',
                        backgroundColor: '#0BE463',
                        color: "black",
                        fontSize: '35px',
                        borderRadius: '100%',
                        width: '4.5vw',
                        height: '8vh'
                    }
                }} speed={500}  autoplay={true}  style={Mover} cellSpacing={0} cellAlign="center" wrapAround={true} slidesToShow={3} renderBottomCenterControls={false}>
                    {this.state.movies.splice(1, 11).map((item) => (
                        <>
                            <S.Teste>
                            <S.FilmsImages  src={item.image} alt="poster" />
                                <S.Grown>
                                    <p>{item.title}</p>
                              <a href="https://www.themoviedb.org/" target='_blank'><button>Assitir agora</button></a>
                                </S.Grown>
                            </S.Teste>
                            {/* {this.state.data.map((item) => (
                                <p>{item.release_date.replace(/-/g, " ").split(" ").reverse().splice(2, 3)}</p>
                            ))} */}  {/* replace(/-/g, " ").split(" ").reverse().join("/") */}
                        </>
                    ))}
                </S.Carrosel>
                <S.Carrosel defaultControlsConfig={{
                    nextButtonText: '>',
                    nextButtonStyle: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        top:'-1.5vh',
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
                        top: '-1.5vh',
                        right: '-0.5vw',
                        backgroundColor: '#0BE463',
                        color: "black",
                        fontSize: '35px',
                        borderRadius: '100%',
                        width: '4.5vw',
                        height: '8vh'
                    }
                }} style={Mover} speed={1000} autoplay={true} cellSpacing={0} cellAlign="center" wrapAround={true} slidesToShow={3} renderBottomCenterControls={false}>
                    {this.state.movies.splice(0,20 ).map((item) => (
                        <>
                        <S.Teste>
                            <S.FilmsImages  src={item.image} alt="poster" />
                                <S.Grown>
                                    <p>{item.title}</p>
                              <a href="https://www.themoviedb.org/" target='_blank'><button>Assitir agora</button></a>
                                </S.Grown>
                            </S.Teste>
                            {/* {this.state.data.map((item) => (
                                <p>{item.release_date.replace(/-/g, " ").split(" ").reverse().splice(2, 3)}</p>
                            ))} */}  {/* replace(/-/g, " ").split(" ").reverse().join("/") */}
                        </>
                    ))}
                </S.Carrosel>
            </S.BoxFilm>
        )
    }
}