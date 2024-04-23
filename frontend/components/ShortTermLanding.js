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
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nemo similique, rerum culpa molestiae necessitatibus non magni itaque veniam nam adipisci vel animi sit aliquid eaque assumenda maiores asperiores nobis numquam! Ex non, doloribus ipsa et culpa tenetur ad, impedit quo soluta totam eligendi porro quae? Adipisci labore modi quidem voluptatem non hic voluptas quas rerum voluptates ipsam cumque impedit, incidunt repellat ea consectetur nihil corporis ratione ullam enim quo eaque. Soluta ipsa officia molestias. Nobis, esse aut! Ea aut dolore explicabo consequuntur est dolor quaerat suscipit qui ad quia maiores eos vel, aliquid facilis laborum? Minima iste neque odio.</p>
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