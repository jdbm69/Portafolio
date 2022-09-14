import React from "react";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Tienda from "./pages/Tienda";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Route, Routes } from 'react-router-dom';

export default function App() {
    return (
    <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/tienda" element={<Tienda />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
        </Routes>    
    </>
    )
};