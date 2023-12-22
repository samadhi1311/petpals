import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AnimatePresence, motion } from 'framer-motion';
import './SignUp.css';
import GoogleIcon from '../../global/assets/icons8-google.svg';

export default function SignUp() {

	// Object to store all form values
	const [data, setData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		firstName: '',
		lastName: '',
		orgName: '',
		buildingNumber: '',
		street: '',
		city: '',
		zipCode: '',
		contactNumber: '',
		accountType: 'individual',
	});

	const validationSchema1 = Yup.object({
		email: Yup.string().email('Invalid email!').required('Email is required!'),
		password: Yup.string().min(8, 'Password must be at least 8 characters!').required('Password is required!'),
		confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match!"),
	});

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
		zipCode: Yup.string().required('Zip/Postal code is required!'),
		contactNumber: Yup.string().required('Contact number is required!'),
	})

	// set and store current step
	const [currentStep, setCurrentStep] = useState(0);

	// make the API request
	const makeRequest = (data) => {
		console.log(data);
	};

	// handle next step
	const handleNextStep = (newData, finalStep = false) => {
		setData((prev) => ({ ...prev, ...newData }));
		setCurrentStep((prev) => prev + 1);

		if (finalStep) {
			makeRequest(newData);
			return;
		}
	};

	// handle previous step
	const handlePrevStep = (newData) => {
		setData((prev) => ({ ...prev, ...newData }));
		setCurrentStep((prev) => prev - 1);
	};

	// 1st step
	const StepOne = (props) => {
		const handleSubmit = (values) => {
			props.next(values);
		};

		return (

			<Formik
				initialValues={props.data}
				validationSchema={validationSchema1}
				onSubmit={handleSubmit}
			>
				{() => (
					<motion.div layout className='form-container'
						initial={{ opacity: 0, x: '-5%' }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: '5%' }}
						transition={{
							duration: 0.5,
							delay: 0.1,
							ease: [0, 0.71, 0.2, 1.01]
						}}
						key={currentStep}
					>

						<h2>Welcome to PetPals</h2>

						<Form className='form'>
							<Field name="email" placeholder="Email" />
							<div className="warning"><ErrorMessage name="email" /></div>

							<Field name="password" placeholder="Password" />
							<div className="warning"><ErrorMessage name="password" /></div>

							<Field name="confirmPassword" placeholder="Confirm password" />
							<div className="warning"><ErrorMessage name="confirmPassword" /></div>

							<div className="submit">
								<button type='submit'>Continue</button>
							</div>
						</Form>

						<div className="seperator">
							<hr />
							<span>or continue with</span>
							<hr />
						</div>

						<div className="social">
							<button className="google" style={{}}>
								<img src={GoogleIcon} alt='Google' style={{ width: '1rem', height: '1rem', paddingRight: '1rem' }}
								/> Google
							</button>
						</div>

					</motion.div>
				)}
			</Formik>

		);
	};

	// 2nd step
	const StepTwo = (props) => {
		const handleSubmit = (values) => {
			props.next(values, true);
		};
		return (

			<Formik
				initialValues={props.data}
				validationSchema={validationSchema2}
				onSubmit={handleSubmit}
			>
				{({ values }) => (
					<motion.div layout className='form-container'
						initial={{ opacity: 0, x: '-5%' }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: '5%' }}
						transition={{
							duration: 0.5,
							delay: 0.1,
							ease: [0, 0.71, 0.2, 1.01]
						}}
						key={currentStep}
					>

						<Form className='form'>

							<div className="description">
								<p>Before you can start using PetPals, we would like to know about you a little bit.</p>
							</div>

							<div className="account-toggle">

								<div className="account-type">
									<p>I'm an: </p>

									<div className="radio-inputs">
										<label className="radio">
											<Field type="radio" name="accountType" value='individual' />
											<span className="name">Individual</span>
										</label>

										<label className="radio">
											<Field type="radio" name="accountType" value='organization' />
											<span className="name">Organization</span>
										</label>
									</div>

								</div>
								<div className="warning"><ErrorMessage name="accountType" /></div>
							</div>


							{values.accountType === 'individual' && (
								<motion.div className='animated-fields'
									initial={{ opacity: 0 }}
									transition={{ type: 'spring', stiffness: 100, damping: 50, delay: 0.1 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									<Field name="firstName" placeholder='First name' />
									<div className="warning"><ErrorMessage name="firstName" /></div>

									<Field name="lastName" placeholder='Last name' />
									<div className="warning"><ErrorMessage name="lastName" /></div>
								</motion.div>
							)}

							{values.accountType === 'organization' && (
								<motion.div className='animated-fields'
									initial={{ opacity: 0 }}
									transition={{ type: 'spring', stiffness: 100, damping: 50, delay: 0.1 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									<Field name="orgName" placeholder='Organization name' />
									<div className="warning"><ErrorMessage name="orgName" /></div>
								</motion.div>
							)}

							<Field name="buildingNumber" placeholder='Building/House number' />
							<div className="warning"><ErrorMessage name="buildingNumber" /></div>

							<Field name="street" placeholder='Street name' />
							<div className="warning"><ErrorMessage name="street" /></div>

							<Field name="city" placeholder='City' />
							<div className="warning"><ErrorMessage name="city" /></div>

							<Field name="zipCode" placeholder='Zip/Postal code' />
							<div className="warning"><ErrorMessage name="zipCode" /></div>

							<Field name="contactNumber" placeholder='Contact number' />
							<div className="warning"><ErrorMessage name="contactNumber" /></div>

							<div className='action-buttons'>
								<a onClick={() => props.prev(values)}>Previous</a>
								<button type='submit'>Submit</button>
							</div>

						</Form>

					</motion.div>
				)}
			</Formik>

		);
	};

	const steps = [
		<StepOne next={handleNextStep} data={data} />,
		<StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
	];

	return (

		<section>
			<AnimatePresence mode='wait'>
				{steps[currentStep]}
			</AnimatePresence>
		</section>

	);
}