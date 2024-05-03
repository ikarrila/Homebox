import React from 'react';
import '/styles/styles.css';
import Link from 'next/link';
import CustomerReviews from './CustomerReviews';
import RentingVsBuying from './RentingVsBuying';

export default function ShortTermLanding() {
    return (
        <div className='container col'>

            <div className="banner short-term-bg">
                <div className="banner-text white-transparent">
                    <h2>Short-term Rental</h2>
                    <p>For short term rentals we have ready-to-move-in packages that we will customize to your house.</p>
                    <p>All is prepared to make sure it is comfortable and complete, including household items and comfy mattresses. If you wish specific items and designs, reach out to our team and have a look at our long term rental offers.</p>
                </div>
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