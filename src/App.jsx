import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './global/components/Navigation/Navigation';
import About from './pages/About/About';
import Add from './pages/Add/Add';
import Blog from './pages/Blog/Blog';
import Discover from './pages/Discover/Discover';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ResetPassword from './pages/Login/components/ResetPassword';
import SignUp from './pages/SignUp/SignUp';
import PageNotFound from './global/components/PageNotFound/PageNotFound';
import Profile from './pages/Profile/Profile';
import MyProfile from './pages/Profile/MyProfile';


function App() {

    return (
        <>

            <BrowserRouter>
                <div className="gradient-background"></div>
                <div className='white-overlay'></div>
                <header>
                    <Navigation />
                </header>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/*" element={<PageNotFound />} />
                    <Route path="/user/:uid" element={<Profile />} />
                    <Route path="/user/me" element={<MyProfile />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/discover" element={<Discover />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgot-password" element={<ResetPassword />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default App
