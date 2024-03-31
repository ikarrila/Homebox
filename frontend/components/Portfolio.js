"use client";

import React, { useState } from 'react';
import '/styles/styles.css';

const portfolioStyle = {
    marginLeft: '20px',
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
    marginBottom: '10px',
};

const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '25%',
    marginRight: '50px',
};

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
        <div data-testid="portfolio" className='white'>
            <header className="p-2 white mb-5">
                <h1 className="font-bold text-center">See the spaces we furnished</h1>
            </header>
            <div style={portfolioStyle}>
                <div className="flex justify-between white border-2 border-gray-400 mx-12">
                    <div>
                        <div><h3>Title:</h3><br /></div>
                        <div><p>Subtitle:</p></div>
                        <div><p>Project:</p></div>
                        <div><p>Delivery lead time:</p></div>
                        <div><p>House:</p></div>
                        <div><p>Project cost:</p></div>
                        <div><p>Customer review:</p></div>
                    </div>
                    <div style={imageContainerStyle}>
                        <div>
                            <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Room1" />
                            <p className="text-center">Room 1</p>
                        </div>
                    </div>
                    <div style={imageContainerStyle}>
                        <div>
                            <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Room2" />
                            <p className="text-center">Room 2</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={portfolioStyle}>
                <h2>Example 2</h2>
            </div>
            <div style={portfolioStyle}>
                <div className="flex justify-between white border-2 border-gray-400 mx-12">
                    <div>
                        <div><h3>Title:</h3><br /></div>
                        <div><p>Subtitle:</p></div>
                        <div><p>Project:</p></div>
                        <div><p>Delivery lead time:</p></div>
                        <div><p>House:</p></div>
                        <div><p>Project cost:</p></div>
                        <div><p>Customer review:</p></div>
                    </div>
                    <div style={imageContainerStyle}>
                        <div>
                            <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Room1" />
                            <p className="text-center">Room 1</p>
                        </div>
                    </div>
                    <div style={imageContainerStyle}>
                        <div>
                            <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Room2" />
                            <p className="text-center">Room 2</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={portfolioStyle}>
                <h2>Case study</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div onClick={() => handleImageClick('../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg')}>
                        <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Example" style={{ width: '30%', margin: '0 35%' }} />
                        <p style={{ textAlign: 'center' }}>Example text 1</p>
                    </div>
                    <div onClick={() => handleImageClick('../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg')}>
                        <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Example" style={{ width: '30%', margin: '0 35%' }} />
                        <p style={{ textAlign: 'center' }}>Example text 2</p>
                    </div>
                    <div onClick={() => handleImageClick('../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg')}>
                        <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Example" style={{ width: '30%', margin: '0 35%' }} />
                        <p style={{ textAlign: 'center' }}>Example text 3</p>
                    </div>
                </div>
                <p style={{ textAlign: 'center' }}> *Clicking on a picture opens up more information on the case</p>

            </div>
            {showPopup && (
                <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '80%', height: '80%' }}>
                    <button onClick={handleClosePopup} style={{ alignSelf: 'flex-end' }}>Close</button>
                    <div style={{ display: 'flex', maxHeight: '90%', width: '100%', overflow: 'auto', marginTop: '20px' }}>
                        <div style={{ flex: '1', marginRight: '20px' }}>
                            <h2>Some text</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                        <div style={{ flex: '2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={popupImage} alt="Popup" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                        </div>
                    </div>
                </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h2 style={{ textAlign: 'center' }}>Partners and customer logos</h2>
            </div>        </div >
    );
}