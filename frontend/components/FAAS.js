import React from 'react';
import Link from 'next/link';
import RentVsBuying from './RentingVsBuying';
import CustomerReviews from './CustomerReviews';
import RentingWithUs from './RentingWithUs';
import ShortTermFaas from './ShortTermFaas';
import LongTermFaas from './LongTermFaas';
import Sustainability from './Sustainability';

export default function FAAS() {
    return (
        <div>
            <div className="banner faas-bg">
                <div className="banner-text white-transparent">
                    <h2>Furniture Rental that Suits You</h2>
                    <p>From <b>3 months</b> to <b>3 years</b> on a monthly subscription</p>
                    <p>Fully furnish a home in less than 48 hours for short term rentals.</p>
                    <p>Or get your home professionally designed for long term rentals.</p>
                </div>
            </div>
            <div className='section'>
                <h1>Rental services</h1>
                <div className="container row flex">
                    <div className="faas-spacer-2"> </div>
                    <div className="container col">
                        <ShortTermFaas />
                    </div>
                    <div className="faas-spacer-1"> </div>
                    <div className="container col">
                        <LongTermFaas />
                    </div>
                    <div className="faas-spacer-2"> </div>
                </div>
            </div>
            <div>
                <RentingWithUs />
            </div>
            <div className="section evaluation">
                <div>
                    <h2 className='center-text'>Get An Evaluation</h2>
                    <Link href="/FAAS/evaluation">
                        <div className="flex justify-start">
                            <button className="btn-primary">
                                Get An Evaluation
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="section col">
                <CustomerReviews />
            </div>
            <div className="section col">
                <RentVsBuying />
            </div>
            <div>
                <Sustainability />
            </div>

        </div>
    );
}
