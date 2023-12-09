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
        <header>
            <Navigation></Navigation>
        </header>
        <section>
            <div className="login-page">
                <div className="login-form">
                    <h1>Log In</h1>

                    <input type="email" style={{width: "280px"}} placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <input type="password"  style={{width: "280px"}} placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    <button onClick={handleSubmit}>LOG IN</button>
                    <Link to="/forgot-password">Forgot password?</Link>
                    <hr className="horizontal-bar" />
                    <p className="or-login-with">
                    <span className="horizontal-line"></span> or log in with <span className="horizontal-line"></span>
                    </p>
                    <div className="social-login">
                        <button className="facebook" style={{ backgroundColor: '#3C5A99', color: '#fff', padding: '8px', fontSize: '14px', borderRadius: '8px' }}>
                            <i className='bx bxl-facebook-square' style={{ color: '#fff', fontSize: '20px' }}></i> Facebook
                        </button>
                        <div className="button-padding"></div>
                        <button className="google" style={{ padding: '8px', fontSize: '14px', borderRadius: '8px' }}>
                            <img src={GoogleIcon} alt='Google' style={{ width: '20px', height: '20px' }} />
                            Google
                        </button>
                    </div>
                    <p>Need an account? <Link to="/signup">Sign up</Link></p>
                </div>
            </div>
        </section>
        </>
    );
}