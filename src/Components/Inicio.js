import React, { Component } from "react";

import axios from "axios";

const FilmesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/top_rated?api_key=3cb82dd81c0e63bdd11ee02aefb8bb83&language=en-US&page=1"
})


export default class Inicio extends Component {
    state = {
        movies: [],
    }
    componentDidMount(){
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
        return (
            <div>          
            {this.state.movies.map((item) =>(
                <img src={item.image} alt="Oi"/>
            ))}
            </div>
        )
    }
}