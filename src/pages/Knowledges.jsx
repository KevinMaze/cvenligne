import React from 'react';
import Nav from '../components/Nav';
import Experiences from '../components/knowledges/Experience';
import OtherSkills from '../components/knowledges/OtherSkills';
import Languages from '../components/knowledges/Languages';
import Hobbies from '../components/knowledges/Hobbies';


const Knowledges = () => {
    return (
            <div className='knowledges'>
                <Nav />
                <div className='knowledgesContent'>
                    <Languages/>
                    <Experiences/>
                    <OtherSkills/>
                    <Hobbies/>
                </div>
            </div>
)};

export default Knowledges;