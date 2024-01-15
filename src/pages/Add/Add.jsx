import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { auth, db } from '../../../firebase.config';
import { collection, addDoc } from "firebase/firestore";
import { AnimatePresence, motion } from 'framer-motion';
import './Add.css';

export default function Add() {

    let uid = '';
    auth.currentUser ? uid = auth.currentUser.uid : uid = '';

    const [petData, setPetData] = useState({
        userId: uid,
        animalType: 'cat',
        gender: 'male',
        ageFormat: 'days',
        age: '',
        img1: '',
        img2: '',
        img3: '',
        petDescription: '',
    });

    const validationSchema = Yup.object({
        animalType: Yup.string().required('Please select one.'),
        gender: Yup.string().required('Please select a gender'),
        ageFormat: Yup.string().required('Please select one.'),
        age: Yup.number().min(1, 'Please enter a valid age').max(30, 'Please enter a valid age').required('Age is required'),
        img1: Yup.string().required('At least one image is required'),
        img2: Yup.string(),
        img3: Yup.string(),
        petDescription: Yup.string().min(20, 'Description must be at least 20 characters').max(200, 'Description must be at most 200 characters').required('Description is required'),
    });

    function handleImageChange(e, imgKey) {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPetData(prevData => ({ ...prevData, [imgKey]: imageUrl }));
        }
    }

    function handleSubmit() {

    }

    return (

        <main className='add-page'>
            <AnimatePresence mode="wait">
                <Formik initialValues={petData} validationSchema={validationSchema} onSubmit={handleSubmit} enableReinitialize>
                    {
                        () => (
                            <motion.div
                                layout
                                className="add-form-container"
                                initial={{ opacity: 0, x: '-5%' }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: '5%' }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.1,
                                    ease: [0, 0.71, 0.2, 1.01],
                                }}
                            >
                                <h2 className='add-form-title'>Add a pet</h2>

                                <Form className="add-form">

                                    <div className="animal-toggle">
                                        <div className="animal-type">

                                            <label htmlFor='animalType'>What kind of pet do you have? </label>

                                            <div className="radio-inputs">
                                                <label className="radio">
                                                    <Field type="radio" name="animalType" value="cat" />
                                                    <span className="name">Cat</span>
                                                </label>

                                                <label className="radio">
                                                    <Field type="radio" name="animalType" value="dog" />
                                                    <span className="name">Dog</span>
                                                </label>
                                            </div>

                                        </div>
                                        <div className="add-warning">
                                            <ErrorMessage name="animalType" />
                                        </div>
                                    </div>


                                    <div className="gender-toggle">
                                        <div className="gender">

                                            <label htmlFor='gender'>Is your pet a? </label>

                                            <div className="radio-inputs">
                                                <label className="radio">
                                                    <Field type="radio" name="gender" value="male" />
                                                    <span className="name">Handsome boy</span>
                                                </label>

                                                <label className="radio">
                                                    <Field type="radio" name="gender" value="female" />
                                                    <span className="name">Pretty girl</span>
                                                </label>
                                            </div>

                                        </div>
                                        <div className="add-warning">
                                            <ErrorMessage name="gender" />
                                        </div>
                                    </div>

                                    <div className="age-selector">

                                        <div className="select-age">

                                            <label htmlFor='age'>How old is your pet? </label>

                                            <div className="age-age-format-selector">

                                                <Field type="number" name="age" className="age-input" />

                                                <div className="radio-inputs">
                                                    <label className="radio">
                                                        <Field type="radio" name="ageFormat" value="days" />
                                                        <span className="name">Days</span>
                                                    </label>

                                                    <label className="radio">
                                                        <Field type="radio" name="ageFormat" value="months" />
                                                        <span className="name">Months</span>
                                                    </label>

                                                    <label className="radio">
                                                        <Field type="radio" name="ageFormat" value="years" />
                                                        <span className="name">Years</span>
                                                    </label>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="add-warning">
                                            <ErrorMessage name="age" />
                                        </div>

                                    </div>

                                    <div className="image-selector">

                                        <div className="select-images">

                                            <p className='image-selector-label'>Select up to 3 images</p>

                                            <div className="image-containers">
                                                <label htmlFor='img1' style={{ backgroundImage: petData.img1 ? `url(${petData.img1})` : 'none', backgroundColor: petData.img1 ? 'transparent' : 'white', borderRadius: '12px', backgroundSize: 'cover', boxShadow: petData.img1 ? 'inset 0 0 0 100vmax rgba(0, 0, 0, 0.5)' : 'none' }}>
                                                    <div className="image-container">
                                                        {<i className='bx bx-image-add bx-md upload-icon' style={{ color: petData.img1 ? 'white' : 'black', }}></i>}
                                                    </div>
                                                </label>

                                                <label htmlFor='img2' style={{ backgroundImage: petData.img2 ? `url(${petData.img2})` : 'none', backgroundColor: petData.img2 ? 'transparent' : 'white', borderRadius: '12px', backgroundSize: 'cover', boxShadow: petData.img2 ? 'inset 0 0 0 100vmax rgba(0, 0, 0, 0.5)' : 'none' }}>
                                                    <div className="image-container">
                                                        {<i className='bx bx-image-add bx-md upload-icon' style={{ color: petData.img2 ? 'white' : 'black' }}></i>}
                                                    </div>
                                                </label>

                                                <label htmlFor='img3' style={{ backgroundImage: petData.img1 ? `url(${petData.img3})` : 'none', backgroundColor: petData.img3 ? 'transparent' : 'white', borderRadius: '12px', backgroundSize: 'cover', boxShadow: petData.img3 ? 'inset 0 0 0 100vmax rgba(0, 0, 0, 0.5)' : 'none' }}>
                                                    <div className="image-container">
                                                        {<i className='bx bx-image-add bx-md upload-icon' style={{ color: petData.img3 ? 'white' : 'black' }}></i>}
                                                    </div>
                                                </label>

                                            </div>

                                            <input type="file" name='img1' id='img1' accept="image/*" className='image-upload' onChange={(e) => handleImageChange(e, 'img1')} />
                                            <input type="file" name='img2' id='img2' accept="image/*" className='image-upload' onChange={(e) => handleImageChange(e, 'img2')} />
                                            <input type="file" name='img3' id='img3' accept="image/*" className='image-upload' onChange={(e) => handleImageChange(e, 'img3')} />
                                        </div>

                                        <div className="add-warning">
                                            <ErrorMessage name="img1" />
                                        </div>
                                    </div>
                                    <div className="description-section">

                                        <div className="write-description">
                                            <label htmlFor="pet-description" className="description">A brief description about your pet:</label>
                                            <Field as="textarea" rows={5} name='petDescription' className='pet-description' />
                                        </div>
                                        <div className="add-warning" style={{ marginTop: '0.5rem' }}>
                                            <ErrorMessage name="petDescription" />
                                        </div>
                                    </div>

                                    <button className='add-page-submit'>Submit</button>
                                </Form>
                            </motion.div>
                        )
                    }
                </Formik>
            </AnimatePresence >
        </main >

    );
}