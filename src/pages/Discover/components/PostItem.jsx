import { Link } from 'react-router-dom';
import './PostItem.css';
import fallbackImage from '../../../global/assets/error.png';

export default function PostItem({ post }) {
	let status = <i className='bx bxs-compass bx-sm'></i>;

	if (post.status === 'I found my home') {
		status = <i className='bx bxs-badge-check bx-sm'></i>;
	} else if (post.status === 'Someone else wants me') {
		status = <i className='bx bxs-timer bx-sm'></i>;
	}

	return (
		<div className='post-container'>
			<img src={post.img3} alt='post image' className='post-img' onError={(e) => (e.target.src = fallbackImage)} />
			<span className='post-status'>
				{status} {post.status ?? 'looking for a home'}
			</span>
			<div className='post-text'>
				<p>{post.animalType}</p>
				<p>{post.gender}</p>
				<p>{post.age + ' ' + post.ageFormat}</p>
			</div>
			<Link to={`/PetPals/posts/${post.id}`}>
				<button style={{ width: 'max-content', textAlign: 'center', marginLeft: ' auto', marginRight: 'auto' }}>
					<i className='bx bx-right-top-arrow-circle bx-sm'></i>
					More details
				</button>
			</Link>
		</div>
	);
}
