import React, { Component } from 'react';

import * as S from '../Global/style'

export default class Home extends Component{
    render(){
        return(
            <>
                <S.Container>
                    <S.Box>
                        <fieldset>
                            <legend>Bem vindo</legend>
                            <h1>Esse é um site de entrenimentos de Filmes e Series</h1>
                        </fieldset>
                    </S.Box>     
                </S.Container>
            </>
        )
    }
}