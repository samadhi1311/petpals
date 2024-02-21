import { Link } from 'react-router-dom';
import './Test.css';

export default function Test() {
	return (
		<main className='test-main'>
			<section className='test-main-container'>
				<div className='test-container'>
					<h2 className='test-main-heading'>_welcome beta tester!</h2>
					<p className='test-main-description'>
						thank you for your valuable time! let's get started.
					</p>
					<Link to='/'>
						<button className='test-start-button'>
							<i className='bx bx-code-alt bx-md'></i>
							<p className='test-start-button-text'>start</p>
						</button>
					</Link>
				</div>
			</section>
		</main>
	);
}
