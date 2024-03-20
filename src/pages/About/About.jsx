import Shelter from '../../global/assets/Animal shelter-cuate.svg';

import './About.css';

export default function About() {
	return (
		<>
			<main>
				<div className='about-content-panel'>
					<div className='about-content-text'>
						<h1 className='about-content-heading'>Connecting potential adopters, animal rescuers, and shelters.</h1>
					</div>

					<div className='about-content-image'>
						<img src={Shelter} style={{ width: '100%' }} alt='Adoption Image' />
					</div>
				</div>
				.
				<p className='about-content-description'>
					PetPals was launched to address the growing issue of homeless animals, aiming to create a meaningful impact on their lives and alleviate their hardships.
				</p>
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
			</main>
		</>
	);
}
