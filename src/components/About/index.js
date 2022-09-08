import React from 'react';

function About() {
    return (
        <section id="about">
            <div classname="row">
                <div>
                    <h2>About Me</h2>
                    <p>Novice coder living in the midwest!
                    </p>
                    <div className="row">
                        <div className="contact-details">
                            <h2>Contact Me!</h2>
                            <p className="address">
                                <span>Justice Page</span><br />
                                <span>Justice.Page1@pepsico.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;