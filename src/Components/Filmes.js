import axios from "axios";
import React, { Component } from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel/lib/carousel";

const FilmesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=3cb82dd81c0e63bdd11ee02aefb8bb83&language=pt-br&page=1"
})

const BoxFilm = styled.div`
position: relative;
top: 6vh;
right: -25vw;
width: 97vw;
height:140vh;
display: flex;
flex-direction: column;
`
const FilmsImages = styled.img`
position: relative;
left: -5vw;
transition: ease-in-out 0.5s;
height: 60vh;
&:hover{
    transform: scale(115%);  
}
`
const Suma = styled.div`
display: none;
`
export default class Movies extends Component {
    state = {
        movies: [],
        data: []
    }
    componentDidMount() {
        this.getMovies()
        this.fundo()
    }
   fundo = () => {
        this.setState({
            fundo: document.body.style.backgroundColor = "#2B2E43"
        })
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
            position:'relative',
            top:'-1vh',
            paddingTop: '20px',
            paddingBottom: '30px',
            paddingLeft: '100px',
            width: '89vw'
        }
        return (
            <>
            <BoxFilm>
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
                }}
                 autoplay={true}  speed={500} style={Mover} cellSpacing={0} cellAlign="center" wrapAround={true} slidesToShow={3} renderBottomCenterControls={false}>

                    {this.state.movies.splice(0, 7).map((item) => (
                        <>
                            <ul>
                                {/* <li>{item.title}</li>
                        <li>{item.overview}</li>
                        <li>{item.vote_average}</li> */}
                            </ul>
                            <FilmsImages src={item.image} alt="poster" />
                            {/* <FilmsImages className="imagem2" src={item.image2} alt="poster" /> */}

                            {/* replace(/-/g, " ").split(" ").reverse().join("/") */}
                            {/* {this.state.data.map((item) => (
                                <p>{item.release_date.replace(/-/g, " ").split(" ").reverse().splice(2, 3)}</p>
                            ))} */}
                        </>

                    ))}
                </Carousel>
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
                }} style={Mover} speed={1000} autoplay={true}  cellSpacing={0} cellAlign="center" wrapAround={true} slidesToShow={3} renderBottomCenterControls={false}>
                    {this.state.data.splice(1, 7).map((item) => (
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
            </>
        )
    }
}