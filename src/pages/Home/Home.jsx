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
		threshold: 0.6, // Adjust this value as needed (0.5 means 50% in view)
	});

	const controlsAdd = useAnimation();
	const [refAdd, inViewAdd] = useInView({
		triggerOnce: true,
		threshold: 0.6,
	});

	const controlsBlog = useAnimation();
	const [refBlog, inViewBlog] = useInView({
		triggerOnce: true,
		threshold: 0.6,
	});

	const controlsAbout = useAnimation();
	const [refAbout, inViewAbout] = useInView({
		triggerOnce: true,
		threshold: 0.6,
	});

	// Repeat this pattern for other sections as needed

	useEffect(() => {
		if (inViewDiscover) {
			controlsDiscover.start({ opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.5 } });
		}
	}, [controlsDiscover, inViewDiscover]);

	useEffect(() => {
		if (inViewAdd) {
			controlsAdd.start({ opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.5 } });
		}
	}, [controlsAdd, inViewAdd]);

	useEffect(() => {
		if (inViewBlog) {
			controlsBlog.start({ opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.5 } });
		}
	}, [controlsBlog, inViewBlog]);

	useEffect(() => {
		if (inViewAbout) {
			controlsAbout.start({ opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.5 } });
		}
	}, [controlsAbout, inViewAbout]);

	// Repeat this pattern for other sections as needed

	return (
		<>
			<motion.main className='home-page' variants={transitions} initial='hidden' animate='visible' exit='exit'>
				<section className='home-hero-section'>
					<div className='home-hero-div-left'>
						<h1 className='home-hero-heading'>
							Don't shop.
							<br />
							Adopt a pet!
						</h1>
						<div className='home-hero-buttons'>
							<Link to='/PetPals/discover'>
								<button>Adopt now</button>
							</Link>
							<Link to='/PetPals/add'>
								<button>Rescue</button>
							</Link>
						</div>
					</div>

					<div className='home-hero-div-right'>
						<img src={HeroImage} style={{ width: '100%' }}></img>
					</div>
				</section>
			</motion.main>

			<section ref={refDiscover} className='home-sub-section home-discover-section'>
				<motion.div initial={{ opacity: 0, x: 50 }} animate={controlsDiscover}>
					<h1>Discover Section</h1>
					<p>
						Explore PetPals for your ideal furry companion. Discover diverse cats and dogs through heartwarming posts. Utilize user-friendly categorizations to find the perfect match.
						Adopt today and welcome perfection into your life, one paw at a time
					</p>
					<Link to='/PetPals/discover'>
						<button>Learn More</button>
					</Link>
				</motion.div>
			</section>

			<section ref={refAdd} className='home-sub-section home-add-section'>
				<motion.div initial={{ opacity: 0, x: 50 }} animate={controlsAdd} transition={{ staggerChildren: 0.5 }}>
					<h1>Add Section</h1>
					<p>
						Contribute to our mission by uploading posts for dogs or cats in need of shelter at 'PetPals.' Users and sanctuaries can share stories of these adorable companions seeking
						loving homes. Be a part of their journey towards a forever home upload a post and make a difference today!
					</p>
					<Link to='/PetPals/add'>
						<button>Learn More</button>
					</Link>
				</motion.div>
			</section>

			<section ref={refBlog} className='home-sub-section home-blog-section'>
				<motion.div initial={{ opacity: 0, x: 50 }} animate={controlsBlog}>
					<h1>Blog Section</h1>
					<p>
						Discover essential tips for responsible dog and cat care in 'PetPals' Pet Welfare Guides. The Dog Welfare Guide covers bedding, nutrition, toys, and vet registration, while the
						Cat Welfare Guide includes safe spaces, litter setup, food choices, scratching posts, holiday planning, and vet registration. Click icons for specific guides. Rely on 'PetPals'
						for expert guidance in responsible pet ownership. Happy reading and joyful pet parenting!{' '}
					</p>
					<Link to='/PetPals/blog'>
						<button>Learn More</button>
					</Link>
				</motion.div>
			</section>

			<section ref={refAbout} className='home-sub-section home-about-section'>
				<motion.div initial={{ opacity: 0, x: 50 }} animate={controlsAbout}>
					<h1>About Section</h1>
					<p>
						PetPals connects adopters, rescuers, and shelters, focusing on dogs and cats. Simplifying the adoption process, it provides a non-judgmental service for rehomers and strives to
						reduce shelter admissions. Join PetPals in building a compassionate community for a brighter future.
					</p>
					<Link to='/about'>
						<button>Learn More</button>
					</Link>
				</motion.div>
			</section>

			<footer className='home-footer'>
				<div className='home-footer-container'>
					<div className='home-footer-info'>
						<h3>
							<img src={Logo} style={{ width: '2.3rem', paddingRight: '1rem' }} />
							PetPals
						</h3>
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
						<Link to='/PetPals'>Home</Link>
						<Link to='/PetPals/discover'>Discover</Link>
						<Link to='/PetPals/about'>About</Link>
						<Link to='/PetPals/blog'>Blog</Link>
					</div>

					<div className='home-footer-support'>
						<h3>Support Us</h3>
						<Link to='/PetPals'>Donate</Link>
						<Link to='https://github.com/PetPals-Team/PetPals'>Contribute on GitHub</Link>
					</div>
				</div>
				<div className='home-footer-copyright'>
					<p>&copy; {new Date().getFullYear()} PetPals Team. All Rights Reserved.</p>
				</div>
			</footer>
		</>
	);
}
