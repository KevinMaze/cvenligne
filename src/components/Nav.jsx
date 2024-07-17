import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idcontent">
                    <img src=".\public\media\IMG_20231011_175929_937.jpg" alt="profil" />
                    <h3>Maze Kévin</h3>
                </div>
            </div>

            <div className="nav-link">
                <ul>
                    <NavLink exact to="/" activeClassName="nav-active">
                        <i className="fa-solid fa-house"></i>
                        <span>Accueil</span>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Nav;