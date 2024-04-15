import React from 'react';
import '/styles/styles.css';
import CustomerReviews from './CustomerReviews';


export default function ForBusinesses() {
    return (
        <div>
            <div className="section relative h-[90vh] overflow-hidden bg-center bg-cover w-full p-10" style={{ backgroundImage: `url(/pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg)` }}>
                <div className="top-0 bottom-0 left-0 right-0 flex justify-center text-white text-center">
                    <div className="mx-auto max-w-xl section">
                        <h1 className="text-4xl font-bold">Leave the furnishing to us</h1>
                        <p>Transform your commercial or rental space effortlessly with our comprehensive turnkey furnishing solutions</p>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#f5f8fa' }} className="section bg-partner">
                <h2 className="text-2xl font-bold text-center py-4">Some of our happy customers</h2>
                <div className="justify-items-center">
                    <img src="/pictures/logo/placeholders/customer-logo-one.webp" alt="Logo 1" className="w-24 h-24" />
                    <img src="/pictures/logo/placeholders/customer-logo-two.webp" alt="Logo 2" className="w-24 h-24" />
                    <img src="/pictures/logo/placeholders/customer-logo-three.webp" alt="Logo 3" className="w-24 h-24" />
                    <img src="/pictures/logo/placeholders/customer-logo-four.webp" alt="Logo 4" className="w-24 h-24" />
                </div>
            </div>

            <div className="section">
                <CustomerReviews />
            </div>
            <div className="section">
                <h2 className="font-bold">Sustainability</h2>
            </div>
        </div>
    );
}