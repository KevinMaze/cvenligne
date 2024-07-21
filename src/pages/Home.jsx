import React from 'react';
import Nav from '../components/Nav';

const Home = () => {
    return (

            <div className='home'>
                <Nav />
                <div className="homeContent">
                    <div className='content'>
                        <h1>mazé kévin</h1>
                        <h2>Développeur front-end</h2>
                        <div className="pdf">
                            <a href="*" target='_blank'>Télécharger le CV</a>
                        </div>
                    </div>
                </div>
            </div>
            
    );
};

export default Home;