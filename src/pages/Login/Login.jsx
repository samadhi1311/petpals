import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from '../../global/components/Navigation/Navigation';
import './Login.css';
import GoogleIcon from '../../global/assets/icons8-google.svg';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        // TODO: Implement login logic

        // If login is successful, redirect to the home page
    };
    return (
        <>

            <div className="gradient-background"></div>
            <header>
                <Navigation></Navigation>
            </header>
            <section>
                <div className="form-container">

                    <h2>Continue to petpals, </h2>

                    <form>
                        <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />

                        <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />

                        <div className="submit">
                            <button onClick={handleSubmit}>Continue</button>
                        </div>

                        <Link to="/forgot-password">Forgot password?</Link>
                    </form>

                    <div className="seperator">
                        <hr />
                        <span>or continue with</span>
                        <hr />
                    </div>

                    <div className="social">
                        <button className="google" style={{}}>
                            <img src={GoogleIcon} alt='Google' style={{ width: '1rem', height: '1rem', paddingRight: '1rem' }} /> Google
                        </button>
                    </div>

                    <div className="sign-up">
                        <p>Not a member yet? <Link to="/signup">Sign up</Link></p>
                    </div>
                </div>
            </section>
        </>
    );
}