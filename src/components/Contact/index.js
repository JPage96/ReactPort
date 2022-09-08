  
import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log("Submit Form", formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage("Invalid Email.");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Enter your ${e.target.name}.`);
            } else {
                setErrorMessage("");
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log("Handle Form", formState);
        }
    };


    return (
        <section className="my-5">
            <h1 className="titles">
                Reach Out!
            </h1>
            <hr></hr>
            <div className="boxes">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Jane Doe"
                            defaultValue={name}
                            onBlur={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="jane.doe@gmail.com"
                            defaultValue={email}
                            onBlur={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            name="message"
                            rows="5"
                            defaultValue={message}
                            onBlur={handleChange}
                        />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button data-testid="button" type="submit">
                        Submit
                    </button>
                </form>
            </div>

            <div className="boxes">
                <h3 className="titles">Contact Me!</h3>
                <ul>
                    <li>
                    <a className="contacts" href="mailto:pagemkcc@gmail.com">Pagemkcc@gmail.com</a>
                    </li>
                    <li>
                    <a className="contacts" href="https://github.com/JPage96" target="_blank" rel="noreferrer">GitHub</a> 
                    </li>
                </ul>
            </div>
        </section>
    );
}




export default Contact;