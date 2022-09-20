import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import * as S from './Global/style'
import Home from './components/Home.js'
import Filmes from './components/Filmes'
import Series from './components/Series.js'

export default class App extends Component{
    render(){
        return(
            <Router>
                <S.GlobalStyle />
                <S.Menu>
                    <ul>
                        <li><Link className='link' to={"/"}>Home</Link></li>
                        <li><Link className='link' to={"/filmes"}>Filmes</Link></li>
                        <li><Link className='link' to={"/series"}>Series</Link></li>
                    </ul>
                </S.Menu>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/filmes' element={<Filmes/>} />
                    <Route path='/series' element={<Series/>} />
                </Routes>            
            </Router>
         
        )
    }
}