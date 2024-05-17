import { useState, useEffect } from 'react';
import { db } from '../../../firebase.config';
import { useParams } from 'react-router-dom';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { motion } from 'framer-motion';
import MiniLoader from '../../global/components/MiniLoader/MiniLoader';
import Pet from '../../global/assets/pet.png';
import PetHouse from '../../global/assets/pet-house.png';
import './Profile.css';
import { transitions } from '../../global/Transitions';

export default function Profile({ isLoggedIn, currentUser }) {
	const { uid } = useParams();
	const [user, setUser] = useState(null);
	const usersCollection = collection(db, 'users');
	const ProfilePhoto = user?.accountType === 'individual' ? Pet : PetHouse;

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const q = query(usersCollection, where('uid', '==', uid));
				onSnapshot(q, (snapshot) => {
					const userData = snapshot.docs[0].data();
					setUser(userData);
				});
			} catch (error) {
				return <Modal success={false} title='Error' content={error.message} />;
			}
		};

		fetchUserData();
	}, [uid]);

	return (
		<>
			<div className='subtle-gradient-background'></div>
			<motion.main className='profile-page' variants={transitions} initial='hidden' animate='visible' exit='exit'>
				{user ? (
					<div className='profile-profile-container'>
						<div className='profile-main-profile-container'>
							<h2>{user.firstName + ' ' + user.lastName}</h2>
							<img src={ProfilePhoto} alt='profile photo' className='profile-profile-photo' />
						</div>
						<div className='profile-sub-profile-container'>
							<p>Account type: {user.accountType}</p>
							<p>Contact: {user.contactNumber}</p>
							<p>Address: {user.buildingNumber + ', ' + user.street + ', ' + user.city + ', ' + user.zipCode}</p>
						</div>
					</div>
				) : (
					<MiniLoader title='Please Wait' message='Fetching user data' />
				)}
			</motion.main>
		</>
	);
}
