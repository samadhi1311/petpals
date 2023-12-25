import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { auth } from '../firebase.config';
import Loader from './global/components/Loader/Loader';
import Navigation from './global/components/Navigation/Navigation';
import About from './pages/About/About';
import Add from './pages/Add/Add';
import Blog from './pages/Blog/Blog';
import Discover from './pages/Discover/Discover';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ResetPassword from './pages/Login/components/ResetPassword';
import SignUp from './pages/SignUp/SignUp';


function App() {
    /*    const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            const initializeApp = async () => {
                // Set loading to false after the initialization process (e.g., fetching data, etc.)
                await new Promise(resolve => setTimeout(resolve, 2000));
    
                // Check local storage for a flag indicating whether the app has been loaded before
                const hasAppBeenLoaded = localStorage.getItem('hasAppBeenLoaded');
    
                if (!hasAppBeenLoaded) {
                    // If it's the first time loading the app, set the flag in local storage
                    localStorage.setItem('hasAppBeenLoaded', 'true');
                }
    
                // App initialization is complete
                setLoading(false);
            };
    
            // Start the initialization process
            initializeApp();
        }, []);
    */
    return (
        <div>

            <BrowserRouter>
                <div className="gradient-background"></div>
                <header>
                    <Navigation />
                </header>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/discover" element={<Discover />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgot-password" element={<ResetPassword />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App
