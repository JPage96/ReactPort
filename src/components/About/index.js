import React from 'react';
import myResume from ".";

function About() {
    return (
        <section id="about">
            <div classname="row">
                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>Novice coder living in the midwest!
                    </p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Me!</h2>
                            <p className="address">
                                <span>Justice Page</span><br />
                                <span>Justice.Page1@pepsico.com</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href={myResume} className="button"><i className="fa fa-download"></i>Download Resume</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;