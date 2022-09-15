import React, { Component } from 'react';
import axios from 'axios';

import * as S from '../Global/style'

const seriesTvAPI = axios.create({
    baseURL: "https://api.themoviedb.org/3/tv/popular?api_key=9c1e4db368543a07af6ae19e7078e24b&language=pt-BR&page=1"
});


export default class Series extends Component{
    state = {
        seriesTv: []
    }
    
    addSeriesTv = async() =>{
        const response = await seriesTvAPI.get()
        const info = response.data.results.map((item)=>{
        return{
            nomeSeriesTv: item.name,
            sinopse:item.overview,
            nota: item.vote_average,
            img: `https://image.tmdb.org/t/p/w300/${item.poster_path}`
        }
        })
        this.setState({seriesTv:info})
        console.log(response)
    }
    
    componentDidMount(){
        this.addSeriesTv();
      }
    
    render(){
        return(
            <S.ContainerFS>
            
                <h1>Series</h1>
                <ul>{this.state.seriesTv.map((item)=>(
                    <div>
                        <li>Series: {item.nomeSeriesTv}</li> 
                        <img src={item.img} alt={item.nomeFilme}/>
                        <p>Sinopse: {item.sinopse}</p> 
                        <p>Nota: {item.nota}</p>
                    </div>
                 ))}</ul>
            </S.ContainerFS>
        )
    }
}