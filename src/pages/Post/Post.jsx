import { useState, useEffect } from 'react';
import { db } from '../../../firebase.config';
import { useParams } from 'react-router-dom';
import { collection, query, doc, getDoc, getDocs, where, updateDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Chat from '../../global/components/Chat/Chat';
import MiniLoader from '../../global/components/MiniLoader/MiniLoader';
import Slider from 'react-slick';
import { transitions } from '../../global/Transitions';
import { APIProvider, Map, useMapsLibrary, useMap } from '@vis.gl/react-google-maps';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Post.css';

export default function Post({ isLoggedIn, currentUser }) {
	const { postId } = useParams();
	const [post, setPost] = useState(null);
	const [authorId, setAuthorId] = useState('');
	const [author, setAuthor] = useState(null);
	const [user, setUser] = useState(null);
	const [ageFormat, setAgeFormat] = useState('');
	const [origin, setOrigin] = useState('');
	const [destination, setDestination] = useState('');
	const [distance, setDistance] = useState('');

	// Chunnakkam coordinates
	// No. 60, Iynar Kovil Veethy, Chunnakkam
	const position = { lat: 9.7376, lng: 80.0245 };

	function Directions() {
		const map = useMap();
		const routesLibrary = useMapsLibrary('routes');
		const [directionsService, setDirectionsService] = useState(/** google.maps.DirectionService*/ null);
		const [directionsRenderer, setDirectionsRenderer] = useState(/** google.maps.DirectionRenderer*/ null);
		const [routes, setRoutes] = useState(/** google.maps.DirectionsRoute[] */ null);

		useEffect(() => {
			if (!map || !routesLibrary) {
				return;
			}
			setDirectionsService(new routesLibrary.DirectionsService());
			setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
		}, [routesLibrary, map]);

		useEffect(() => {
			if (!directionsService || !directionsRenderer) {
				return;
			}

			directionsService
				.route({
					origin: origin,
					destination: destination,
					travelMode: google.maps.TravelMode.DRIVING,
				})
				.then((response) => {
					directionsRenderer.setDirections(response);
					setRoutes(response.routes);
				});
		}, [directionsService, directionsRenderer]);

		useEffect(() => {
			if (routes && routes[0] && routes[0].legs[0] && routes[0].legs[0].distance && routes[0].legs[0].distance.value) {
				setDistance(routes[0].legs[0].distance.value); // Set distance only when it's available
			}
		}, [routes]);

		return null;
	}

	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const usersCollection = collection(db, 'users');

	useEffect(() => {
		const fetchPostData = async () => {
			try {
				const postSnap = await getDoc(doc(db, 'posts', postId));

				if (postSnap.exists()) {
					const postData = postSnap.data();
					setPost(postData);
					setAuthorId(postData.userId);

					if (postData.age === 1) {
						setAgeFormat(postData.ageFormat.slice(0, -1));
					} else {
						setAgeFormat(postData.ageFormat);
					}
				} else {
					return <Modal success={false} title='Error' content='No such post.' />;
				}
			} catch (error) {
				return <Modal success={false} title='Error' content={error.message} />;
			}
		};

		fetchPostData();
	}, [postId]);

	useEffect(() => {
		const fetchAuthorData = async () => {
			try {
				// Fetch author data based on userId
				const q = query(usersCollection, where('uid', '==', authorId));
				const querySnapshot = await getDocs(q);
				if (!querySnapshot.empty) {
					// Check if any documents are returned
					setAuthor(querySnapshot.docs[0].data());
				}
			} catch (error) {
				return <Modal success={false} title='Error' content={error.message} />;
			}
		};

		if (authorId) {
			fetchAuthorData();
		}
	}, [authorId]);

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				// Fetch user data based on userId
				const q = query(usersCollection, where('uid', '==', currentUser.uid));
				const querySnapshot = await getDocs(q);
				if (!querySnapshot.empty) {
					// Check if any documents are returned
					setUser(querySnapshot.docs[0].data());
				}
			} catch (error) {
				return <Modal success={false} title='Error' content={error.message} />;
			}
		};

		if (currentUser) {
			fetchUserData();
		}
	}, [currentUser]);

	useEffect(() => {
		setDestination(author?.buildingNumber + ', ' + author?.street + ', ' + author?.city + ', ' + author?.district);
	}, [author, destination]);

	useEffect(() => {
		setOrigin(user?.buildingNumber + ', ' + user?.street + ', ' + user?.city + ', ' + user?.district);
	}, [author, origin]);

	const handleAdopt = async () => {
		const postRef = doc(db, 'posts', postId);
		await updateDoc(postRef, { status: 'someone else wants me' });
	};

	return (
		<>
			<div className='subtle-gradient-background'></div>
			<motion.main className='post-page' variants={transitions} initial='hidden' animate='visible' exit='exit'>
				{post ? (
					<div className='post-post-container'>
						<div className='post-main-post-container'>
							<div className='post-img-container'>
								<h2>Post Details</h2>
								<div className='slider-container'>
									<Slider {...sliderSettings}>
										{post.img1 && <img src={post.img1} alt='post image 1' />}
										{post.img2 && <img src={post.img2} alt='post image 2' />}
										{post.img3 && <img src={post.img3} alt='post image 3' />}
									</Slider>
								</div>
							</div>
							<div className='post-text-container'>
								<p>
									Posted by:
									<Link to={`/petpals/users/${authorId}`}>{' ' + author?.firstName + ' ' + author?.lastName}</Link>
								</p>
								<p>Animal Type: {post.animalType}</p>
								<p>Age: {post.age + ' ' + ageFormat}</p>
								<p>Gender: {post.gender}</p>
								<br />
								<p>Hello {post.petDescription}</p>
								<br />
								<button onClick={handleAdopt}>
									<i className='bx bxs-happy-heart-eyes bx-sm'></i>
									Request to adopt
								</button>
							</div>
						</div>

						{isLoggedIn ? (
							<div className='post-directions'>
								<div className='directions-container'>
									<h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
										<i className='bx bxs-map bx-md'></i>
										Find Directions
									</h2>
									<br />
									<p>Your location: {origin}</p>
									<p>Destination: {destination}</p>
									<p>Distance: {distance / 1000 + ' km'}</p>
								</div>
								<div className='post-map-container'>
									<APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
										<Map mapId={import.meta.env.VITE_GOOGLE_MAPS_ID}>
											<Directions />
										</Map>
									</APIProvider>
								</div>
							</div>
						) : null}
					</div>
				) : (
					<MiniLoader title='Please Wait' message='Fetching user data' />
				)}
				{isLoggedIn && author ? <Chat authorId={authorId} postId={postId} author={author} currentUser={currentUser} /> : null}
			</motion.main>
		</>
	);
}
