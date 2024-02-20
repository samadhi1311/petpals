import { useState, useEffect } from "react";
import { db } from '../../../firebase.config';
import { useParams } from 'react-router-dom';
import { collection, onSnapshot, query, where } from "firebase/firestore";
import MiniLoader from '../../global/components/MiniLoader/MiniLoader';
import Pet from '../../global/assets/pet.png'
import PetHouse from '../../global/assets/pet-house.png'
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
                    console.log(snapshot.docs[0].data());
                })
            } catch (error) {
                console.error("Error fetching document:", error);
            }
        };

        fetchUserData();
    }, [uid]);

    return (
        <main className='profile-page'>
            {
                user ?
                    (
                        <div className='profile-profile-container'>
                            <div className="profile-main-profile-container">
                                <h2>{user ? user.firstName + " " + user.lastName : ""}</h2>
                                <img src={ProfilePhoto} alt="profile" className='profile-profile-photo' />
                            </div>
                            <div className="profile-sub-profile-container">
                                <p>Account type: {user ? user.accountType : ""}</p>
                                <p>Contact: {user ? user.contactNumber : ""}</p>
                                <p>Address: {user ? user.buildingNumber + ", " + user.street + ", " + user.city + ", " + user.zipCode : ""}</p>
                            </div>
                        </div>
                    ) : <MiniLoader title="Please Wait" message="Fetching user data" />
            }
        </main>
    )
}