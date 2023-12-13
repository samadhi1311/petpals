import { Link, Routes } from "react-router-dom";
import Logo from '../../assets/logo.svg';
import './Navigation.css';


// Inside your Navigation component
import { useState, useRef, useEffect } from "react";

export default function Navigation() {
    // State to track the visibility of the dropdown menu
    const [showMenu, setShowMenu] = useState(false);
    const [clickCount, setClickCount] = useState(0);


    // Function to toggle the visibility of the dropdown menu
    const handleMenuClick = () => {
        setShowMenu(!showMenu);
        setClickCount((prevClickCount) => prevClickCount + 1);
    };

    return (
        <html>
            <head>
                <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>

            </head>
            <nav>
                {/* Logo and link to the home page */}
                <Link to="/" className="logo">
                    <img src={Logo} alt='PetPals' />
                    PetPals
                </Link>

                {/* Menu icon using box-icon */}
                <div
                    className={`menu-icon ${clickCount % 2 === 0 ? "spin" : "anticlockwise"}`}
                    onClick={handleMenuClick}
                >
                    <i className='bx bx-menu'></i>
                </div>

                {/* Dropdown menu */}
                <div className={`nav-links ${showMenu ? "show" : ""}`}>
                    <Link to="/add">Add</Link>
                    <Link to="/discover">Discover</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login">
                        <button>
                            <i className='bx bxs-log-in-circle bx-sm' ></i>
                            Login
                        </button>
                    </Link>
                </div>
            </nav>
        </html>
    );
}
