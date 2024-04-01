import React from 'react';
import '/styles/styles.css';
import Link from 'next/link';
import PictureBanner from './PictureBanner';
import ContactForm from './ContactForm';
import RentingVsBuying from "./RentingVsBuying";
import CustomerReviews from "./CustomerReviews";

export default function LongTermLanding() {
    return (
        <><PictureBanner />
        <div className='section col'>
            <h1>Long-term Rental</h1>
            <p> For longer periods, you can freely choose from a large selection of furniture and household items in our online catalogue. (link TBA) Create your dream home with the help of our interior designers!</p>
        </div>
        <div className='section col'>
            <h2>Contact us</h2>
            <ContactForm />
        </div>
        <div className='section col'>
            <RentingVsBuying />
            <CustomerReviews />
        </div></>
    );
}