import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { auth, googleAuthProvider } from '../../../firebase.config';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase.config';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import MiniLoader from '../../global/components/MiniLoader/MiniLoader';
import './SignUp.css';
import GoogleIcon from '../../global/assets/icons8-google.svg';
import { transitions } from '../../global/Transitions';

export default function SignUp() {
	// Object to store authentication data
	const [authData, setAuthData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [color, setColor] = useState('grey');

	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	// Object to store personal data
	const [personalData, setPersonalData] = useState({
		accountType: 'individual',
		firstName: '',
		lastName: '',
		orgName: '',
		buildingNumber: '',
		street: '',
		city: '',
		district: '',
		zipCode: '',
		contactNumber: '',
	});

	const districts = [
		'Ampara',
		'Anuradhapura',
		'Badulla',
		'Batticaloa',
		'Colombo',
		'Galle',
		'Gampaha',
		'Hambantota',
		'Jaffna',
		'Kalutara',
		'Kandy',
		'Kegalle',
		'Kilinochchi',
		'Kurunegala',
		'Mannar',
		'Matale',
		'Matara',
		'Monaragala',
		'Mullaitivu',
		'Nuwara Eliya',
		'Polonnaruwa',
		'Puttalam',
		'Ratnapura',
		'Trincomalee',
		'Vavuniya',
	];

	// Validation schema authentication data
	const validationSchema1 = Yup.object({
		email: Yup.string().email('Invalid email!').required('Email is required!'),
		password: Yup.string().min(8, 'Password must be at least 8 characters!').required('Password is required!'),
		confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match!'),
	});

	// Validation schema for personal data
	const validationSchema2 = Yup.object({
		accountType: Yup.string().required('Account type is required!'),
		firstName: Yup.string().when('accountType', {
			is: 'individual',
			then: (validationSchema2) => validationSchema2.required('First name is required!'),
			otherwise: (validationSchema2) => validationSchema2.optional(),
		}),
		lastName: Yup.string().when('accountType', {
			is: 'individual',
			then: (validationSchema2) => validationSchema2.required('Last name is required!'),
			otherwise: (validationSchema2) => validationSchema2.optional(),
		}),
		orgName: Yup.string().when('accountType', {
			is: 'organization',
			then: (validationSchema2) => validationSchema2.required('Organization name is required!'),
			otherwise: (validationSchema2) => validationSchema2.optional(),
		}),
		buildingNumber: Yup.string().required('Building/House number is required!'),
		street: Yup.string().required('Street name is required!'),
		city: Yup.string().required('City is required!'),
		district: Yup.string().required('District is required!'),
		zipCode: Yup.string().required('Zip/Postal code is required!'),
		contactNumber: Yup.string().length(10).required('Contact number is required!'),
	});

	// store current step
	const [currentStep, setCurrentStep] = useState(0);

	// authetication method
	const [authMethod, setAuthMethod] = useState('email');

	function handleNext() {
		setCurrentStep(currentStep + 1);
	}

	// Create user with Google account
	async function signUpWithGoogle() {
		setLoading(true);
		setAuthMethod('google');
		await signInWithPopup(auth, googleAuthProvider);
		handleNext();
		setLoading(false);
	}

	// 1st step
	function StepOne() {
		async function stepOneHandleSubmit(values) {
			setLoading(true);
			setAuthData(values);

			if (values.email && values.password && values.confirmPassword) {
				setAuthMethod('email');
				await createUserWithEmailAndPassword(auth, values.email, values.password);
			}

			handleNext();
			setLoading(false);
		}

		return (
			<Formik initialValues={authData} validationSchema={validationSchema1} onSubmit={stepOneHandleSubmit} enableReinitialize>
				{({ values, errors, touched }) => (
					<motion.div
						layout
						className='signup-form-container'
						initial={{ opacity: 0, x: '-5%' }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: '5%' }}
						transition={{
							duration: 0.5,
							delay: 0.1,
							ease: [0, 0.71, 0.2, 1.01],
						}}
						key={currentStep}>
						<h2>Welcome to PetPals</h2>

						<Form className='signup-form'>
							<Field type='email' name='email' placeholder='Email' />
							<div className='signup-warning'>
								<ErrorMessage name='email' />
							</div>

							<Field type='password' name='password' placeholder='Password' />
							<div className='signup-warning'>
								<ErrorMessage name='password' />
							</div>

							<Field type='password' name='confirmPassword' placeholder='Confirm password' />
							<div className='signup-warning'>
								<ErrorMessage name='confirmPassword' />
							</div>

							<div className='signup-submit'>
								<button type='submit' disabled={!touched.email || !touched.password || !touched.confirmPassword || errors.email || errors.password || errors.confirmPassword}>
									<i className='bx bxs-user-plus bx-sm'></i>
									Sign Up
								</button>
							</div>
						</Form>

						<div className='signup-seperator'>
							<hr />
							<span>or sign up with</span>
							<hr />
						</div>

						<div className='signup-social'>
							<button className='signup-google' onClick={signUpWithGoogle}>
								<i class='bx bxl-google bx-sm'></i> Google
							</button>
						</div>

						<div className='sign-up-login'>
							<p>
								Already have an account? <Link to='/Petpals/Login'>Login</Link>
							</p>
						</div>
					</motion.div>
				)}
			</Formik>
		);
	}

	// 2nd step
	function StepTwo() {
		async function stepTwoHandleSubmit(values) {
			setLoading(true);
			const uid = auth.currentUser.uid;
			setPersonalData(values);
			try {
				if (values.accountType === 'organization') {
					const docRef = await addDoc(collection(db, 'users'), {
						uid: uid,
						accountType: 'organization',
						firstName: '',
						lastName: '',
						orgName: values.orgName,
						buildingNumber: values.buildingNumber,
						street: values.street,
						city: values.city,
						district: values.district,
						zipCode: values.zipCode,
						contactNumber: values.contactNumber,
					});
				} else if (values.accountType === 'individual') {
					const docRef = await addDoc(collection(db, 'users'), {
						uid: uid,
						accountType: 'individual',
						firstName: values.firstName,
						lastName: values.lastName,
						orgName: '',
						buildingNumber: values.buildingNumber,
						street: values.street,
						city: values.city,
						district: values.district,
						zipCode: values.zipCode,
						contactNumber: values.contactNumber,
					});
				}
			} catch (error) {
				return <Modal success={false} title='Error' content={error.message} />;
			}

			navigate('/PetPals');
			setLoading(false);
		}

		return (
			<Formik initialValues={personalData} validationSchema={validationSchema2} onSubmit={stepTwoHandleSubmit} enableReinitialize>
				{({ values, errors, touched }) => (
					<motion.div
						layout
						className='signup-form-container'
						initial={{ opacity: 0, x: '-5%' }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: '5%' }}
						transition={{
							duration: 0.5,
							delay: 0.1,
							ease: [0, 0.71, 0.2, 1.01],
						}}
						key={currentStep}>
						<Form className='signup-form'>
							<div className='signup-description'>
								<p>Before you can start using PetPals, we would like to know about you a little bit.</p>
							</div>

							<div className='signup-account-toggle'>
								<div className='signup-account-type'>
									<p>I'm an: </p>

									<div className='signup-radio-inputs'>
										<label className='signup-radio'>
											<Field type='radio' name='accountType' value='individual' />
											<span className='signup-name'>Individual</span>
										</label>

										<label className='signup-radio'>
											<Field type='radio' name='accountType' value='organization' />
											<span className='signup-name'>Organization</span>
										</label>
									</div>
								</div>
								<div className='signup-warning'>
									<ErrorMessage name='accountType' />
								</div>
							</div>

							{values.accountType === 'individual' && (
								<motion.div
									className='signup-animated-fields'
									initial={{ opacity: 0 }}
									transition={{ type: 'spring', stiffness: 100, damping: 50, delay: 0.1 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}>
									<Field type='text' name='firstName' placeholder='First name' />
									<div className='signup-warning'>
										<ErrorMessage name='firstName' />
									</div>

									<Field type='text' name='lastName' placeholder='Last name' />
									<div className='signup-warning'>
										<ErrorMessage name='lastName' />
									</div>
								</motion.div>
							)}

							{values.accountType === 'organization' && (
								<motion.div
									className='signup-animated-fields'
									initial={{ opacity: 0 }}
									transition={{ type: 'spring', stiffness: 100, damping: 50, delay: 0.1 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}>
									<Field type='text' name='orgName' placeholder='Organization name' />
									<div className='signup-warning'>
										<ErrorMessage name='orgName' />
									</div>
								</motion.div>
							)}

							<Field type='text' name='buildingNumber' placeholder='Building/House number' />
							<div className='signup-warning'>
								<ErrorMessage name='buildingNumber' />
							</div>

							<Field type='text' name='street' placeholder='Street name' />
							<div className='signup-warning'>
								<ErrorMessage name='street' />
							</div>

							<Field type='text' name='city' placeholder='City' />
							<div className='signup-warning'>
								<ErrorMessage name='city' />
							</div>

							<Field as='select' name='district'>
								<option value=''>Select District</option>
								{districts.map((district) => (
									<option key={district} value={district}>
										{district}
									</option>
								))}
							</Field>

							<div className='signup-warning'>
								<ErrorMessage name='district' />
							</div>

							<Field type='number' name='zipCode' placeholder='Zip/Postal code' />
							<div className='signup-warning'>
								<ErrorMessage name='zipCode' />
							</div>

							<Field type='text' name='contactNumber' placeholder='Contact number' />
							<div className='signup-warning'>
								<ErrorMessage name='contactNumber' />
							</div>

							<span>
								<p>By clicking 'Submit', you agree to our terms of use.</p>
							</span>

							<div className='signup-action-buttons'>
								<button
									type='submit'
									disabled={!touched.contactNumber || errors.buildingNumber || errors.street || errors.city || errors.district || errors.zipCode || errors.contactNumber}>
									Submit
								</button>
							</div>
						</Form>
					</motion.div>
				)}
			</Formik>
		);
	}
	const steps = [<StepOne />, <StepTwo />];

	return (
		<>
			<div className='subtle-gradient-background'></div>
			<motion.section className='signup-page' variants={transitions} initial='hidden' animate='visible' exit='exit'>
				<AnimatePresence mode='wait'>{loading ? <MiniLoader title='Please wait.' message='We are configuring your account...' /> : steps[currentStep]}</AnimatePresence>
			</motion.section>
		</>
	);
}
