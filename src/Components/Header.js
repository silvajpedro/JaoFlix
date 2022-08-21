import React, { Component } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Filmes from "./Filmes";
import Series from "./series";
import Alta from "./Alta"
import Inicio from "./Inicio";
import Logo from "../Images/JãoFlix3.png"
import styled from "styled-components";


const ImagemHeader = styled.img`
height: 8.5vh;
`
const Headerbox = styled.header`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 50%;
`
const UL = styled.ul`
display: flex;
border: solid red;
overflow: hidden;
width: 35vw;
font-size: 22px;
justify-content: space-around;
list-style: none;
`
const Links = styled(Link)`
text-decoration: none;
color: white;
`
const Li = styled.li`
&:hover{
    opacity:0.5 ;
    transform: scale(105%);
}
`
const Begin = styled.div`
border: solid;
display: flex;
align-items: center;
`

export default class Header extends Component {
    render() {
        return (
            <div>
                <Headerbox>
                    <BrowserRouter>
                        <Begin>
                            <ImagemHeader src={Logo} />
                            <nav>
                                <UL>
                                    <Li>
                                        <Links to="/inicio"> Inicio</Links>
                                    </Li>
                                    <Li>
                                        <Links to="/series">Séries</Links>
                                    </Li>
                                    <Li>
                                        <Links to="/filmes">Filmes</Links>
                                    </Li>
                                    <Li>
                                        <Links to="/alta">Em alta</Links>
                                    </Li>
                                </UL>
                            </nav>
                        </Begin>
                        <Routes>
                            <Route path="/inicio" replace element={<Inicio/>}/> 
                            <Route path="/filmes" replace element={<Filmes />} />
                            <Route path="/series" replace element={<Series />} />
                            <Route path="/alta" replace element={<Alta />} />
                        </Routes>
                    </BrowserRouter>

                </Headerbox>
            </div>
        )
    }
}