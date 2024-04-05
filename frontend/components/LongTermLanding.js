"use client";

import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
import '/styles/styles.css';
import '/styles/popup.css';
import { IoMdClose } from "react-icons/io";
import PictureBanner from './PictureBanner';
import ContactForm from './ContactForm';
import RentingVsBuying from "./RentingVsBuying";
import CustomerReviews from "./CustomerReviews";

/* Pitää viel lisätä sessiotallentaja et lomakkeen vastaukset pysyy.
 */
function Popup({ onClose }) {
  
    const popupRef = useRef(null);

    useEffect(() => {
    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
        }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
    }, [onClose]);

    return (
    <div className="popup" ref={popupRef}>
        <button className="close-button" onClick={onClose}>
        <IoMdClose />
        </button>
        <div className="popup-content">
        <ContactForm />
        </div>
    </div>
    );
}
  
export default function LongTermLanding() {
    const [popupOpen, setPopupOpen] = useState(false);
    const bodyClass = popupOpen ? 'overlay-dark' : '';
    return (
        <><PictureBanner />
        <div className='section col'>
            <h1 className= "absolute" 
                    style={{transform: 'translateY(-400%)',  
                    backgroundColor: 'rgb(0,31,63)',
                    color: 'rgb(255,255,255)',  
                    padding: '10px 20px',
                    borderRadius: '10px',
                    opacity: '0.86'}}>
                Long-term Rental
            </h1>
            <div className='section col'>
                <p> For longer periods, you can freely choose from a large selection of furniture and household items in our online catalogue. (link TBA) Create your dream home with the help of our interior designers!</p>
                <div className='section row'>
                    <button className="btn-primary" onClick={() => setPopupOpen(true)}>Contact us</button>
                    {popupOpen && <Popup onClose={() => setPopupOpen(false)} />}
                </div>
            </div>
        </div>

        <RentingVsBuying />
        <CustomerReviews />
    </>
    );
}