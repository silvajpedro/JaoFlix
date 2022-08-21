import styled from "styled-components"
import { Link } from "react-router-dom"
import Carousel from "nuka-carousel/lib/carousel"
export const BoxFilm = styled.div`
position: relative;
top: 6vh;
right: -25vw;
width: 97vw;
height:140vh;
display: flex;
flex-direction: column;
`
export const FilmsImages = styled.img`
position: relative;
left: 1vw;
transition: ease-in-out 0.5s;
height: 56vh;
border-radius: 30px 8px;
border: solid 5px;
outline: solid #2B2E 3px;
        
&:hover{
    /* transform: scale(110%);   */
}
`
export const SecondFilmsImages = styled.img`
position: relative;
left: -5vw;
transition: ease-in-out 0.5s;
height: 56vh;
border-radius: 10px;
border: solid 5px;
outline: solid #2B2E 3px;
        
&:hover{
    transform: scale(112%);  
}
`

export const ImagemHeader = styled.img`
position: relative;
z-index: -1;
height: 8.5vh;
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
border: solid red;
width: 28vw;
font-size: 22px;
justify-content: space-around;
list-style: none;
`
export const Begin = styled.div`
/* border: solid yellow; */
width: 45vw;
display: flex;
align-items: center;
`
export const Links = styled(Link)`
text-decoration: none;
color: white;
`
export const Li = styled.li`
&:hover{
    opacity:0.5 ;
    transform: scale(105%);
}
`
export const Carrosel = styled(Carousel)`
ul{
    height: 13vh;
    position: relative;
    top: -17vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    z-index: 1;
    list-style: none;
    transition: ease-in-out 0.5s;
    transform: scale(0%);
}
li{
    position: relative;
    display: flex;
    font-weight: 900;
    justify-content: center;
    right: 1.4vw;
    width: 15vw;
    border: solid;
    border-radius: 10px;
    background-color: #0BE463;
    padding: 5px;
}
border: solid;

`
export const Teste = styled.section`
position: relative;
left: -5vw;
width: 19.8vw;
height: 58vh;
&:hover{
    ul{
       transform: scale(100%);
    }
}
`
export const Botao = styled.button`
position: relative;
font-weight: 900;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
right: 1.4vw;
width: 15vw;
height: 5vh;
border-radius: 10px;
background-color: #0BE463;
font-size: 16px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
&:hover{
    transform: scale(108%);
}
`