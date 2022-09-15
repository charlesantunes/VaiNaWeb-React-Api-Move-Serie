import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;    
        text-decoration: none;
        list-style: none;
     }
`
export const Menu = styled.div`
    position: absolute;
    top: 0;
    background-color: aqua;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    ul{
      width: 70%;
      display: flex;
      justify-content: space-evenly;
    }
    li{
      font-size: 1.5rem;
    }
    Link{
      
    }
    `
export const Container = styled.section`
    position: relative;
    top:10vh;
    width:100vw;
    height:90vh;
    background-color: #999;
    display: flex;
    justify-content:center;
    align-items:center;
    justify-content: space-around;
    flex-wrap: wrap;
`
export const ContainerFS = styled.section`
    position: relative;
    top:10vh;
    width:100%;
    height:auto;
    background-color: #999;
    h1{
        font-size: 2rem;
        text-align: center;
        margin-bottom: 20px;
    }
    ul{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    div{
        width: 20.6%;
        height: 108vh;
        margin-bottom: 2vh;
        border: outset 1px Darkgray;
        border-width:5px;
    }
    li{
        text-align: center;
        font-size: 1.2rem;
        font-weight: bolder;
        height: 6vh;
    }
    img{
        width: 300px;
    }
    `
export const Box = styled.div`
    position: absolute;
    top: 10vh;
    background-color: gray;
    width: 60%;
    height: 60vh;
    border-radius: 20px;
    border: outset 1px Darkgray;
    border-width:5px;
    
    fieldset{
        width: 90%;
        height: 55vh;
        margin: auto;
        border: solid 2px;
        border-radius: 20px;
    }
    fieldset legend{
        font-size: 2em;
        text-align: center;
    }
    h1{
        width: 100%;
        height: 100%;
        font-size: 1.6em;
        display: flex;
        justify-content: center;
        align-items: center;
        
        
    }
    @media(max-width:841px){
        h1{font-size: 1em;}
    }

`