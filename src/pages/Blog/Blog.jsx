import React, { useState, useEffect } from 'react';
import './Blog.css';
import 'boxicons';

export default function Blog() {
    const [displayText, setDisplayText] = useState('');
    const [hiiText, setHiiText] = useState('');

    const dogtext = () => (
        <p>Here, you'll find out how to <br/>prepare for your new dog. Find<br/> out how to provide the right diet,<br/> exercise, companionship, and<br/> veterinary care for your dog.</p>
    );

    const cattext = () => (
        <p>Here, you'll find out how to <br/>prepare for your new cat. Find<br/> out how to provide the right diet,<br/> exercise, companionship, and<br/> veterinary care for your cat.</p>
    );

    const hitext =() => (
        <p>Hiiiiii</p>
    );

    const handleFormClick = () => {
        setDisplayText(hitext);
        setHiiText('Hii');
    };

    const [isMouseOver, setIsMouseOver] = useState(false);

    // Set default text on component mount
    useEffect(() => {
        setDisplayText(dogtext());
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
                            onClick={() => handleFormClick()}
                            onMouseOver={() => setIsMouseOver(true)}
                            onMouseOut={() => setIsMouseOver(false)}
                        >
                            {/* Content for the second form container */}
                            <div className="dog-icon-container">
                                <box-icon type='solid' name='cat' style={{ width: '60px', height: '60px' }}></box-icon>
                            </div>
                            <h3>Cat Welfare</h3>
                            <br/><br/><br/><br/><br/><br/><br/>
                            <p>{displayText}</p>
                        </button>
                        <div>
                <p>{hiiText}</p>
            </div>
                    </div>
                </div>
            </div>
            {/* Display "Hii" text outside the form-container buttons */}
            
        </main>
    );
}
