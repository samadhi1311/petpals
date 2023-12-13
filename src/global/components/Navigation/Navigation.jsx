import { Link } from "react-router-dom";
import Logo from '../../assets/logo.svg';
import '../../styles/global.css';
import './Navigation.css';

import { useState } from "react";

export default function Navigation() {
    const [showMenu, setShowMenu] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
        setClickCount((prevClickCount) => prevClickCount + 1);
    };

    return (
        <>
            <nav>
                <Link to="/" className="logo">
                    <img src={Logo} alt='PetPals' />
                    PetPals
                </Link>

                <input type="checkbox" id="nav" className="hidden" />
                <label htmlFor="nav" className={`nav-btn ${clickCount % 2 === 0 ? "" : "open"}`} onClick={handleMenuClick}>
                    <i></i>
                    <i></i>
                    <i></i>
                </label>

                <div className={`nav-wrapper ${showMenu ? "show" : ""}`}>
                    <ul>
                        <li><Link to="/add">Add</Link></li>
                        <li><Link to="/discover">Discover</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li>
                            <Link to="/login">
                                <button>
                                    <i className='bx bxs-log-in-circle bx-sm' ></i>
                                    Login
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
