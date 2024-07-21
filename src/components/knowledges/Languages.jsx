import React, { Component } from 'react'
import ProgressBar from './ProgressBar'

class Languages extends Component {
    state = {
        languages :[
            {id: 1, value: "HTML"},
            {id: 2, value: "CSS", xp: 2},
            {id: 3, value: "JavaScript", xp: 1.5},
            {id: 4, value: "PHP", xp: 1.5},
            {id: 5, value: "Python", xp: 2},
        ],
        frameworks :[
            {id: 1, value: "React", xp: 1},
            {id: 2, value: "Bootstrap", xp: 2},
            {id: 3, value: "Sass", xp: 1.5},
            {id: 4, value: "Vite.js", xp: 0.5},
        ]
    }
    render () {
        let {languages, frameworks} = this.state;

        return (
            <div className='languagesFrameworks'>
                <ProgressBar
                    Languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                    Languages={frameworks}
                    className="frameworksDisplay"
                    title="frameworks & bibliothèques"
                
                />
            </div>
        )
    }
}

export default Languages;