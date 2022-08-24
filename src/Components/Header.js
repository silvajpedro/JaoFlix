import React, { Component } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Filmes from "./Filmes";
import Series from "./series";
import Alta from "./Alta"
import Inicio from "./Inicio";
import Logo from "../Images/semfundo.png"
import { Li,Begin, ImagemHeader,Headerbox,UL,Links, } from "./Style";


export default class Header extends Component {
    render() {
        return (
                <Headerbox>
                    <BrowserRouter>
                        <Begin>
                            <ImagemHeader src={Logo} />
                            <nav>
                                <UL>
                                    <Li>
                                        <Links to="/"> Inicio</Links>
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
                            <Route path="/" replace element={<Inicio/>}/> 
                            <Route path="/filmes" replace element={<Filmes />} />
                            <Route path="/series" replace element={<Series />} />
                            <Route path="/alta" replace element={<Alta />} />
                        </Routes>
                    </BrowserRouter>
                </Headerbox>
                
        )
    }
}