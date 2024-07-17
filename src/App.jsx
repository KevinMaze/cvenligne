
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
                    <Route path="/" component={<Home/>} />
                    <Route path="/portfolio" component={PortFolio} />
                    <Route path="/knowledges" component={Knowledges} />
                    <Route path="/contact" component={Contact} />
                    <Route component={NotFound} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;