import { auth, db } from '../../../firebase.config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import MiniLoader from '../../global/components/MiniLoader/MiniLoader';
import Pet from '../../global/assets/pet.png';
import PetHouse from '../../global/assets/pet-house.png';
import './Profile.css';

export default function MyProfile() {
	let uid = '';
	auth.currentUser ? (uid = auth.currentUser.uid) : (uid = '');

	const [user, setUser] = useState(null);
	const usersCollection = collection(db, 'users');
	const q = query(usersCollection, where('uid', '==', uid));
	const ProfilePhoto = user?.accountType === 'individual' ? Pet : PetHouse;

	const [isLoggedIn, setIsLoggedIn] = useState(!!auth.currentUser);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setIsLoggedIn(!!user);
		});

		return () => unsubscribe();
	}, []);

	const navigate = useNavigate();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setIsLoggedIn(!!user);
		});

		return () => unsubscribe();
	}, []);

	const handleLogOut = async () => {
		await signOut(auth);
		navigate('/petpals/login');
	};

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				onSnapshot(q, (snapshot) => {
					setUser(snapshot.docs[0]?.data()); // Use optional chaining to avoid errors if the data is null
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
			<main className='profile-page'>
				{user ? (
					<div className='profile-profile-container'>
						<div className='profile-main-profile-container'>
							<h2>{user ? user.firstName + ' ' + user.lastName : ''}</h2>
							<img src={ProfilePhoto} alt='profile photo' className='profile-profile-photo' />
						</div>
						<div className='profile-sub-profile-container'>
							<p>Account type: {user ? user.accountType : ''}</p>
							<p>Contact: {user ? user.contactNumber : ''}</p>
							<p>Address: {user ? user.buildingNumber + ', ' + user.street + ', ' + user.city + ', ' + user.zipCode : ''}</p>
							<button onClick={handleLogOut}>Log Out</button>
						</div>
					</div>
				) : (
					<MiniLoader title='Please Wait' message='Fetching user data' />
				)}
			</main>
		</>
	);
}
