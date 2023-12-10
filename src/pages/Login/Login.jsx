import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from '../../global/components/Navigation/Navigation';
import './Login.css';
import '../../global/styles/global.css';
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
            <section>x
                <div className="login-page">
                    <div className="login-form box-shadow">
                        <h2>Continue to petpals, </h2>

                        <input type="email" style={{ width: "280px" }} placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />

                        <input type="password" style={{ width: "280px" }} placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />

                        <button onClick={handleSubmit}>Continue</button>

                        <Link to="/forgot-password">Forgot password?</Link>

                        <hr className="horizontal-bar" style={{ paddingTop: "1rem" }} />
                        <p className="or-login-with">
                            <span className="horizontal-line"></span> or continue with <span className="horizontal-line"></span>
                        </p>

                        <div className="social-login">
                            <button className="facebook" style={{ backgroundColor: '#0866FF', color: '#fff' }}>
                                <i className='bx bxl-facebook-circle' style={{ color: '#fff' }}></i> Facebook
                            </button>

                            <div className="button-padding"></div>

                            <button className="google" style={{}}>
                                <img src={GoogleIcon} alt='Google' style={{ width: '1rem', height: '1rem' }} /> Google
                            </button>
                        </div>
                        <p>Not a member yet? <Link to="/signup">Sign up</Link></p>
                    </div>
                </div>
            </section>
        </>
    );
}