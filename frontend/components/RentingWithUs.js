import React from 'react';
import Link from 'next/link';
import '/styles/styles.css';


export default function RentingWithUs() {
    return (
        <div className="section col center-text accent">
            <h2 className="section">Renting With Us</h2>
            <p className="container">

                KEJA works in the gap between decorators and suppliers. We make furnishing easy and efficient with a comprehensive furnishing solution. We work with carefully chosen partners who share our commitment to ease and excellence. Above all, whether you’re relocating to a new apartment or simply want to refresh your current decor, we can furnish it for you – quickly and beautifully.
            </p>
            <Link href="/how_it_works">
                <button className='btn-tertiary'>Learn More</button>
            </Link>
        </div>
    );
}
