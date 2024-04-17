import React from 'react';
import Link from 'next/link';
import '/styles/styles.css';
import RentVsBuying from './RentingVsBuying';
import CustomerReviews from './CustomerReviews';
import RentingWithUs from './RentingWithUs';
import ShortTermFaas from './ShortTermFaas';
import LongTermFaas from './LongTermFaas';
import Sustainability from './Sustainability';

export default function FAAS() {
    return (
        <div>
            <div className='section'>
                <h1>Rental services</h1>
                <div className="row">
                    <div className="col-md-6">
                        <ShortTermFaas />
                    </div>
                    <div className="col-md-6">
                        <LongTermFaas />
                    </div>
                </div>
            </div>
            <div className="section col">
                <RentingWithUs />
            </div>
            <div className="section" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="w-1/2">
                    <h2 style={{ textAlign: 'center' }}>Get An Evaluation</h2>
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
