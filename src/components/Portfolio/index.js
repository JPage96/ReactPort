import React from 'react';
import Project from '../Resume/index';

function Portfolio() {
    return (
        <section id="Portfolio">
            <h1>Projects</h1>
            <div className="project-container flex-row">
                <Project></Project>
            </div>
        </section>
    )
}

export default Portfolio;