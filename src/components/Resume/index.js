import React from 'react';
import Nav from '../Navigation';
//import runBuddyImg from '../assets/run-buddy.PNG';
//import beerMeImg from '../assets/BeerMe.png';
//import comEventImg from '../assets/ComEvent.png';
//import tipsyTechImg from '../assets/TipsyTech/png';

function Project() {
    const applications = [
        {
            title: 'Run Buddy',
            appLink: '',
            //picture: runBuddyImg
        },
        {
            title: 'BeerMe',
            appLink: '',
            //picture: 
        },
        {
            title: 'Community Events',
            appLink: 'https://whispering-crag-28124.herokuapp.com/',
            //picture: comEventImg
        },
        {
            title: 'Tipsy Tech',
            appLink: '',
            //picture: tipsyTechImg
        },
    ];

    return (
        <div className="project-container flex-row space-evenly">
            {applications.map(project => (
                <article className="project-card" key={project.title}>
                        <div className="project-title flex-row align-item-center" key={project.title}>
                            <h3><a href={project.appLink} target="_blank" className="appLink">{project.title}</a></h3>
                        </div>
                </article>
            ))}
        </div>

    )

}

export default Project;
