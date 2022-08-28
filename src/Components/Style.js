import styled from "styled-components"
import { Link } from "react-router-dom"
import Carousel from "nuka-carousel/lib/carousel"

export const SearchTeste = styled.section`
position: relative;
top: -11vh;
right: -22vw;
height: 58vh;
p{
    position: relative;
    top: 1.5vh;
    display: flex;
    font-weight: 900;
    justify-content: center;
    width: 15vw;
    border: solid;
    border-radius: 10px;
    background-color: #0BE463;
    padding: 5px;
}
a{
    text-decoration: none;
}
button{
font-weight: 900;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
width: 15vw;
height: 5vh;
border-radius: 10px;
background-color: #0BE463;
font-size: 16px;
cursor: pointer;
&:hover{
    transform: scale(108%);
}
}
div{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: -21vh;
    right:-0.1vw;
    transform: scale(0.1%);
    transition: ease-in-out 0.5s;
}
&:hover{
    div{
        transform: scale(105%);
    }
}

`
export const SearchImages = styled.img`
transition: ease-in-out 0.5s;
height: 56vh;
border-radius: 30px 8px;
border: solid 5px;
outline: solid #2B2E 3px;
`
export const BoxFilm = styled.div`
position: relative;
top: -7vh;
right: -25vw;
width: 97vw;
height:132vh;
display: flex;
flex-direction: column;
`

export const Carrosel = styled(Carousel)`
p{
    position: relative;
    top: 1.5vh;
    display: flex;
    font-weight: 900;
    justify-content: center;
    width: 15vw;
    border: solid;
    border-radius: 10px;
    background-color: #0BE463;
    padding: 5px;
}
a{
    text-decoration: none;
}
button{
font-weight: 900;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
width: 15vw;
height: 5vh;
border-radius: 10px;
background-color: #0BE463;
font-size: 16px;
cursor: pointer;
&:hover{
    transform: scale(108%);
}
}
`
export const Teste = styled.section`
position: relative;
left: -5vw;
width: 18.5vw;
height: 58vh;
&:hover{
    div{
       transform: scale(100%);
    }
}
`
export const FilmsImages = styled.img`
position: relative;
transition: ease-in-out 0.5s;
height: 56vh;
border-radius: 30px 8px;
border: solid 5px;
outline: solid #2B2E 3px;
`
export const Grown = styled.div`
   position: relative;
    top: -20vh;
    height: 16vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 1;
    transition: ease-in-out 0.6s;
    transform: scale(0%);
`

// Daqui pra baixo estilização das rotas

export const ImagemHeader = styled.img`
position: relative;
z-index: -1;
height: 10vh;
`
export const Headerbox = styled.header`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 50%;
`
export const UL = styled.ul`
display: flex;
width: 28vw;
font-size: 22px;
justify-content: space-around;
align-items: center;
list-style: none;
`
export const Begin = styled.div`
width: 45vw;
display: flex;
align-items: center;

`
export const Links = styled(Link)`
text-decoration: none;
color: white;
`
export const Li = styled.li`
font-size: 26px;
position: relative;
right: 3vw;
&:hover{
    opacity:0.5 ;
    transform: scale(105%);
}
`