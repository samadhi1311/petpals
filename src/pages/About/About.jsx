import stiker from '../../global/assets/adoption-giving-up-a-catsmall-removebg-preview.png';
import './About.css';


export default function About() {
    return (

        <main>

            {/* Two divs side by side */}
            <div className="content-row">
                {/* Left div with text */}
                <div className="text-content">
                    <p style={{ fontSize: '24px' }}>
                        We're On a Mission To Support And Empower People To Responsibly Rehome Their Pets.
                    </p>
                    <p>
                        Who we are, and why we created PetRehomer: PetRehomer has been set up by a group of animal lovers who are committed to ending pet homelessness and irresponsible rehoming practices. We're part of a registered UK charity, so you can rest assured that we always prioritize pet welfare over profit.
                    </p>
                </div>

                {/* Right div with image */}
                <div className="image-content">
                    <img src={stiker} alt="Adoption Image" style={{ width: '400px', height: '350px' }} />
                </div>
            </div>
        </main>

    );
}
