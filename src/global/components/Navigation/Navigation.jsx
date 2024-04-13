import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../../firebase.config';
import 'boxicons/css/boxicons.min.css';
import Logo from '../../assets/logo.svg';
import '../../styles/global.css';
import './Navigation.css';

import { useState, useEffect } from 'react';

export default function Navigation({ isLoggedIn }) {
	const [showMenu, setShowMenu] = useState();

	const handleMenuClick = () => {
		setShowMenu((prevShowMenu) => !prevShowMenu);
	};

	const handleLinkClick = () => {
		document.getElementById('nav').click(); // Trigger a click on the checkbox with id "nav"
	};

	return (
		<>
			<nav>
				<Link to='/PetPals' className='logo'>
					<img src={Logo} className='nav-logo' alt='PetPals' />
					PetPals
				</Link>

				<input type='checkbox' id='nav' className='hidden' onChange={handleMenuClick} />
				<label htmlFor='nav' className={`nav-btn ${showMenu ? 'open' : ''}`}>
					<i></i>
					<i></i>
					<i></i>
				</label>

				<div className={`nav-wrapper ${showMenu ? 'show' : ''}`}>
					<ul>
						<li>
							<Link to='PetPals/add' onClick={handleLinkClick}>
								Add
							</Link>
						</li>
						<li>
							<Link to='PetPals/discover' onClick={handleLinkClick}>
								Discover
							</Link>
						</li>
						<li>
							<Link to='PetPals/blog' onClick={handleLinkClick}>
								Blog
							</Link>
						</li>
						<li>
							<Link to='PetPals/about' onClick={handleLinkClick}>
								About
							</Link>
						</li>
						<li>
							{isLoggedIn ? (
								<Link to='PetPals/users/me' onClick={handleLinkClick}>
									<button>
										<i className='bx bxs-cat bx-sm'></i>
										{auth.currentUser.displayName || auth.currentUser.email}
									</button>
								</Link>
							) : (
								<Link to='PetPals/signup' onClick={handleLinkClick}>
									<button>
										<i className='bx bxs-log-in-circle bx-sm'></i>
										Sign Up
									</button>
								</Link>
							)}
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}
