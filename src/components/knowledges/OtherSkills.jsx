import React from 'react';
import { CheckSquare } from 'react-bootstrap-icons';

const OtherSkills = () => {
    return (
        <div>
            <div className="otherSkills">
                <h3>Autres Compétences</h3>
                <div className="list">
                    <ul>
                        <li><i>< CheckSquare/></i> Anglais</li>
                        <li><i>< CheckSquare/></i> Github</li>
                        <li><i>< CheckSquare/></i> SEO</li>
                        <li><i>< CheckSquare/></i> Méthodes Agiles</li>
                    </ul>
                    <ul>
                        <li><i>< CheckSquare/></i> Figma</li>
                        <li><i>< CheckSquare/></i> Photoshop</li>
                        <li><i>< CheckSquare/></i> Première Pro</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OtherSkills;