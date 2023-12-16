import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Navigation from '../../global/components/Navigation/Navigation';
import './Home.css'
import HeroImage from '../../global/assets/Adopt a pet-bro.svg';



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
            <div className="gradient-background"></div>
            <header>
                <Navigation />
            </header>

            <main>
                <section className='hero-section'>
                    <div className='hero-div-left'>
                        <h1 className='hero-heading'>Don't shop.<br />Adopt a pet!</h1>
                        <p className='hero-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className='hero-buttons'>
                            <button>Adopt now</button>
                            <button>Rescue</button>
                        </div>
                    </div>

                    <div className='hero-div-right'>
                        <img src={HeroImage} style={{ width: "100%" }}></img>
                    </div>
                </section>
            </main>

            <section ref={refDiscover} className='sub-section discover-section'>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={controlsDiscover}
                >
                    <div>
                        <h1>Discover Section</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, suscipit quasi possimus facere officiis dicta laborum accusantium vero dolorum quaerat magni, mollitia optio aliquid voluptate. Eligendi explicabo animi nemo quia!</p>
                        <button>Learn More</button>
                    </div>
                </motion.div>
            </section>

            <section ref={refAdd} className='sub-section add-section'>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={controlsAdd}
                >
                    <div>
                        <h1>Add Section</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, suscipit quasi possimus facere officiis dicta laborum accusantium vero dolorum quaerat magni, mollitia optio aliquid voluptate. Eligendi explicabo animi nemo quia!</p>
                        <button>Learn More</button>
                    </div>
                </motion.div>
            </section>

            <section ref={refBlog} className='sub-section blog-section'>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={controlsBlog}
                >
                    <div>
                        <h1>Blog Section</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, suscipit quasi possimus facere officiis dicta laborum accusantium vero dolorum quaerat magni, mollitia optio aliquid voluptate. Eligendi explicabo animi nemo quia!</p>
                        <button>Learn More</button>
                    </div>
                </motion.div>
            </section>

            <section ref={refAbout} className='sub-section about-section'>
                <motion.div initial={{ opacity: 0, x: 50 }}
                    animate={controlsAbout}>
                    <div>
                        <h1>About Section</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, suscipit quasi possimus facere officiis dicta laborum accusantium vero dolorum quaerat magni, mollitia optio aliquid voluptate. Eligendi explicabo animi nemo quia!</p>
                        <button>Learn More</button>
                    </div>
                </motion.div>
            </section>

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-info">
                        <h2>Your Company</h2>
                        <p>A brief description of your company or website goes here. This can be a slightly longer text describing your vision, mission, or values.</p>
                    </div>
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <p>Email: info@yourcompany.com</p>
                        <p>Phone: +1234567890</p>
                        <p>Address: 123 Main Street, City, Country</p>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    )
}