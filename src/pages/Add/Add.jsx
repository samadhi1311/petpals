import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { auth, googleAuthProvider } from '../../../firebase.config';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../../firebase.config';
import { AnimatePresence, motion } from 'framer-motion';
import './Add.css';

export default function Add() {

    const [petData, setPetData] = useState({
        animalType: 'cat',
        gender: 'male',
        ageFormat: 'days',
        age: '',
        img1URL: '',
    });

    const validationSchema = Yup.object({
        animalType: Yup.string().required('Please select one.'),
        gender: Yup.string().required('Please select a gender'),
        ageFormat: Yup.string().required('Please select one.'),
        age: Yup.string().required('Age is required'),
    });

    function handleSubmit() {

    }

    return (

        <section>
            <AnimatePresence mode="wait">
                <Formik initialValues={petData} validationSchema={validationSchema} onSubmit={handleSubmit} enableReinitialize>
                    {
                        () => (
                            <motion.div
                                layout
                                className="form-container"
                                initial={{ opacity: 0, x: '-5%' }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: '5%' }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.1,
                                    ease: [0, 0.71, 0.2, 1.01],
                                }}
                            >
                                <h2>Add a pet</h2>

                                <Form className="form">

                                    <div className="animal-toggle">
                                        <div className="animal-type">

                                            <p>What kind of pet do you have? </p>

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
                                        <div className="warning">
                                            <ErrorMessage name="animalType" />
                                        </div>
                                    </div>


                                    <div className="gender-toggle">
                                        <div className="gender">

                                            <p>Is your pet a? </p>

                                            <div className="radio-inputs">
                                                <label className="radio">
                                                    <Field type="radio" name="gender" value="male" />
                                                    <span className="name">Handsome boy</span>
                                                </label>

                                                <label className="radio">
                                                    <Field type="radio" name="gender" value="female" />
                                                    <span className="name">pretty girl</span>
                                                </label>
                                            </div>

                                        </div>
                                        <div className="warning">
                                            <ErrorMessage name="gender" />
                                        </div>
                                    </div>
                                </Form>
                            </motion.div>
                        )
                    }
                </Formik>
            </AnimatePresence >
        </section >

    );
}