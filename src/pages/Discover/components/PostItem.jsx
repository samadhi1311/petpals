import { Link } from 'react-router-dom';
import './PostItem.css';
import fallbackImage from '../../../global/assets/error.png';

export default function PostItem({ post }) {
	console.log(post.id);

	return (
		<div className='post-container'>
			<img src={post.img3} alt='' className='post-img' onError={(e) => (e.target.src = fallbackImage)} />
			<div className='post-text'>
				<p>{post.animalType}</p>
				<p>{post.gender}</p>
				<p>{post.age + ' ' + post.ageFormat}</p>
			</div>
			<Link to={`/PetPals/posts/${post.id}`}>
				<button>More details</button>
			</Link>
		</div>
	);
}
