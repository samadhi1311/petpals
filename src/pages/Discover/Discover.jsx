import { useState, useEffect } from 'react';
import PostItem from './components/PostItem';
import './Discover.css';
import { db } from '../../../firebase.config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import ReactSlider from 'react-slider';
import { AnimatePresence, motion } from 'framer-motion';

export default function Discover() {
	const [posts, setPosts] = useState([]);
	const [showFilters, setShowFilters] = useState(false);
	const [loading, setLoading] = useState(true);
	let q;

	//filters
	const [filterOptions, setFilterOptions] = useState({
		dogs: true,
		cats: true,
		male: true,
		female: true,
		ageEnabled: false,
		age: [0, 30],
		ageFormat: 'months',
	});

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const postsCollectionRef = collection(db, 'posts');

				// Animal type
				let animalTypes = [];
				if (filterOptions.dogs) {
					animalTypes.push('dog');
				}
				if (filterOptions.cats) {
					animalTypes.push('cat');
				}

				// Gender
				let genders = [];
				if (filterOptions.male) {
					genders.push('male');
				}
				if (filterOptions.female) {
					genders.push('female');
				}

				// Age
				let ageRange = [];
				if (filterOptions.ageEnabled) {
					ageRange.push(filterOptions.age[0]);
					ageRange.push(filterOptions.age[1]);
					console.log(ageRange);
					q = query(
						postsCollectionRef,
						where('animalType', 'in', animalTypes),
						where('gender', 'in', genders),
						where('age', '>=', ageRange[0]),
						where('age', '<=', ageRange[1]),
						where('ageFormat', '==', filterOptions.ageFormat)
					);
				} else {
					q = query(postsCollectionRef, where('animalType', 'in', animalTypes), where('gender', 'in', genders));
				}

				const querySnapshot = await getDocs(q);
				const postData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
				setPosts(postData);
				setLoading(false); // Set loading to false after fetching data
				console.log('Posts fetched:', postData);
			} catch (error) {
				console.error('Error fetching posts:', error);
			}
		};

		fetchPosts();
	}, [filterOptions]); // Fetch posts on component mount

	return (
		<main className='discover-page'>
			<AnimatePresence mode='wait'>
				<div className='discover-main-container'>
					{showFilters ? (
						<motion.div
							className='discover-filters'
							layout
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{
								duration: 0.5,
								delay: 0.1,
								ease: [0, 0.71, 0.2, 1.01],
							}}>
							<div className='filter-text'>
								<span className='filter-header'>
									<h3>Filters</h3>
									<i className='bx bxs-x-circle bx-sm' onClick={() => setShowFilters(false)}></i>
								</span>
								<p>Adjust filters find your best match</p>
							</div>

							<p className='filter-option-text'>- Animal type -</p>
							<div className='animal-type'>
								<input
									type='checkbox'
									name='dogs'
									value='dogs'
									id='dogs'
									checked={filterOptions.dogs}
									onChange={(e) => setFilterOptions({ ...filterOptions, dogs: e.target.checked })}
								/>
								<label htmlFor='dogs' className='dogs'>
									Dogs
								</label>

								<input
									type='checkbox'
									name='cats'
									value='cats'
									id='cats'
									checked={filterOptions.cats}
									onChange={(e) => setFilterOptions({ ...filterOptions, cats: e.target.checked })}
								/>
								<label htmlFor='cats' className='cats'>
									Cats
								</label>
							</div>

							<p className='filter-option-text'>- Gender -</p>
							<div className='animal-gender'>
								<input
									type='checkbox'
									name='male'
									value='male'
									id='male'
									checked={filterOptions.male}
									onChange={(e) => setFilterOptions({ ...filterOptions, male: e.target.checked })}
								/>
								<label htmlFor='male' className='male'>
									Male
								</label>

								<input
									type='checkbox'
									name='female'
									value='female'
									id='female'
									checked={filterOptions.female}
									onChange={(e) => setFilterOptions({ ...filterOptions, female: e.target.checked })}
								/>
								<label htmlFor='female' className='female'>
									Female
								</label>
							</div>

							<div className='age-range'>
								<p className='filter-option-text'>- Age range -</p>
								<label htmlFor='age' className='age'>
									Set custom age range
								</label>
								<input
									type='checkbox'
									name='ageEnabled'
									value='ageEnabled'
									id='ageEnabled'
									checked={filterOptions.ageEnabled}
									onChange={(e) => setFilterOptions({ ...filterOptions, ageEnabled: e.target.checked })}
								/>
								<ReactSlider
									className='horizontal-slider'
									thumbClassName='example-thumb'
									trackClassName='example-track'
									defaultValue={filterOptions.age}
									min={1}
									max={30}
									ariaLabel={['Lower thumb', 'Upper thumb']}
									ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
									renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
									pearling
									minDistance={1}
									onAfterChange={(newValue) => setFilterOptions({ ...filterOptions, age: newValue })}
									disabled={!filterOptions.ageEnabled}
								/>

								<br />

								<div className='discover-age-format-selector'>
									<div className='discover-radio-inputs'>
										<label className='discover-radio'>
											<input
												type='radio'
												name='ageFormat'
												value='days'
												onChange={(e) => setFilterOptions({ ...filterOptions, ageFormat: e.target.value })}
												disabled={!filterOptions.ageEnabled}
											/>
											<span className='discover-name'>Days</span>
										</label>

										<label className='discover-radio'>
											<input
												type='radio'
												name='ageFormat'
												value='months'
												onChange={(e) => setFilterOptions({ ...filterOptions, ageFormat: e.target.value })}
												disabled={!filterOptions.ageEnabled}
											/>
											<span className='discover-name'>Months</span>
										</label>

										<label className='discover-radio'>
											<input
												type='radio'
												name='ageFormat'
												value='years'
												onChange={(e) => setFilterOptions({ ...filterOptions, ageFormat: e.target.value })}
												disabled={!filterOptions.ageEnabled}
											/>
											<span className='discover-name'>Years</span>
										</label>
									</div>
								</div>
							</div>
						</motion.div>
					) : (
						<button className='filter-toggle' onClick={() => setShowFilters(true)}>
							Filters
						</button>
					)}

					<motion.div
						className='posts-container'
						layout
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{
							duration: 0.5,
							delay: 0.1,
							ease: [0, 0.71, 0.2, 1.01],
						}}>
						{posts.map((post) => (
							<>
								<PostItem key={post.id} post={post} />
							</>
						))}
					</motion.div>
				</div>
			</AnimatePresence>
		</main>
	);
}
