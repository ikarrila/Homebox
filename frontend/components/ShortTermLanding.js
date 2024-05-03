import React from 'react';
import '/styles/styles.css';
import Link from 'next/link';
import CustomerReviews from './CustomerReviews';
import RentingVsBuying from './RentingVsBuying';

export default function ShortTermLanding() {
    return (
        <div className='container col'>
            <h1>Short-term rental</h1>
            <div className='section col'>
                <p>Rental for a shorter time-periods of 1-10 months. Choose from ready-made packages suitable for your home</p>
                <Link href="/FAAS/evaluation">
                    <button className="btn-primary">
                        Rent
                    </button>
                </Link>
            </div>
            <CustomerReviews />
            <RentingVsBuying />
        </div>
    );
}; 