import { Link } from "react-router-dom";
import Logo from '../../assets/logo.svg';
import './Navigation.css';

export default function Navigation() {
    return (
        <nav>
            {/* TODO: Prabhodya - design the Navigation */}

            <Link to="/" className="logo"><img src={Logo} alt='PetPals' />PetPals</Link>

            <div className="nav-links">
                <Link to="/">Add</Link>
                <Link to="/">Discover</Link>
                <Link to="/about">About</Link>
                <Link to="/login">
                    <button>
                        <i class='bx bxs-log-in-circle bx-sm' ></i>
                        Login
                    </button>
                </Link>
            </div>

        </nav>
    )
}