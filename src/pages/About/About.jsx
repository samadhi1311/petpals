import { transitions } from '../../global/Transitions';
import { motion } from 'framer-motion';
import Shelter from '../../global/assets/Animal shelter-cuate.svg';

import './About.css';

export default function About() {
	return (
		<>
			<div className='subtle-gradient-background'></div>
			<motion.main variants={transitions} initial='hidden' animate='visible' exit='exit'>
				<div className='about-content-panel'>
					<div className='about-content-text'>
						<h1 className='about-content-heading'>Connecting potential adopters, animal rescuers, and shelters.</h1>
					</div>

					<div className='about-content-image'>
						<img src={Shelter} style={{ width: '100%' }} alt='Adoption Image' />
					</div>
				</div>

				<div className='about-content-panel'>
					<div className='about-content-card'>
						<div className='about-card-text'>
							<h3 className='about-card-title'>Why PetPals?</h3>

							<p>
								It is estimated that there are over 3 million strays, many of whom suffer from starvation, malnutrition, diseases and severe injuries. <br />
								<br />
								Our platform connects potential adopters with people who need to rehome their pets, initially starting with the Sri Lanka's most popular pets; dogs, cats.
								<br />
								<br />
								This makes it easier for good people to adopt the right pet whilst maximising the chance of pets finding their forever home. <br />
								<br />
								We offer a non-judgmental service to rehomers and give them full control of the process while helping to reduce the number of animals going into shelters.
							</p>
						</div>
					</div>
				</div>

				<section className='agreement'>
					<h2>Terms of Use Agreement</h2>

					<div className='agreement-text'>
						<p>Thank you for using PetPals, a platform dedicated to facilitating the adoption of pets and connecting pet lovers with their new furry companions.</p>
						<p>
							By accessing or using PetPals, you agree to abide by the following terms and conditions: <br />
							<ol>
								<li>
									<b>Non-Monetary Transactions:</b> PetPals operates as a non-profit organization, and as such, monetary transactions are strictly prohibited on this platform. Any
									attempt to buy, sell, or exchange pets for money is against our policies.
								</li>
								<li>
									<b>Pet Adoption:</b> PetPals aims to promote pet adoption and responsible pet ownership. Users are encouraged to post profiles of pets available for adoption, as
									well as browse listings to find a new pet companion. However, it is important to note that PetPals does not facilitate the actual adoption process but merely
									provides a platform for connecting potential adopters with pets in need of homes.
								</li>
								<li>
									<b>Responsible Pet Ownership:</b> We encourage all users to prioritize the well-being and safety of pets. By using PetPals, you agree to provide accurate
									information about pets available for adoption and to ensure that pets are placed in suitable and loving homes.
								</li>
								<li>
									<b>No Hate Speech or Discrimination:</b> PetPals is committed to fostering a safe and inclusive community for all users. Hate speech, discriminatory language, or
									any form of harassment or bullying will not be tolerated. Users found engaging in such behavior will be subject to immediate suspension or termination of their
									account.
								</li>
								<li>
									<b>User-Generated Content:</b> PetPals allows users to post content, including photos and descriptions of pets available for adoption. While we encourage users to
									share information responsibly, we are not responsible for the accuracy or legality of user-generated content. Users are solely responsible for the content they post
									on PetPals.
								</li>
								<li>
									<b>Privacy Policy:</b> Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and disclose your personal information
									when you use PetPals.
								</li>
								<li>
									<b>Intellectual Property:</b> All content and materials provided on PetPals, including but not limited to text, graphics, logos, and images, are the property of
									PetPals or its licensors and are protected by copyright, trademark, and other intellectual property laws. Users may not use, reproduce, or distribute any content
									from PetPals without prior written permission.
								</li>
								<li>
									<b>Disclaimer of Warranty:</b> PetPals is provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. PetPals
									does not guarantee the accuracy, reliability, or completeness of any information provided on the platform.
								</li>
								<li>
									<b>Limitation of Liability:</b> In no event shall PetPals be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in
									connection with your use of the platform, including but not limited to lost profits, lost revenue, or loss of data.
								</li>
								<li>
									<b> Governing Law and Jurisdiction:</b> These Terms of Use shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its
									conflict of law principles. Any disputes arising out of or relating to these terms shall be exclusively resolved by the courts of [Jurisdiction].
								</li>
							</ol>
							<p>
								By using PetPals, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree to these terms, please refrain from
								using PetPals. We reserve the right to modify or update these terms at any time without prior notice. Continued use of PetPals after any such changes constitutes
								acceptance of the modified terms.
							</p>
						</p>
					</div>
				</section>
			</motion.main>
		</>
	);
}
