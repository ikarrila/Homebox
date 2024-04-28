"use client";

import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const PictureBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        '../../pictures/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg',
        '../../pictures/di_an_h-g_8MrEZAvyE-unsplash.jpg',
        '../../pictures/francesca-tosolini-DmOhItSo49k-unsplash.jpg'
    ];

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const backgroundImageStyle = {
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: window.innerHeight * 0.5,
    };

    const buttonStyle = {
        position: 'absolute',
        top: window.innerHeight * 0.38,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '40px',
        border: 'none',
        cursor: 'pointer',
        zIndex: 1,
    };



    return (
        <div>
            <button style={{ ...buttonStyle, left: '10px' }} onClick={prevImage}>
                <IoIosArrowBack />
            </button>
            <div className="container" style={backgroundImageStyle}>
                { }
            </div>
            <button style={{ ...buttonStyle, right: '10px' }} onClick={prevImage}>
                <IoIosArrowForward />
            </button>
        </div>
    );
};

export default PictureBanner;
