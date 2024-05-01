import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { transitions } from '../../global/Transitions';
import './Blog.css';
import 'boxicons';
import DogShelter from '../../global/assets/Dog paw-rafiki.svg';
import DogFood from '../../global/assets/Cat and dog-amico.svg';
import DogVet from '../../global/assets/Veterinary-amico.svg';
import DogPlay from '../../global/assets/A day at the park-amico.svg';
import DogPdf from '../../global/assets/dog-welfare-code-of-practice.pdf';
import CatPdf from '../../global/assets/cat-welfare-code-of-practice.pdf';
import CatShelter from '../../global/assets/cat family-pana.svg';
import CatOff from '../../global/assets/Pregnancy test-amico.svg';
import CatFood from '../../global/assets/Fish bowl-amico.svg';
import CatPlay from '../../global/assets/Playful cat-amico.svg';
import CatVet from '../../global/assets/cat family-rafiki.svg';
import CatHoliday from '../../global/assets/personal goals checklist-rafiki.svg';

export default function Blog() {
	const [displayText, setDisplayText] = useState('');
	const [displayText2, setDisplayText2] = useState('');
	const [hiiText, setHiiText] = useState('No');
	const [dogBlogBody, setDogBlogBody] = useState('');
	const [catBlogBody, setCatBlogBody] = useState('');
	const [changeText, setChangeText] = useState('dog');

	const dogtext = () => (
		<p>
			Here, you'll find out how to <br />
			prepare for your new dog. Find
			<br /> out how to provide the right diet,
			<br /> exercise, companionship, and
			<br /> veterinary care for your dog.
		</p>
	);

	const cattext = () => (
		<p>
			Here, you'll find out how to <br />
			prepare for your new cat. Find
			<br /> out how to provide the right diet,
			<br /> exercise, companionship, and
			<br /> veterinary care for your cat.
		</p>
	);

	const blogContent = () => <p>dededededed</p>;

	const dogTextContent = () => (
		<div className='content-card-2'>
			<h2>How to prepare for your new dog:</h2>
			<h3>5 things you must do</h3>
			<p>
				Adopting a dog is exciting, but it can often mean a big life change for you and
				<br /> them. To make things easier and give your new dog the best chance of settling in, it's really important to prepare for their arrival.
			</p>
			<br />
			<p>
				As well as having a moral duty to look after your new dog properly, you have a legal responsibility. Under the
				<br /> Animal Welfare Act, you must give your dog:
			</p>
			<ul style={{ textAlign: 'left' }}>
				<li>A suitable place to live</li>
				<li>A healthy diet and access to clean water</li>
				<li>The ability to behave normally</li>
				<li>Appropriate company</li>
				<li>Protection from pain, injury, suffering, and disease</li>
			</ul>
			<br />
			<p>
				So, to help you get ready for the big day and understand your legal responsibilities as a dog owner, we have
				<br /> created this to do list.
			</p>
			<div className='dog-shelter-div'>
				<div className='dog-shelter-text'>
					<h2>1. Invest in a good bed</h2>
					<br />
					<p style={{ textAlign: 'left' }}>
						Your dog needs a comfortable, clean place to sleep and relax. Some dogs like to curl up and others like to stretch out. Ask the person you are adopting from how the dog sleeps,
						or buy a bed that accommodates both sleeping styles.
					</p>
					<br />
					<p style={{ textAlign: 'left' }}>
						Choose a bed that is comfortable, the right size, easy to clean and made from dog-friendly materials. It should be big enough for them to do their turning ritual.
					</p>
					<br />
					<p style={{ textAlign: 'left' }}>
						Put the bed in a clean, dry and draught-free spot. Over time, you will learn whether your dog likes to be at the centre of everything or if they prefer somewhere quieter.
					</p>
					<br />
					<p style={{ textAlign: 'left' }}>
						If your dog is used to being crated, these same rules apply. <b>Do not</b> crate your dog if they are not used it. Speak to your vet or behavioural specialist first.
					</p>
				</div>
				<div className='dog-shelter-img'>
					<div className='content-image'>
						<img src={DogShelter} style={{ width: '100%' }} alt='Adoption Image' />
					</div>
				</div>
			</div>
			<div className='dog-shelter-div'>
				<div className='dog-shelter-img'>
					<div className='content-image'>
						<img src={DogFood} style={{ width: '100%' }} alt='Adoption Image' />
					</div>
				</div>
				<div className='dog-shelter-text'>
					<h2>2. Stock up on the right food</h2>
					<br />
					<p style={{ textAlign: 'left' }}>Dogs must have healthy, balanced diets and access to fresh water at all times.</p>
					<br />
					<p style={{ textAlign: 'left' }}>
						The person you are adopting from will tell you what they are feeding the dog. But still, ask your vet or a nutritionist for advice as their current diet might not be
						appropriate.
					</p>
					<br />
					<p style={{ textAlign: 'left' }}>
						Even if you do end up switching your dog food, you will have to do this gradually. So stock up on whatever food they are used to until you have spoken to your vet.
					</p>
					<br />
				</div>
			</div>
			<div className='dog-shelter-div'>
				<div className='dog-shelter-text'>
					<h2>3. Buy toys and games</h2>
					<br />
					<p style={{ textAlign: 'left' }}>Dogs must be allowed to behave like dogs and do things that come naturally to them, like walking, playing and chasing within reason!</p>
					<br />
					<p style={{ textAlign: 'left' }}>
						Getting some toys and games for when they arrive will help to keep them happy, active and mentally stimulated. It is also a great way for you to bond and get to know each
						other. They will still need their regular walks, though!
					</p>
				</div>
				<div className='dog-shelter-img'>
					<div className='content-image'>
						<img src={DogPlay} style={{ width: '100%' }} alt='Adoption Image' />
					</div>
				</div>
			</div>
			<div className='dog-shelter-div'>
				<div className='dog-shelter-img'>
					<div className='content-image'>
						<img src={DogVet} style={{ width: '100%' }} alt='Adoption Image' />
					</div>
				</div>
				<div className='dog-shelter-text'>
					<h2>4. Register with a vet</h2>
					<br />
					<p style={{ textAlign: 'left' }}>Registering with a vet is the first and most important step to protecting your dog from pain, injury, suffering and disease.</p>
					<br />
					<p style={{ textAlign: 'left' }}>Further information providing details of how to care for your dog may be found here:</p>
					<br />
					<p style={{ textAlign: 'left' }}>
						<a href={DogPdf} target='_blank'>
							<h3>Dog Welfare Code of Practice</h3>
						</a>
					</p>
					<br />
				</div>
			</div>
		</div>
	);

	const catTextContent = () => (
		<div className='content-card-2'>
			<h2>How to prepare for your new cat:</h2>
			<h3>5 things you must do</h3>
			<p>
				Adopting a cat is exciting, but it can often mean a big life change for you and
				<br /> them. To make things easier and give your new cat the best chance of settling in, it's really important to prepare for their arrival.
			</p>
			<br />
			<p>
				As well as having a moral duty to look after your new cat properly, you have a legal responsibility. Under the
				<br /> Animal Welfare Act, you must give your cat:
			</p>
			<ul style={{ textAlign: 'left' }}>
				<li>A suitable place to live</li>
				<li>A healthy diet and access to clean water</li>
				<li>The ability to behave normally</li>
				<li>Appropriate company</li>
				<li>Protection from pain, injury, suffering, and disease</li>
			</ul>
			<br />
			<p>
				So, to help you get ready for the big day and understand your legal responsibilities as a cat owner, we have
				<br /> created this to do list.
			</p>
			<div className='dog-shelter-div'>
				<div className='dog-shelter-text'>
					<h2>1. Create safe spaces</h2>
					<br />
					<p style={{ textAlign: 'left' }}>To feel safe and secure, cats need their own bed, hiding places and somewhere high up to view their surroundings.</p>
					<br />
					<p style={{ textAlign: 'left' }}>
						Buy a comfortable and warm cat bed like an igloo or hammock, and put it somewhere quiet. You might want to buy more than one bed and have them in different rooms.
					</p>
					<br />
					<p style={{ textAlign: 'left' }}>
						You can make beds and hiding places, too. Get an appropriate-sized cardboard box, turn it on its side and put a snuggly blanket inside. Again, place this in a quiet spot.
					</p>
					<br />
					<p style={{ textAlign: 'left' }}>Putting cosy blankets on top of wardrobes, shelves and windowsills is a great way of giving your cat somewhere high up to hide..</p>
				</div>
				<div className='dog-shelter-img'>
					<div className='content-image'>
						<img src={CatShelter} style={{ width: '100%' }} alt='Adoption Image' />
					</div>
				</div>
			</div>
			<div className='dog-shelter-div'>
				<div className='dog-shelter-img'>
					<div className='content-image'>
						<img src={CatOff} style={{ width: '100%' }} alt='Adoption Image' />
					</div>
				</div>
				<div className='dog-shelter-text'>
					<h2>2. Set up a litter tray or outside toilet</h2>
					<br />
					<p style={{ textAlign: 'left' }}>Cats like to go to the toilet where they feel safe, and in a place that allows them to bury their waste afterwards.</p>
					<br />
					<p style={{ textAlign: 'left' }}>If your cat already uses a litter tray or you do not have a garden, you will need to set up a litter tray before they arrive.</p>
					<br />
					<p style={{ textAlign: 'left' }}>
						If your cat prefers to toilet outside and you have got a garden, or you want to train them to toilet outside, pick an area that is close to the house yet private. Once they
						arrive, you can encourage them to toilet there.
					</p>
					<br />
				</div>
			</div>
			<div className='dog-shelter-div'>
				<div className='dog-shelter-text'>
					<h2>3. Stock up on the right food</h2>
					<br />
					<p style={{ textAlign: 'left' }}>
						Cats must have healthy, balanced diets and access to fresh water at all times. At first, it is best to continue with the food the cat has been used to. Ask the person you are
						adopting from what the cat eats, then buy plenty of it.
					</p>
					<br />
					<p style={{ textAlign: 'left' }}>Even if you want to change their diet, this should be done gradually and under the guidance of your vet.</p>
					<p style={{ textAlign: 'left' }}>
						Lots of cats like to eat a special type of grass called Cocksfoot because it helps them clear furballs. Have some in the house to stop them chewing other houseplants!
					</p>
					<br />
				</div>
				<div className='dog-shelter-img'>
					<div className='content-image'>
						<img src={CatFood} style={{ width: '100%' }} alt='Adoption Image' />
					</div>
				</div>
			</div>
			<div className='dog-shelter-div'>
				<div className='dog-shelter-img'>
					<div className='content-image'>
						<img src={CatPlay} style={{ width: '100%' }} alt='Adoption Image' />
					</div>
				</div>
				<div className='dog-shelter-text'>
					<h2>4. Get a scratch post</h2>
					<br />
					<p style={{ textAlign: 'left' }}>
						Scratching is a big part of being a cat. Encourage them to carry out this natural behaviour by investing in a proper scratch post. This will discourage them from stretching and
						scratching on your furniture, too.
					</p>
					<br />
					<p style={{ textAlign: 'left' }}>Put the post near their bed so they can stretch and scratch when they wake up something that most cats tend to do.</p>
					<br />
				</div>
			</div>
			<div className='dog-shelter-div'>
				<div className='dog-shelter-text'>
					<h2>5. Plan for holidays</h2>
					<br />
					<p style={{ textAlign: 'left' }}>
						Even though cats are relatively independent pets, they cannot be left alone for long periods of time. When you go away, you will need to find a cat-sitter or put them in a
						cattery. Research your options early so you do not end up in a difficult situation.
					</p>
				</div>
				<div className='dog-shelter-img'>
					<div className='content-image'>
						<img src={CatHoliday} style={{ width: '100%' }} alt='Adoption Image' />
					</div>
				</div>
			</div>
			<div className='dog-shelter-div'>
				<div className='dog-shelter-img'>
					<div className='content-image'>
						<img src={CatVet} style={{ width: '100%' }} alt='Adoption Image' />
					</div>
				</div>
				<div className='dog-shelter-text'>
					<h2>6. Register with a vet</h2>
					<br />
					<p style={{ textAlign: 'left' }}>
						As Cat Welfare Code of Practise explains, you should get as much information as possible about your cats health from their previous owner. Ask for: details of their old vet,
						vaccination records, information about any health conditions and medications, and whether or not they have been microchipped.
					</p>
					<br />
					<p style={{ textAlign: 'left' }}>More information about cat welfare may be found in the</p>
					<br />
					<p style={{ textAlign: 'left' }}>
						<a href={CatPdf} target='_blank'>
							<h3>Cat Welfare Code of Practice</h3>
						</a>
					</p>
					<br />
				</div>
			</div>
		</div>
	);

	const handleFormClick = () => {
		setHiiText('Hii');
		setDisplayText('');
		setDisplayText2('');
		setDogBlogBody(blogContent());
		setChangeText(dogTextContent());
	};

	const handleFormClick2 = () => {
		setHiiText('Hii');
		setDisplayText('');
		setDisplayText2('');
		setDogBlogBody(blogContent());
		setChangeText(catTextContent());
	};

	const [isMouseOver, setIsMouseOver] = useState(false);

	// Set default text on component mount
	useEffect(() => {
		setDisplayText(dogtext());
		setDisplayText2(cattext());
	}, []);

	return (
		<motion.main variants={transitions} initial='hidden' animate='visible' exit='exit'>
			<div className='blog-container'>
				<div className='content-text'>
					<h1 className='content-heading'>
						Pet Welfare
						<br /> Guides
					</h1>
					<div className='form-row'>
						{/* First form container */}
						<button
							className={`form-container ${isMouseOver ? 'mouse-over' : ''}`}
							onClick={handleFormClick}
							onMouseOver={() => setIsMouseOver(true)}
							onMouseOut={() => setIsMouseOver(false)}>
							<h3>Dog Welfare</h3>
							<br />
							<br />
							{/* Content for the first form container */}
							<div className='dog-icon-container'>
								<box-icon type='solid' name='dog' style={{ width: '60px', height: '60px' }}></box-icon>
							</div>
							<p>{displayText}</p>
						</button>
						{/* Second form container */}
						<button
							className={`form-container ${isMouseOver ? 'mouse-over' : ''}`}
							onClick={() => handleFormClick2()}
							onMouseOver={() => setIsMouseOver(true)}
							onMouseOut={() => setIsMouseOver(false)}>
							{/* Content for the second form container */}
							<div className='dog-icon-container'>
								<box-icon type='solid' name='cat' style={{ width: '60px', height: '60px' }}></box-icon>
							</div>
							<h3>Cat Welfare</h3>
							<br />
							<br />
							<p>{displayText2}</p>
						</button>
					</div>
				</div>
			</div>

			{dogBlogBody === '' ? null : (
				<div className='content-card-1'>
					<p>{changeText}</p>
				</div>
			)}
		</motion.main>
	);
}
