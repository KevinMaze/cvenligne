import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import PortFolio from './pages/PortFolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';



const App = () => {
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home />} exact />
                    <Route path="/knowledges" element={ <Knowledges />} exact />
                    <Route path="/portfolio" element={ <PortFolio />} exact />
                    <Route path="/contact" element={ <Contact />} exact />
                    <Route path="*" element={ <NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;