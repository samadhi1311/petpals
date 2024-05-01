import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transitions } from '../../global/Transitions';
import './Test.css';

export default function Test() {
	return (
		<motion.main className='test-main' variants={transitions} initial='hidden' animate='visible' exit='exit'>
			<section className='test-main-container'>
				<div className='test-container'>
					<h2 className='test-main-heading'>_welcome beta tester!</h2>
					<p className='test-main-description'>thank you for your valuable time! let's get started. First create an account and create a post.</p>
					<Link to='/PetPals/signup'>
						<button className='test-start-button'>
							<i className='bx bx-code-alt bx-md'></i>
							<p className='test-start-button-text'>start</p>
						</button>
					</Link>
				</div>
			</section>
		</motion.main>
	);
}
