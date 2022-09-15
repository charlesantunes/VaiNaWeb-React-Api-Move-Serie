import React, { Component } from 'react';
import axios from 'axios';

import * as S from '../Global/style'

//chave da api: 9c1e4db368543a07af6ae19e7078e24b
//link da comunicação: https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
// chave da api + link da comunicação: https://api.themoviedb.org/3/movie/popular?api_key=9c1e4db368543a07af6ae19e7078e24b&language=en-US&page=1

const filmesAPI = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=9c1e4db368543a07af6ae19e7078e24b&language=pt-BR&page=1"
});

export default class Filmes extends Component{
    state = {
        move: []
    }

    addMove = async() =>{
       const response = await filmesAPI.get()
       const info = response.data.results.map((item)=>{
        return{
            nomeFilme: item.title,
            sinopse:item.overview,
            nota: item.vote_average,
            img: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
        }
       })
       console.log(response)
       this.setState({move:info})
    //    console.log(this.state.move)
    }
    
    componentDidMount(){
        this.addMove();
    }

    render(){
        return(
            <S.ContainerFS>

                <h1>Filmes</h1>
                <ul>{this.state.move.map((item)=>(
                    <div>
                       <li>Filme: {item.nomeFilme}</li> 
                       <img src={item.img} alt={item.nomeFilme}/>
                       <p>Sinopse: {item.sinopse}</p> 
                       <p>Nota: {item.nota}</p>
                    </div>
                ))}</ul>
            </S.ContainerFS>
        )
    }
}