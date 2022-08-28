import axios from "axios";
import React, { Component } from "react";
import * as S from "./Style"
import icone from "../Images/pesquisa.png"
const FilmesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/top_rated?api_key=3cb82dd81c0e63bdd11ee02aefb8bb83&language=pt-br&page=2"
})

export default class Movies extends Component {
    state = {
        movies: [],
        FilterMovies: [],
        troca: 0
    }
    componentDidMount() {
        this.getMovies()
    }
    getMovies = async () => {
        const resposta = await FilmesApi.get()
        const allFilmes = resposta.data.results.map((item) => {
            return {
                ...item,
                image: `https://image.tmdb.org/t/p/w500${item.poster_path}`
            }

        })
        this.setState({
            movies: allFilmes,

        })
        console.log(allFilmes)
    }

    handleChange = (event) => {
        const ListaFiltrada = this.state.movies.filter((item) => {
            if (event.target.value === "") {
                return ""
            } else if (item.original_title.toLowerCase().includes(event.target.value.toLowerCase())) {
                return true
            }
        })
        this.setState({
            FilterMovies: ListaFiltrada
        })
        console.log(this.state.FilterMovies)
    }
    Esquerda = () => {
        if (this.state.troca % 2 === 0) {
            const search = document.querySelector('.searchbox')
            const icone = document.querySelector('.procurar')
            icone.style.transition = "ease-in-out 0.9s"
            icone.style.right = "-37.5vw"
            search.style.transition = "ease-in-out 0.9s"
            search.style.visibility = "initial"
            search.style.width = "20vw"
            this.setState({
                troca: this.state.troca += 1
            })
        } else {
            const icone = document.querySelector('.procurar')
            const search = document.querySelector('.searchbox')
            icone.style.transition = "ease-in-out 0.8s"
            icone.style.right = "-57.5vw"
            search.style.transition = "ease-in-out 0.8s"
            search.style.width = "0vw"
            search.style.visibility = "hidden"
            this.setState({
                troca: this.state.troca += 1
            })
        }
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
            <>
                <img className="procurar" onClick={this.Esquerda} src={icone} alt="search icon" />
                <div className="caixaDePesquisa">
                    <input onChange={this.handleChange} className="searchbox" type="text" />
                </div>
                <div >
                    {this.state.FilterMovies.slice(0, 1).map((item, index) => (
                        <S.SearchTeste key={index}>
                            <S.SearchImages src={item.image} alt='posters' />
                            <div>
                             <p>{item.title}</p>
                             <a href="https://www.themoviedb.org/" target='_blank'><button>Assitir agora</button></a>
                            </div>
                        </S.SearchTeste>
                    ))}

                </div>
                <S.BoxFilm>
                    <S.Carrosel defaultControlsConfig={{
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
                        autoplay={true} speed={500} style={Mover} cellSpacing={0} cellAlign="center" wrapAround={true} slidesToShow={3} renderBottomCenterControls={false}>

                        {this.state.movies.slice(0, 10).map((item) => (
                            <>
                                <S.Teste>
                                    <S.FilmsImages src={item.image} alt="poster" />
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
                        {this.state.movies.slice(5).map((item) => (
                            <>
                                <S.Teste>
                                    <S.FilmsImages src={item.image} alt="poster" />
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
            </>
        )
    }
}