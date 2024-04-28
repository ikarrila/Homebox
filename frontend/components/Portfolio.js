"use client";

import React, { useState } from 'react';
import '/styles/styles.css';

export default function Portfolio() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupImage, setPopupImage] = useState('');

    const handleImageClick = (imageSrc) => {
        setPopupImage(imageSrc);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };
    return (
        <div data-testid="portfolio" className='section'>
            <h1>See the spaces we furnished</h1>
            <div className='portfolioStyle'>
                <div className="flex portfolio-structure">
                    <div>
                        <div><h3>Title:</h3><br /></div>
                        <div><p>Subtitle:</p></div>
                        <div><p>Project:</p></div>
                        <div><p>Delivery lead time:</p></div>
                        <div><p>House:</p></div>
                        <div><p>Project cost:</p></div>
                        <div><p>Customer review:</p></div>
                    </div>
                    <div className='portfolioImgContainer'>
                        <div>
                            <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Room1" />
                            <p className="center-text">Room 1</p>
                        </div>
                    </div>
                    <div className='portfolioImgContainer'>
                        <div>
                            <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Room2" />
                            <p className="center-text">Room 2</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='portfolioStyle'>
                <h2>Example 2</h2>
            </div>
            <div className='portfolioStyle'>
                <div className="flex portfolio-structure">
                    <div>
                        <div><h3>Title:</h3><br /></div>
                        <div><p>Subtitle:</p></div>
                        <div><p>Project:</p></div>
                        <div><p>Delivery lead time:</p></div>
                        <div><p>House:</p></div>
                        <div><p>Project cost:</p></div>
                        <div><p>Customer review:</p></div>
                    </div>
                    <div className='portfolioImgContainer'>
                        <div>
                            <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Room1" />
                            <p className="center-text">Room 1</p>
                        </div>
                    </div>
                    <div className='portfolioImgContainer'>
                        <div>
                            <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Room2" />
                            <p className="center-text">Room 2</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='portfolioStyle'>
                <h2>Case study</h2>
            </div>
            <div className='row'>

                <div onClick={() => handleImageClick('../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg')} className='portfolioImgContainer'>
                    <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Example" className='caseStudyImg' />
                    <p className='center-text'>Example text 1</p>
                </div>
                <div onClick={() => handleImageClick('../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg')} className='portfolioImgContainer'>
                    <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Example" className='caseStudyImg' />
                    <p className='center-text'>Example text 2</p>
                </div>
                <div onClick={() => handleImageClick('../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg')} className='portfolioImgContainer'>
                    <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Example" className='caseStudyImg' />
                    <p className='center-text'>Example text 3</p>
                </div>

            </div>

            <p className='center-text'> *Clicking on a picture opens up more information on the case</p>
            {showPopup && (
                <div className='portfolioPopup'>
                    <button onClick={handleClosePopup} className='popupClose'>Close</button>
                    <div className='popupContainer'>
                        <div className='popupContent'>
                            <h2>Some text</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                        <div className='popupImgContainer'>
                            <img src={popupImage} alt="Popup" className='popupImage' />
                        </div>
                    </div>
                </div>
            )}
            <div className='section'>
                <h2 className='center-text'>Partners and customer logos</h2>
            </div>        </div >
    );
}