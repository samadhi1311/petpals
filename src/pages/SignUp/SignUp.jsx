import React, { useState } from 'react';
import Navigation from "../../global/components/Navigation/Navigation";
import './SignUp.css';
import GoogleIcon from '../../global/assets/icons8-google.svg';

export default function SignUp() {
	const [step, setStep] = useState(1);
	const [authMethod, setAuthMethod] = useState('');
	const [accountType, setAccountType] = useState('individual');
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [contact, setContact] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const nextStep = () => {
		setStep(step + 1);
	};

	const prevStep = () => {
		setStep(step - 1);
	};

	const handleSubmit = () => {
		// Perform sign-up logic here, such as sending data to a server
		console.log({
			authMethod,
			accountType,
			name,
			address,
			contact,
			email,
			password,
			confirmPassword,
		});
	};

	const handleContinueClick = () => {
		// Set the authentication method to 'email'
		setAuthMethod('email');

		// Proceed to the next step (assuming there's a function named nextStep)
		nextStep();
	};


	return (
		<>
			<div className="gradient-background"></div>
			<header>
				<Navigation />
			</header>
			<section>

				{step === 1 && (
					<div className='form-container'>

						<h2>Welcome to PetPals</h2>

						<form>
							<input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />

							<input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />

							<input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />

							<div className="submit">
								<button onClick={handleContinueClick}>Continue</button>
							</div>
						</form>

						<div className="seperator">
							<hr />
							<span>or continue with</span>
							<hr />
						</div>

						<div className="social">
							<button className="google" style={{}}>
								<img src={GoogleIcon} alt='Google' style={{ width: '1rem', height: '1rem', paddingRight: '1rem' }} onClick={nextStep} /> Google
							</button>
						</div>

					</div>
				)}

				{step === 2 && (
					<div className='form-container'>

						<form>

							<div className="description">
								<p>Before you can start using PetPals, we would like to know about you a little bit.</p>
							</div>

							<div className="account-toggle">

								<div className="account-type">
									<p>I'm an: </p>

									<div className="radio-inputs">
										<label className="radio">
											<input type="radio" name="individual" checked={accountType === 'individual'}
												onChange={() => setAccountType('individual')} />
											<span className="name">Individual</span>
										</label>

										<label className="radio">
											<input type="radio" name="organization" checked={accountType === 'organization'}
												onChange={() => setAccountType('organization')} />
											<span className="name">Organization</span>
										</label>
									</div>

								</div>
							</div>

							<input type="text" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} />

							<input type="text" value={address} placeholder='Address' onChange={(e) => setAddress(e.target.value)} />

							<input type="text" value={contact} placeholder='Contact' onChange={(e) => setContact(e.target.value)} />

						</form>

						<div className='action-buttons'>
							<a onClick={prevStep} sty>Previous</a>
							<button onClick={handleSubmit}>Submit</button>
						</div>

					</div>

				)}
			</section>
		</>
	);
}