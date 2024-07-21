import React from 'react';
import { NavLink } from 'react-router-dom';
import { House } from "react-bootstrap-icons"; 

const NotFound = () => {
    return (
        <div className='notFound'>
            <div className="notFoundContent">
                <h3>Désolé cette page n'hexiste pas !</h3>
                < NavLink exact to="/">
                    <i><House /></i>
                    <span>Accueil</span>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;