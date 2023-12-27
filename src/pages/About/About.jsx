import { BoxIconElement } from 'boxicons';
import stiker from '../../global/assets/adoption-giving-up-a-catsmall-removebg-preview.png';
import stiker2 from '../../global/assets/sticker2-removebg-preview.png';
import valImg1 from '../../global/assets/Icon8.png';
import valImg2 from '../../global/assets/Icon4.png';
import valImg3 from '../../global/assets/Icon7.png';

import './About.css';

export default function About() {
    return (
        <>
        <main>

            {/* Two divs side by side */}
            <div className="content-row">
                {/* Left div with text */}
                <div className="text-content">
                    <p style={{ fontSize: '24px' }}>
                        We're On a Mission To Support And Empower People To Responsibly Rehome Their Pets.
                    </p>
                    <p>
                        Who we are, and why we created PetRehomer: PetRehomer has been set up by a group of animal lovers who are committed to ending pet homelessness and irresponsible rehoming practices. We're part of a registered UK charity, so you can rest assured that we always prioritize pet welfare over profit.<br/>
                    </p>
                    <table>
                        <tr>
                            <td><box-icon size="lg" type='solid' name='dog' color='#5e5151' ></box-icon></td>
                            <td><p><span className="icon-text-title">3-4 million</span><br/><span className="icon-text-content">pets from UK homes have been given up in the past year according to the daily mirror newspaper researches.</span></p></td>
                        </tr>
                        <tr>
                            <td><box-icon size="lg" type='solid' name='buildings' color='#5e5151' ></box-icon></td>
                            <td><p><span className="icon-text-title">Animal sactuaries</span><br/><span className="icon-text-content">from UK homes have been given up in the past year according to the PFMA (Pet Food Manufacturers Association).</span></p></td>
                        </tr>
                        <tr>
                            <td><box-icon size="lg" type='solid' name='donate-heart' color='#5e5151' ></box-icon></td>
                            <td><p><span className="icon-text-title">PetRehomer is here</span><br/><span className="icon-text-content">to helpby creating a pet adoption community where people who want to adopt safely connect with people who need to rehome a dog, cat.</span></p></td>
                        </tr>
                    </table>
                </div>

                {/* Right div with image */}
                <div className="image-content">
                    <img src={stiker} alt="Adoption Image" />
                </div>
            </div>
            <div className="content-row">
                <div className="image-content-2">
                    <img src={stiker2} alt="Adoption Image" />
                </div>
                {/* Left div with image */}
                <div className="text-content">
                    <p style={{ fontSize: '24px' }}>
                        What We Do
                    </p>
                    <p>
                        We're a safer, more professional and ethical alternative to sites like Facebook, Preloved, Pets4Homes and Gumtree.<br/> <br/>Our platform connects potential adopters with people who need to rehome their pets, initially starting with the UK's most popular pets; dogs, cats. This makes it easier for good people to adopt the right pet whilst maximising the chance of pets finding their forever home.<br/> <br/>We offer a non-judgmental service to rehomers and give them full control of the process. We're also helping to reduce the number of animals going into shelters. This frees up space and resources for the pets who have been abandoned, need immediate help or specialist care.
                    </p>
                </div>               
            </div>
            <div className="value-content">
                <h1>Our Values</h1>
                <div className="value-container-1">
                    <div className="value-container-2">
                        <div className="value-container-imgbg">
                            <img src={valImg1}/>
                        </div>
                        <p style={{ fontSize: '20px' }}>Kind To Everyone</p>
                        <p>Every pet deserves to be safe,loved and respected.</p>
                        <p>People who are great candidates for adoption shouldn't be put off by complicated processes or one-size-fits-all rules.</p>
                        <p>People who need to rehome their pets should be empowered to do so without being judged.</p>
                    </div>
                </div>
                <div className="value-container-1">
                    <div className="value-container-2">
                        <div className="value-container-imgbg">
                        <img src={valImg2}/>
                        </div>
                        <p style={{ fontSize: '20px' }}>Advocate Adoption</p>
                        <p>This value sits at the heart of everything we do.</p>
                        <p>Adoption reduces the demand for puppy farming, industrial-scale breeding, illegal pet imports and other forms of exploitation and abuse.</p>
                        <p>We’re proud supporters of #AdoptDontShop.</p>
                    </div>
                </div>
                <div className="value-container-1">
                    <div className="value-container-2">
                        <div className="value-container-imgbg">
                        <img src={valImg3}/>
                        </div>
                        <p style={{ fontSize: '20px' }}>Responsible of Rehoming</p>
                        <p>We’re champions of rehoming. But not at any cost.</p>
                        <p>We believe in finding the right match between adopters and pets, not taking risks or rushing.</p>
                        <p>We always prioritise pet welfare. And we offer a safer, more ethical and professional alternative to online marketplaces like Preloved, Pets4Homes, Facebook and Gumtree.</p>
                    </div>
                </div>
            </div>

            
        </main>
        
        </>
    );
}
