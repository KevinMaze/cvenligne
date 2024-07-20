import React from 'react';
import { NavLink } from 'react-router-dom';
import { House } from "react-bootstrap-icons";
import { Book } from "react-bootstrap-icons";
import { CardImage } from "react-bootstrap-icons";
import { PersonLinesFill } from "react-bootstrap-icons";
import { Facebook } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";
import { TwitterX } from "react-bootstrap-icons";
import { CodeSlash } from "react-bootstrap-icons";


// style={isActive => ({
//     color: isActive ? '#36D0EA' : '#4FEDD2'
// })}

const Nav = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="id-content">
                    <img src=".\public\media\IMG_20231011_175929_937.jpg" alt="profil" />
                    <h3>Maze Kévin</h3>
                </div>
            </div>

            <div className="nav-link">
                <ul>
                    <li>
                        <NavLink to="/" >
                            <i><House /></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/knowledges" activeclassname="nav-active">
                            <i><Book /></i>
                            <span>Expérience</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" activeclassname="nav-active">
                            <i>< CardImage /></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeclassname="nav-active">
                            <i>< PersonLinesFill /></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="social-network">
                <ul>
                    <li>
                        <a href="https://www.google.com" target='_blank' rel="noopener noreferrer"><i>< Facebook /></i></a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target='_blank' rel="noopener noreferrer"><i>< TwitterX/></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/KevinMaze" target='_blank' rel="noopener noreferrer"><i>< Github/></i></a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target='_blank' rel="noopener noreferrer"><i>< CodeSlash/></i></a>
                    </li>
                </ul>
                <div className='signature'>
                    <p>MAZE Kévin - 2024</p>
                </div>
            </div>
        </div>
    );
};

export default Nav;