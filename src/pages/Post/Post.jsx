import { useState, useEffect } from 'react';
import { db } from '../../../firebase.config';
import { useParams } from 'react-router-dom';
import { collection, query, doc, getDoc, getDocs, where } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import MiniLoader from '../../global/components/MiniLoader/MiniLoader';
import Chat from '../../global/components/Chat/Chat';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Post.css';

export default function Post({ isLoggedIn, currentUser }) {
	const { postId } = useParams();
	const [post, setPost] = useState(null);
	const [authorId, setAuthorId] = useState('');
	const [author, setAuthor] = useState(null);
	const [ageFormat, setAgeFormat] = useState('');

	const usersCollection = collection(db, 'users');

	const sliderSettings = {
		dots: true,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	useEffect(() => {
		const fetchPostData = async () => {
			try {
				const postSnap = await getDoc(doc(db, 'posts', postId));

				if (postSnap.exists()) {
					const postData = postSnap.data();
					console.log(postData);
					setPost(postData);
					setAuthorId(postData.userId);
					console.log(postData.userId);

					if (postData.age === 1) {
						setAgeFormat(postData.ageFormat.slice(0, -1));
					} else {
						setAgeFormat(postData.ageFormat);
					}
				} else {
					console.log('No such post');
				}
			} catch (error) {
				console.error('Error fetching post:', error);
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
					console.log(querySnapshot.docs[0].data());
				}
			} catch (error) {
				console.error('Error fetching author:', error);
			}
		};

		if (authorId) {
			fetchAuthorData();
		}
	}, [authorId]);

	return (
		<main className='post-page'>
			{post ? (
				<div className='post-post-container'>
					<h2>Post Details</h2>
					<div className='slider-container'>
						<Slider {...sliderSettings}>
							<img src={post.img1} alt='' className='slider-image' />

							<img src={post.img2} alt='' className='slider-image' />

							<img src={post.img3} alt='' className='slider-image' />
						</Slider>
					</div>
					<div className='post-main-post-container'>
						<p>Posted by: {post.userId}</p>
						<p>Animal Type: {post.animalType}</p>
						<p>Age: {post.age + ' ' + ageFormat}</p>
						<p>Gender: {post.gender}</p>
						<p>Hello {post.petDescription}</p>
						<Link to={`/PetPals/users/${authorId}`}>
							<button>Contact owner</button>
						</Link>
						{isLoggedIn ? <Chat isLoggedIn={isLoggedIn} postId={postId} authorId={authorId} currentUser={currentUser} /> : null}
					</div>
					<div className='profile-sub-profile-container'></div>
				</div>
			) : (
				<MiniLoader title='Please Wait' message='Fetching user data' />
			)}
		</main>
	);
}
