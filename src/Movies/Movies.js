import axios from "axios";
import React, {Component} from "react";

const FilmesApi = axios.create({
    baseURL:"https://api.themoviedb.org/3/movie/popular?api_key=3cb82dd81c0e63bdd11ee02aefb8bb83&language=pt-br&page=1"
})

export default class Movies extends Component{
    render(){
        return(
            <div>

            </div>
        )
    }
}