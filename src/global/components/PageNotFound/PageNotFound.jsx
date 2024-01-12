import { Link } from 'react-router-dom';
import Astronaut from '../../assets/Cat astronaut-rafiki.svg';
import './PageNotFound.css'

export default function PageNotFound() {
    return (
        <main className='error-404'>
            <div className="error-404-image">
                <img src={Astronaut} alt="cat astronaut" className='cat-astronaut' />
            </div>
            <div className="error-404-text">
                <h1 className='404-title'>Oh...<br />You seems to be lost.</h1>
                <p className='404-description'>Let's head back home safely, okay?</p>
                <Link to="/">
                    <button className='error-404-button'>
                        <i className='bx bxs-home-heart bx-xm'></i>
                        Home
                    </button>
                </Link>

            </div>
        </main>
    )
}