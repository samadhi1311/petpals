import Navigation from '../../global/components/Navigation/Navigation';
import './Home.css'
import HeroImage from '../../global/assets/Adopt a pet-bro.svg';

export default function Home() {
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

            <section className='sub-section discover-section'>
                <div>
                    <h1>Discover Section</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, suscipit quasi possimus facere officiis dicta laborum accusantium vero dolorum quaerat magni, mollitia optio aliquid voluptate. Eligendi explicabo animi nemo quia!</p>
                    <button>Learn More</button>
                </div>
            </section>

            <div className="empty"></div>

            <section className='sub-section add-section'>
                <div>
                    <h1>Add Section</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, suscipit quasi possimus facere officiis dicta laborum accusantium vero dolorum quaerat magni, mollitia optio aliquid voluptate. Eligendi explicabo animi nemo quia!</p>
                    <button>Learn More</button>
                </div>
            </section>

            <section className='sub-section blog-section'>
                <div>
                    <h1>Blog Section</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, suscipit quasi possimus facere officiis dicta laborum accusantium vero dolorum quaerat magni, mollitia optio aliquid voluptate. Eligendi explicabo animi nemo quia!</p>
                    <button>Learn More</button>
                </div>
            </section>

            <section className='sub-section about-section'>
                <div>
                    <h1>About Section</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, suscipit quasi possimus facere officiis dicta laborum accusantium vero dolorum quaerat magni, mollitia optio aliquid voluptate. Eligendi explicabo animi nemo quia!</p>
                    <button>Learn More</button>
                </div>
            </section>

            <footer>
                <div>
                    <h1>Footer Section</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, suscipit quasi possimus facere officiis dicta laborum accusantium vero dolorum quaerat magni, mollitia optio aliquid voluptate. Eligendi explicabo animi nemo quia!</p>
                </div>
            </footer>
        </>
    )
}