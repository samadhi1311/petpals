import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import HeroImage from '../../global/assets/Adopt a pet-bro.svg';
import Logo from '../../global/assets/logo.svg';
import { transitions } from '../../global/Transitions';

export default function Home() {
	const controlsDiscover = useAnimation();
	const [refDiscover, inViewDiscover] = useInView({
		triggerOnce: true,
		threshold: 0.5, // Adjust this value as needed (0.5 means 50% in view)
	});

	const controlsAdd = useAnimation();
	const [refAdd, inViewAdd] = useInView({
		triggerOnce: true,
		threshold: 0.5,
	});

	const controlsBlog = useAnimation();
	const [refBlog, inViewBlog] = useInView({
		triggerOnce: true,
		threshold: 0.5,
	});

	const controlsAbout = useAnimation();
	const [refAbout, inViewAbout] = useInView({
		triggerOnce: true,
		threshold: 0.5,
	});

	// Repeat this pattern for other sections as needed

	useEffect(() => {
		if (inViewDiscover) {
			controlsDiscover.start({ opacity: 1, x: 0, transition: { delay: 0, duration: 1 } });
		}
	}, [controlsDiscover, inViewDiscover]);

	useEffect(() => {
		if (inViewAdd) {
			controlsAdd.start({ opacity: 1, x: 0, transition: { delay: 0, duration: 1 } });
		}
	}, [controlsAdd, inViewAdd]);

	useEffect(() => {
		if (inViewBlog) {
			controlsBlog.start({ opacity: 1, x: 0, transition: { delay: 0, duration: 1 } });
		}
	}, [controlsBlog, inViewBlog]);

	useEffect(() => {
		if (inViewAbout) {
			controlsAbout.start({ opacity: 1, x: 0, transition: { delay: 0, duration: 1 } });
		}
	}, [controlsAbout, inViewAbout]);

	// Repeat this pattern for other sections as needed

	return (
		<>
			<div className='gradient-background'></div>
			<motion.main className='home-page' variants={transitions} initial='hidden' animate='visible' exit='exit'>
				<section className='home-hero-section'>
					<div className='home-hero-div-left'>
						<h1 className='home-hero-heading'>
							Don't shop.
							<br />
							Adopt a pet!
						</h1>
						<div className='home-hero-buttons'>
							<Link to='/petpals/discover'>
								<button>
									<i className='bx bxs-baby-carriage bx-sm'></i>
									Adopt now
								</button>
							</Link>
							<Link to='/petpals/add' style={{ color: 'white', fontSize: '1.25rem', marginLeft: '1rem' }}>
								Rescue
							</Link>
						</div>
					</div>

					<div className='home-hero-div-right'>
						<img src={HeroImage} style={{ width: '100%' }} alt='hero image' />
					</div>
				</section>
			</motion.main>

			<section ref={refDiscover} className='home-sub-section home-discover-section'>
				<motion.div initial={{ opacity: 0, x: 50 }} animate={controlsDiscover}>
					<h1>Discover Your New Pet</h1>
					<p>Explore PetPals for your new ideal furry companion.</p>
					<Link to='/petpals/discover'>
						<button>
							<i className='bx bxs-compass bx-md'></i>
							Discover Pets
						</button>
					</Link>
				</motion.div>
			</section>

			<section ref={refAdd} className='home-sub-section home-add-section'>
				<motion.div initial={{ opacity: 0, x: 50 }} animate={controlsAdd} transition={{ staggerChildren: 0.5 }}>
					<h1>Find a New Home for a Lost Pet</h1>
					<p>Contribute to our mission by uploading posts for dogs or cats in need of shelter at 'PetPals.'</p>
					<Link to='/petpals/add'>
						<button>
							<i className='bx bxs-plus-circle bx-md'></i>
							Add a New Pet
						</button>
					</Link>
				</motion.div>
			</section>

			<section ref={refBlog} className='home-sub-section home-blog-section'>
				<motion.div initial={{ opacity: 0, x: 50 }} animate={controlsBlog}>
					<h1>Take Care of Your Pet</h1>
					<p>Discover essential tips for responsible dog and cat care in 'PetPals' Pet Welfare Guides.</p>
					<Link to='/petpals/blog'>
						<button>
							<i className='bx bxs-book-reader bx-md'></i>
							Read the Blog
						</button>
					</Link>
				</motion.div>
			</section>

			<section ref={refAbout} className='home-sub-section home-about-section'>
				<motion.div initial={{ opacity: 0, x: 50 }} animate={controlsAbout}>
					<h1>Learn about PetPals</h1>
					<p>Join PetPals in building a compassionate community for a brighter future.</p>
					<Link to='/about'>
						<button>
							<i className='bx bxs-group bx-md'></i>
							About PetPals
						</button>
					</Link>
				</motion.div>
			</section>

			<footer className='home-footer'>
				<div className='home-footer-container'>
					<div className='home-footer-info'>
						<h2>
							<img src={Logo} style={{ width: '2.3rem', paddingRight: '1rem' }} alt='petpals logo' />
							PetPals
						</h2>
						<div className='home-info-text'>
							<p>
								PetPals was launched to
								<br /> address the growing issue
								<br /> of homeless animals,
								<br /> aiming to create a<br /> meaningful impact on
								<br /> their lives and alleviate
								<br /> their hardships.
							</p>
						</div>
					</div>

					<div className='home-footer-links'>
						<h3>Quick Links</h3>
						<Link to='/petpals'>Home</Link>
						<Link to='/petpals/discover'>Discover</Link>
						<Link to='/petpals/about'>About</Link>
						<Link to='/petpals/blog'>Blog</Link>
					</div>

					<div className='home-footer-support'>
						<h3>Support Us</h3>
						<Link to='/petpals'>Donate</Link>
						<Link to='https://github.com/samadhi1311/petpals'>Contribute on GitHub</Link>
					</div>
				</div>
				<div className='home-footer-copyright'>
					<p>&copy; {new Date().getFullYear()} PetPals Team. All Rights Reserved.</p>
				</div>
			</footer>
		</>
	);
}
