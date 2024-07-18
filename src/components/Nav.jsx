import React from 'react';
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
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fa-solid fa-house"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/knowledges" activeClassName="navActive">
                            <i className="fa-solid fa-house"></i>
                            <span>Expérience</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className="fa-solid fa-house"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fa-solid fa-house"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.google.com" target='_blank' rel="noopener noreferrer"><i className='fab fa-linkedin'></i>Linkedin</a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target='_blank' rel="noopener noreferrer"><i className='fab fa-github'></i>GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target='_blank' rel="noopener noreferrer"><i className='fab fa-twitter'></i>Twitter</a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target='_blank' rel="noopener noreferrer"><i className='fab fa-codepen'></i>Codepen</a>
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