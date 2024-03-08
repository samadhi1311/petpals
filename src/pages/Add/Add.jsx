import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { auth, db, storage } from '../../../firebase.config';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage';
import Compressor from 'compressorjs';
import { AnimatePresence, motion } from 'framer-motion';
import Modal from '../../global/components/Modal/Modal';
import { useNavigate } from 'react-router-dom';
import './Add.css';

export default function Add() {
	let uid = '';

	const navigate = useNavigate();

	const [success, setSuccess] = useState(false);

	const [postId, setPostId] = useState(null);

	const [petData, setPetData] = useState({
		userId: uid,
		animalType: 'cat',
		gender: 'male',
		ageFormat: 'days',
		age: '',
		petDescription: '',
		img1: '',
		img2: '',
		img3: '',
	});

	const [petImages, setPetImages] = useState({
		img1: '',
		img2: '',
		img3: '',
	});

	const validationSchema = Yup.object({
		animalType: Yup.string().required('Please select one.'),
		gender: Yup.string().required('Please select a gender'),
		ageFormat: Yup.string().required('Please select one.'),
		age: Yup.number().min(1, 'Please enter a valid age').max(30, 'Please enter a valid age').required('Age is required'),
		img1: Yup.string().required('Please upload 3 images'),
		img2: Yup.string().required('Please upload 3 images'),
		img3: Yup.string().required('Please upload 3 images'),
		petDescription: Yup.string().min(20, 'Description must be at least 20 characters').max(200, 'Description must be at most 200 characters').required('Description is required'),
	});

	async function addPostToFirestore(values) {
		try {
			// Check if postId is already set
			if (postId) {
				return postId;
			}

			console.log(values);

			const postRef = await addDoc(collection(db, 'posts'), {
				userId: uid,
				animalType: values.animalType,
				gender: values.gender,
				ageFormat: values.ageFormat,
				age: values.age,
				petDescription: values.petDescription,
				img1: '',
				img2: '',
				img3: '',
			});

			console.log('Post added to Firestore with ID:', postRef.id);
			setPostId(postRef.id);
			console.log('postId in addPost: ', postId);
			return postRef.id;
		} catch (error) {
			console.error('Error adding post to Firestore:', error);
			throw error;
		}
	}

	async function handleImageChange(e, imgKey, values) {
		const file = e.target.files[0];
		if (file) {
			try {
				// Compress the image before updating the state
				const compressedImage = await compressImage(file);

				//check file size
				if (size <= 1024) {
					console.log('File size must be greater than 1 KB');
				}

				// Show the thumbnail immediately after selecting the image
				const imageUrl = URL.createObjectURL(compressedImage);
				setPetImages((prevData) => ({ ...prevData, [imgKey]: imageUrl }));

				setPetData((prevData) => ({ ...prevData, [imgKey]: compressedImage }));
			} catch (error) {
				console.error('Error compressing or uploading image:', error);
				alert('Error compressing or uploading image: ' + error);
			}
		}
	}

	async function compressImage(file) {
		return new Promise((resolve) => {
			// Add a check to ensure that the file is a valid File or Blob object
			if (!(file instanceof File || file instanceof Blob)) {
				console.error('Invalid file type for compression:', file);
				resolve({ compressImage: file, size: file.size });
				return;
			}

			new Compressor(file, {
				quality: 0.8,
				resize: 'cover',
				width: 512,
				height: 512,
				success(result) {
					resolve({ compressedImage: result, size: result.size });
				},
				error(error) {
					console.error('Error compressing image:', error);
					resolve({ compressedImage: file, size: file.size });
				},
			});
		});
	}

	async function handleSubmit(values) {
		try {
			// If postId is not available, add the post to Firestore first
			auth.currentUser ? (uid = auth.currentUser.uid) : (uid = '');
			const newPostId = await addPostToFirestore(values);
			setPostId(newPostId); // Update postId state with the newly created post ID

			// Create an object to store download URLs
			const downloadURLs = {};

			// Loop through the selected images and upload them to storage
			for (let i = 1; i <= 3; i++) {
				const imgKey = `img${i}`;
				const file = petData[imgKey];

				if (file) {
					// Upload the compressed image to Firebase Storage with the post ID
					const storageRef = ref(storage, `posts/${newPostId}/${imgKey}`);
					await uploadBytes(storageRef, file);

					// Get the download URL of the uploaded image
					const downloadURL = await getDownloadURL(storageRef);
					console.log('Download URL: ', downloadURL);

					// Store the download URL in the object
					downloadURLs[imgKey] = downloadURL;

					// Update the post document with the image URL in the petData state
					setPetData((prevData) => ({
						...prevData,
						[imgKey]: downloadURL, // Update with the compressed image URL
					}));

					console.log('petData url: ', petData.img1);
				}
			}

			await updateDoc(doc(db, 'posts', newPostId), {
				img1: downloadURLs.img1,
				img2: downloadURLs.img2,
				img3: downloadURLs.img3,
			});

			console.log('img1 :', petData.img1);
			// Now that image URLs are set, proceed with the form submission
			console.log('Form submitted successfully!');

			setSuccess(true);
			setTimeout(() => navigate('/'), 3000);
		} catch (error) {
			console.error('Error submitting form:', error);
		}
	}

	return (
		<main className='add-page'>
			<AnimatePresence mode='wait'>
				{success ? (
					<Modal title='Good Job!!' content='Your pet pal has been added successfully!' success={true} />
				) : (
					<Formik initialValues={petData} validationSchema={validationSchema} onSubmit={handleSubmit}>
						{(values) => (
							<motion.div
								layout
								className='add-form-container'
								initial={{ opacity: 0, x: '-5%' }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: '5%' }}
								transition={{
									duration: 0.5,
									delay: 0.1,
									ease: [0, 0.71, 0.2, 1.01],
								}}>
								<h2 className='add-form-title'>Add a pet</h2>

								<Form className='add-form'>
									<div className='add-animal-toggle'>
										<div className='add-animal-type'>
											<label htmlFor='animalType'>What kind of pet do you have? </label>

											<div className='add-radio-inputs'>
												<label className='add-radio'>
													<Field type='radio' name='animalType' value='Cat' />
													<span className='add-name'>Cat</span>
												</label>

												<label className='add-radio'>
													<Field type='radio' name='animalType' value='Dog' />
													<span className='add-name'>Dog</span>
												</label>
											</div>
										</div>
										<div className='add-warning'>
											<ErrorMessage name='animalType' />
										</div>
									</div>

									<div className='add-gender-toggle'>
										<div className='add-gender'>
											<label htmlFor='gender'>Is your pet a? </label>

											<div className='add-radio-inputs'>
												<label className='add-radio'>
													<Field type='radio' name='gender' value='Male' />
													<span className='add-name'>Handsome boy</span>
												</label>

												<label className='add-radio'>
													<Field type='radio' name='gender' value='Female' />
													<span className='add-name'>Pretty girl</span>
												</label>
											</div>
										</div>
										<div className='add-warning'>
											<ErrorMessage name='gender' />
										</div>
									</div>

									<div className='add-age-selector'>
										<div className='add-select-age'>
											<label htmlFor='age'>How old is your pet? </label>

											<div className='add-age-format-selector'>
												<Field type='number' name='age' className='add-age-input' />

												<div className='add-radio-inputs'>
													<label className='add-radio'>
														<Field type='radio' name='ageFormat' value='days' />
														<span className='add-name'>Days</span>
													</label>

													<label className='add-radio'>
														<Field type='radio' name='ageFormat' value='months' />
														<span className='add-name'>Months</span>
													</label>

													<label className='add-radio'>
														<Field type='radio' name='ageFormat' value='years' />
														<span className='add-name'>Years</span>
													</label>
												</div>
											</div>
										</div>

										<div className='add-warning'>
											<ErrorMessage name='age' />
										</div>
									</div>

									<div className='add-image-selector'>
										<div className='add-select-images'>
											<p className='add-image-selector-label'>Select up to 3 images</p>

											<div className='add-image-containers'>
												<label
													htmlFor='img1'
													style={{
														backgroundImage: petImages.img1 ? `url(${petImages.img1})` : 'none',
														backgroundColor: petImages.img1 ? 'transparent' : 'white',
														borderRadius: '12px',
														backgroundSize: 'cover',
														boxShadow: petImages.img1 ? 'inset 0 0 0 100vmax rgba(0, 0, 0, 0.5)' : 'none',
													}}>
													<div className='add-image-container'>
														{<i className='bx bx-image-add bx-md upload-icon' style={{ color: petImages.img1 ? 'white' : 'black' }}></i>}
													</div>
												</label>

												<label
													htmlFor='img2'
													style={{
														backgroundImage: petImages.img2 ? `url(${petImages.img2})` : 'none',
														backgroundColor: petImages.img2 ? 'transparent' : 'white',
														borderRadius: '12px',
														backgroundSize: 'cover',
														boxShadow: petImages.img2 ? 'inset 0 0 0 100vmax rgba(0, 0, 0, 0.5)' : 'none',
													}}>
													<div className='add-image-container'>
														{<i className='bx bx-image-add bx-md upload-icon' style={{ color: petImages.img2 ? 'white' : 'black' }}></i>}
													</div>
												</label>

												<label
													htmlFor='img3'
													style={{
														backgroundImage: petImages.img3 ? `url(${petImages.img3})` : 'none',
														backgroundColor: petImages.img3 ? 'transparent' : 'white',
														borderRadius: '12px',
														backgroundSize: 'cover',
														boxShadow: petImages.img3 ? 'inset 0 0 0 100vmax rgba(0, 0, 0, 0.5)' : 'none',
													}}>
													<div className='add-image-container'>
														{<i className='bx bx-image-add bx-md upload-icon' style={{ color: petImages.img3 ? 'white' : 'black' }}></i>}
													</div>
												</label>
											</div>

											<input type='file' name='img1' id='img1' accept='image/*' className='add-image-upload' onChange={(e) => handleImageChange(e, 'img1', values)} required />
											<input type='file' name='img2' id='img2' accept='image/*' className='add-image-upload' onChange={(e) => handleImageChange(e, 'img2', values)} required />
											<input type='file' name='img3' id='img3' accept='image/*' className='add-image-upload' onChange={(e) => handleImageChange(e, 'img3', values)} required />
										</div>

										<div className='add-warning'>
											<ErrorMessage name='img1' />
											<ErrorMessage name='img2' />
											<ErrorMessage name='img3' />
										</div>
									</div>
									<div className='add-description-section'>
										<div className='add-write-description'>
											<label htmlFor='pet-description' className='add-description'>
												A brief description about your pet:
											</label>
											<Field as='textarea' rows={5} name='petDescription' className='add-pet-description' />
										</div>

										<div className='add-warning' style={{ marginTop: '0.5rem' }}>
											<ErrorMessage name='petDescription' />
										</div>
									</div>

									<button className='add-page-submit' type='submit'>
										Submit
									</button>
								</Form>
							</motion.div>
						)}
					</Formik>
				)}
			</AnimatePresence>
		</main>
	);
}
