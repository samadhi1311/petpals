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
					if (userData.city) {
						// Perform geocoding to convert the address into coordinates
						console.log('address', userData.city);
					}
				});
			} catch (error) {
				console.error('Error fetching document:', error);
			}
		};

		fetchUserData();
	}, [uid]);

	return (
		<motion.main className='profile-page' variants={transitions} initial='hidden' animate='visible' exit='exit'>
			{user ? (
				<div className='profile-profile-container'>
					<div className='profile-main-profile-container'>
						<h2>{user.firstName + ' ' + user.lastName}</h2>
						<img src={ProfilePhoto} alt='profile' className='profile-profile-photo' />
					</div>
					<div className='profile-sub-profile-container'>
						<p>Account type: {user.accountType}</p>
						<p>Contact: {user.contactNumber}</p>
						<p>Address: {user.buildingNumber + ', ' + user.street + ', ' + user.city + ', ' + user.zipCode}</p>
						<button>Find Location</button>
					</div>
				</div>
			) : (
				<MiniLoader title='Please Wait' message='Fetching user data' />
			)}
		</motion.main>
	);
}

{
	/**
!!!!My Google Cloud authentication for the payment details is said to be invalid


import { useState, useEffect } from "react";
import { db } from '../../../firebase.config';
import { useParams } from 'react-router-dom';
import { collection, onSnapshot, query, where } from "firebase/firestore";
import MiniLoader from '../../global/components/MiniLoader/MiniLoader';
import Pet from '../../global/assets/pet.png';
import PetHouse from '../../global/assets/pet-house.png';
import './Profile.css';

export default function Profile() {
    const { uid } = useParams();
    const [user, setUser] = useState(null);
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("uid", "==", uid));
    const ProfilePhoto = user?.accountType === "individual" ? Pet : PetHouse;

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                onSnapshot(q, (snapshot) => {
                    setUser(snapshot.docs[0].data());
                });
            } catch (error) {
                console.error("Error fetching document:", error);
            }
        };

        fetchUserData();
    }, [uid]);

    const showMapWithLocation = (latitude, longitude) => {
        const mapOptions = {
            center: { lat: latitude, lng: longitude },
            zoom: 14 // You can adjust the zoom level as needed
        };

        const map = new window.google.maps.Map(document.getElementById("map"), mapOptions);

        // Creating a marker on the map for the user's location
        new window.google.maps.Marker({
            position: { lat: latitude, lng: longitude },
            map: map,
            title: "User Location"
        });
    };

    const handleFindLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    console.log("Latitude: " + latitude);
                    console.log("Longitude: " + longitude);
                    showMapWithLocation(latitude, longitude);
                },
                (error) => {
                    console.error("Error getting geolocation:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };

    return (
        <>
        <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap" async defer></script>
        <main className='profile-page'>
            {
                user ?
                    (
                        <div className='profile-profile-container'>
                            <div className="profile-main-profile-container">
                                <h2>{user.firstName + " " + user.lastName}</h2>
                                <img src={ProfilePhoto} alt="profile" className='profile-profile-photo' />
                            </div>
                            <div className="profile-sub-profile-container">
                                <p>Account type: {user.accountType}</p>
                                <p>Contact: {user.contactNumber}</p>
                                <p>Address: {user.buildingNumber + ", " + user.street + ", " + user.city + ", " + user.zipCode}</p>
                                <button onClick={handleFindLocation}>Find Location</button>
                            </div>
                        </div>
                    ) : <MiniLoader title="Please Wait" message="Fetching user data" />
            }
            <div id="map" className="fullscreen-map"></div>
        </main>
        </>
    )
}

*/
}
