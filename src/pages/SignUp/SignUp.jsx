import React, { useState } from 'react';
import './SignUp.css';
import GoogleIcon from '../../global/assets/icons8-google.svg';

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [authMethod, setAuthMethod] = useState('');
  const [accountType, setAccountType] = useState('');
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

    <main>
      <div className='signup-page'>
        <div className="signup-form">

          <h2>Sign Up - Step {step}</h2>

          {step === 1 && (
            <div>
              <h3>Select Authentication Method:</h3>

              <input type="email" style={{ width: "280px" }} placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />

              <input type="password" style={{ width: "280px" }} placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />

              <input type="password" style={{ width: "280px" }} placeholder="Confirm Password" value={confirmPassword} onChange={(event) => setPassword(event.target.value)} />

              <button onClick={handleContinueClick}>Continue</button>


              <hr className="horizontal-bar" style={{ paddingTop: "1rem" }} />
              <p className="or-signup-with">
                <span className="horizontal-line"></span> or continue with <span className="horizontal-line"></span>
              </p>

              <div className="social-signup">

                <div className="button-padding"></div>

                <button className="google" style={{}}>
                  <img src={GoogleIcon} alt='Google' style={{ width: '1rem', height: '1rem' }} onClick={nextStep} /> Google
                </button>
              </div>

            </div>
          )}

          {step === 2 && (
            <div>
              <h3>Select Account Type:</h3>
              <div style={{ marginBottom: '2rem' }}>
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
              <div>
                <h3>Fill up the Details:</h3>
                <input type="text" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} />

                <input type="text" value={address} placeholder='Address' onChange={(e) => setAddress(e.target.value)} />

                <input type="text" value={contact} placeholder='Contact' onChange={(e) => setContact(e.target.value)} />

                <div className='action-signup'>
                  <button onClick={prevStep}>Previous</button>
                  <button onClick={handleSubmit}>Submit</button>
                </div>
              </div>
            </div>

          )}
        </div>
      </div>
    </main>
  );
}