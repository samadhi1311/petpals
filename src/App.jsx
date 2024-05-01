import React from 'react';
import { useState, useEffect } from 'react';
import { auth } from '../firebase.config';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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
import Post from './pages/Post/Post';
import Test from './pages/Test/Test';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(!!auth.currentUser);
	const [currentUser, setCurrentUser] = useState();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setIsLoggedIn(!!user);
			setCurrentUser(auth.currentUser);
		});

		return () => unsubscribe();
	}, []);

	return (
		<>
			<BrowserRouter>
				<div className='gradient-background'></div>
				<div className='white-overlay'></div>
				<header>
					<Navigation isLoggedIn={isLoggedIn} />
				</header>

				<AnimatePresence>
					<Routes>
						<Route path='PetPals/' element={<Home />} />
						<Route path='PetPals/users/:uid' element={<Profile isLoggedIn={isLoggedIn} currentUser={currentUser} />} />
						<Route path='PetPals/users/me' element={<MyProfile isLoggedIn={isLoggedIn} />} />
						<Route path='PetPals/posts/:postId' element={<Post isLoggedIn={isLoggedIn} currentUser={currentUser} />} />
						<Route path='PetPals/about' element={<About />} />
						<Route path='PetPals/add' element={<Add isLoggedIn={isLoggedIn} />} />
						<Route path='PetPals/blog' element={<Blog />} />
						<Route path='PetPals/discover' element={<Discover isLoggedIn={isLoggedIn} />} />
						<Route path='PetPals/login' element={<Login />} />
						<Route path='PetPals/forgot-password' element={<ResetPassword isLoggedIn={isLoggedIn} />} />
						<Route path='PetPals/signup' element={<SignUp />} />
						<Route path='PetPals/PetPals' element={<Test />} />
						<Route path='PetPals/*' element={<PageNotFound />} />
					</Routes>
				</AnimatePresence>
			</BrowserRouter>
		</>
	);
}

export default App;
