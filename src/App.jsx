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
				<header>
					<Navigation isLoggedIn={isLoggedIn} />
				</header>

				<AnimatePresence>
					<Routes>
						<Route path='petpals/' element={<Home />} />
						<Route path='petpals/users/:uid' element={<Profile isLoggedIn={isLoggedIn} currentUser={currentUser} />} />
						<Route path='petpals/users/me' element={<MyProfile isLoggedIn={isLoggedIn} />} />
						<Route path='petpals/posts/:postId' element={<Post isLoggedIn={isLoggedIn} currentUser={currentUser} />} />
						<Route path='petpals/about' element={<About />} />
						<Route path='petpals/add' element={<Add isLoggedIn={isLoggedIn} />} />
						<Route path='petpals/blog' element={<Blog />} />
						<Route path='petpals/discover' element={<Discover isLoggedIn={isLoggedIn} />} />
						<Route path='petpals/login' element={<Login />} />
						<Route path='petpals/forgot-password' element={<ResetPassword isLoggedIn={isLoggedIn} />} />
						<Route path='petpals/signup' element={<SignUp />} />
						<Route path='petpals/petpals' element={<Test />} />
						<Route path='petpals/*' element={<PageNotFound />} />
					</Routes>
				</AnimatePresence>
			</BrowserRouter>
		</>
	);
}

export default App;
