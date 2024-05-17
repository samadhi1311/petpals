import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik';
import * as Yup from 'yup';
import { AnimatePresence, motion } from 'framer-motion';
import Modal from '../../../global/components/Modal/Modal';
import '../Login.css';
import './ResetPassword.css';
import { auth } from '../../../../firebase.config';
import { sendPasswordResetEmail } from 'firebase/auth';

export default function ResetPassword() {
	const [email, setEmail] = useState('');
	const [showModal, setShowModal] = useState(false);

	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid email!').required('Email is required!'),
	});

	async function handleSubmit(values) {
		await sendPasswordResetEmail(auth, values.email)
			.then(() => {
				setShowModal(true);
			})
			.catch((error) => {
				return <Modal success={false} title='Error' content={error.message} />;
			});
	}

	return (
		<section className='reset-pwd'>
			<AnimatePresence mode='wait'>
				<Formik initialValues={{ email }} validationSchema={validationSchema} onSubmit={handleSubmit} className='reset-form-container'>
					{() => (
						<motion.div
							layout
							className='reset-form-container'
							initial={{ opacity: 0, x: '-5%' }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: '5%' }}
							transition={{
								duration: 0.5,
								delay: 0.1,
								ease: [0, 0.71, 0.2, 1.01],
							}}>
							<h2>Reset your password</h2>
							<Form className='reset-form'>
								<Field name='email' placeholder='Email' />
								<div className='warning'>
									<ErrorMessage name='email' />
								</div>

								<div className='submit'>
									<button type='submit'>Continue</button>
								</div>
							</Form>
						</motion.div>
					)}
				</Formik>
				{showModal && <Modal title='Modal Title' content='This is just a random text to depict there some information' success={false} setShow={setShowModal} />}
			</AnimatePresence>
		</section>
	);
}
