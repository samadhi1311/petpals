import React, { useState, useEffect } from 'react';
import './Blog.css';
import 'boxicons';
import DogShelter from '../../global/assets/Dog paw-rafiki.svg';
import DogFood from '../../global/assets/Cat and dog-amico.svg';

export default function Blog() {
    const [displayText, setDisplayText] = useState('');
    const [displayText2, setDisplayText2] = useState('');
    const [hiiText, setHiiText] = useState('No');
    const [dogBlogBody, setDogBlogBody] = useState('');
    const [catBlogBody, setCatBlogBody] = useState('');
    const [changeText, setChangeText] = useState('dog');

    const dogtext = () => (
        <p>Here, you'll find out how to <br/>prepare for your new dog. Find<br/> out how to provide the right diet,<br/> exercise, companionship, and<br/> veterinary care for your dog.</p>
    );

    const cattext = () => (
        <p>Here, you'll find out how to <br/>prepare for your new cat. Find<br/> out how to provide the right diet,<br/> exercise, companionship, and<br/> veterinary care for your cat.</p>
    );

    const blogContent = () => (
        <p>dededededed</p>
    );

    const dogTextContent = () => (
        <div className="content-card-2">
            <h2>How to prepare for your new dog:</h2>
            <h3>5 things you must do</h3>
            <p>Adopting a dog is exciting, but it can often mean a big life change for you and<br/> them. To make things easier and give your new dog the best chance of settling in, it's really important to prepare for their arrival.</p><br/>
            <p>As well as having a moral duty to look after your new dog properly, you have a legal responsibility. Under the<br/> Animal Welfare Act, you must give your dog:</p>
            <ul style={{ textAlign: 'left' }}>
                <li>A suitable place to live</li>
                <li>A healthy diet and access to clean water</li>
                <li>The ability to behave normally</li>
                <li>Appropriate company</li>
                <li>Protection from pain, injury, suffering, and disease</li>
            </ul><br/>
            <p>So, to help you get ready for the big day and understand your legal responsibilities as a dog owner, we have<br/> created this to do list.</p>
            <div className="dog-shelter-div">
                <div className="dog-shelter-text">
                    <h2>1. Invest in a good bed</h2><br/>
                    <p style={{ textAlign: 'left' }}>Your dog needs a comfortable, clean place to sleep and relax. Some dogs like to curl up and others like to stretch out. Ask the person you are adopting from how the dog sleeps, or buy a bed that accommodates both sleeping styles.</p><br/>
                    <p style={{ textAlign: 'left' }}>Choose a bed that is comfortable, the right size, easy to clean and made from dog-friendly materials. It should be big enough for them to do their turning ritual.</p><br/>
                    <p style={{ textAlign: 'left' }}>Put the bed in a clean, dry and draught-free spot. Over time, you will learn whether your dog likes to be at the centre of everything or if they prefer somewhere quieter.</p><br/>
                    <p style={{ textAlign: 'left' }}>If your dog is used to being crated, these same rules apply. <b>Do not</b> crate your dog if they are not used it. Speak to your vet or behavioural specialist first.</p>
                </div>
                <div className="dog-shelter-img">
                    <div className='content-image'>
                        <img src={DogShelter} style={{ width: "100%" }} alt="Adoption Image" />
                    </div>
                </div>
            </div>
            <div className="dog-shelter-div">
                <div className="dog-shelter-img">
                    <div className='content-image'>
                        <img src={DogFood} style={{ width: "100%" }} alt="Adoption Image" />
                    </div>
                </div>
                <div className="dog-shelter-text">
                    <h2>2. Stock up on the right food</h2><br/>
                    <p style={{ textAlign: 'left' }}>Dogs must have healthy, balanced diets and access to fresh water at all times.</p><br/>
                    <p style={{ textAlign: 'left' }}>The person you are adopting from will tell you what they are feeding the dog. But still, ask your vet or a nutritionist for advice as their current diet might not be appropriate.</p><br/>
                    <p style={{ textAlign: 'left' }}>Even if you do end up switching your dog food, you will have to do this gradually. So stock up on whatever food they are used to until you have spoken to your vet.</p><br/>
                </div>
            </div>
        </div>
    );
    

    const catTextContent = () => (
        <div className="content-card-2">
            <h2>How to prepare for your new cat:</h2>
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
        <main>
            <div className="blog-container">
                <div className="content-text">
                    <h1 className='content-heading'>
                        Pet Welfare<br/> Guides
                    </h1>
                    <div className="form-row">
                        {/* First form container */}
                        <button
                            className={`form-container ${isMouseOver ? 'mouse-over' : ''}`}
                            onClick={handleFormClick}
                            onMouseOver={() => setIsMouseOver(true)}
                            onMouseOut={() => setIsMouseOver(false)}
                        >
                            <h3>Dog Welfare</h3>
                            <br/><br/><br/><br/><br/><br/><br/><br/>
                            {/* Content for the first form container */}
                            <div className="dog-icon-container">
                                <box-icon type="solid" name="dog" style={{ width: '60px', height: '60px' }}></box-icon>
                            </div>
                            <p>{displayText}</p>
                        </button>
                        {/* Second form container */}
                        <button
                            className={`form-container ${isMouseOver ? 'mouse-over' : ''}`}
                            onClick={() => handleFormClick2()}
                            onMouseOver={() => setIsMouseOver(true)}
                            onMouseOut={() => setIsMouseOver(false)}
                        >
                            {/* Content for the second form container */}
                            <div className="dog-icon-container">
                                <box-icon type='solid' name='cat' style={{ width: '60px', height: '60px' }}></box-icon>
                            </div>
                            <h3>Cat Welfare</h3>
                            <br/><br/><br/><br/><br/><br/><br/>
                            <p>{displayText2}</p>
                        </button>
                    </div>
                </div>
            </div>

            {/* Display "Hii" text outside the form-container buttons */}
            {dogBlogBody === '' ? null :
                <div className="content-card">
                    <p>{changeText}</p>
                </div>
            }
            
            
        </main>
    );
}
