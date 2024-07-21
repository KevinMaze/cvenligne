import React from 'react';
import { Book } from 'react-bootstrap-icons';
import { Tv } from 'react-bootstrap-icons';
import { PersonWalking } from 'react-bootstrap-icons';
import { Laptop } from 'react-bootstrap-icons';
import { Controller } from 'react-bootstrap-icons';



const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Hobbies</h3>
            <ul>
                <li className='hobby'>
                    <i>< Book /></i>
                    <span>Lecture</span>
                </li>
                <li className='hobby'>
                    <i>< Tv /></i>
                    <span>Cinéma</span>
                </li>
                <li className='hobby'>
                    <i>< PersonWalking /></i>
                    <span>Sport</span>
                </li>
                <li className='hobby'>
                    <i>< Laptop /></i>
                    <span>Informatique</span>
                </li>
                <li className='hobby'>
                    <i>< Controller /></i>
                    <span>Gaming</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;