import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleAuthProvider } from '../../../firebase.config';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AnimatePresence, motion } from 'framer-motion';
import './Login.css';
import GoogleIcon from '../../global/assets/icons8-google.svg';
import { transitions } from '../../global/Transitions';
import Modal from '../../global/components/Modal/Modal';

export default function Login() {
	const [error, setError] = useState(false);

	const [loginData, setLoginData] = useState({
		email: '',
		password: '',
	});

	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid email!').required('Email is required!'),
		password: Yup.string().min(8, 'Password must be at least 8 characters!').required('Password is required!'),
	});

	const navigate = useNavigate();

	const handleSubmit = async (values) => {
		try {
			await signInWithEmailAndPassword(auth, values.email, values.password);
			navigate('/PetPals');
		} catch (error) {
			if (error.code === 'auth/invalid-credential') {
				setError(true);
			}
			return <Modal success={false} title='Error' content={error.message} />;
		}
	};

	async function signUpWithGoogle() {
		await signInWithPopup(auth, googleAuthProvider);
		navigate('/PetPals');
	}
	return (
		<>
			<div className='subtle-gradient-background'></div>
			<motion.section className='login-page' variants={transitions} initial='hidden' animate='visible' exit='exit'>
				<AnimatePresence mode='wait'>
					<Formik initialValues={loginData} validationSchema={validationSchema} onSubmit={handleSubmit}>
						{({ values, errors, touched }) => (
							<motion.div
								layout
								className='login-form-container'
								initial={{ opacity: 0, x: '-5%' }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: '5%' }}
								transition={{
									duration: 0.5,
									delay: 0.1,
									ease: [0, 0.71, 0.2, 1.01],
								}}>
								<h2>Continue to petpals, </h2>

								<Form className='login-form'>
									<Field type='email' name='email' placeholder='Email' />
									<div className='login-warning'>
										<ErrorMessage name='email' />
									</div>

									<Field type='password' name='password' placeholder='Password' />
									<div className='login-warning'>
										<ErrorMessage name='password' />
									</div>

									{error && <p className='login-warning'>Invalid email or password!</p>}

									<div className='login-submit'>
										<button type='submit' disabled={!touched.email || !touched.password || errors.email || errors.password}>
											<i className='bx bxs-user-check bx-sm'></i>
											Log In
										</button>
									</div>

									<div className='login-forgot-password'>
										<Link to='/PetPals/forgot-password'>Forgot password?</Link>
									</div>
								</Form>

								<div className='login-seperator'>
									<hr />
									<span>or log in with</span>
									<hr />
								</div>

								<div className='login-social'>
									<button className='login-google' onClick={signUpWithGoogle}>
										<i className='bx bxl-google bx-sm'></i> Google
									</button>
								</div>

								<div className='login-sign-up'>
									<p>
										Not a member yet? <Link to='/PetPals/signup'>Sign up</Link>
									</p>
								</div>
							</motion.div>
						)}
					</Formik>
				</AnimatePresence>
			</motion.section>
		</>
	);
}
