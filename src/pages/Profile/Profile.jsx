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
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [addressLatitude, setAddressLatitude] = useState(null);
    const [addressLongitude, setAddressLongitude] = useState(null);
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("uid", "==", uid));
    const ProfilePhoto = user?.accountType === "individual" ? Pet : PetHouse;

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                onSnapshot(q, (snapshot) => {
                    const userData = snapshot.docs[0].data();
                    setUser(userData);
                    if (userData.address) {
                        // Perform geocoding to convert the address into coordinates
                        geocodeAddress(userData.address);
                    }
                });
            } catch (error) {
                console.error("Error fetching document:", error);
            }
        };

        fetchUserData();
    }, [uid]);

    const geocodeAddress = (address) => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=YOUR_API_KEY`)
            .then(response => response.json())
            .then(data => {
                if (data.results && data.results.length > 0) {
                    const { lat, lng } = data.results[0].geometry.location;
                    setAddressLatitude(lat);
                    setAddressLongitude(lng);
                } else {
                    console.error("No results found for the address");
                }
            })
            .catch(error => {
                console.error("Error geocoding address:", error);
            });
    };

    const handleFindLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLatitude(latitude);
                    setLongitude(longitude);
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
                                {latitude && longitude && (
                                    <div>
                                        <p>Latitude: {latitude}</p>
                                        <p>Longitude: {longitude}</p>
                                    </div>
                                )}
                                {addressLatitude && addressLongitude && (
                                    <div>
                                        <p>Address Latitude: {addressLatitude}</p>
                                        <p>Address Longitude: {addressLongitude}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : <MiniLoader title="Please Wait" message="Fetching user data" />
            }
        </main>
    )
}






{/**
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

*/}