// React
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Layout from '../components/Layout/Layout';

// Pages
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import FicheLogement from '../pages/FicheLogement/FicheLogement';
import Error from '../pages/Error/Error';

const RoutesPath = () => {
  return (
    <BrowserRouter>
    <Layout>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/logements/:id" element={<FicheLogement/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default RoutesPath