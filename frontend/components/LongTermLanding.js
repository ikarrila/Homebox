import React from 'react';
import '/styles/styles.css';
import Link from 'next/link';
import PictureBanner from './PictureBanner';
import ContactForm from './ContactForm';
import CustomerReviews from './CustomerReviews';
import RentingVsBuying from './RentingVsBuying';


export default function LongTermLanding() {
    return (
        <><div className='section col'>
            <PictureBanner />
            <h1>Long-term Rental</h1>
            <p> For longer periods, you can freely choose from a large selection of furniture and household items in our online catalogue. (link TBA) Create your dream home with the help of our interior designers!</p>
        </div><div className='container col'>
                <h1>Long-term rental</h1>
                <div className='section col'>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nemo similique, rerum culpa molestiae necessitatibus non magni itaque veniam nam adipisci vel animi sit aliquid eaque assumenda maiores asperiores nobis numquam! Ex non, doloribus ipsa et culpa tenetur ad, impedit quo soluta totam eligendi porro quae? Adipisci labore modi quidem voluptatem non hic voluptas quas rerum voluptates ipsam cumque impedit, incidunt repellat ea consectetur nihil corporis ratione ullam enim quo eaque. Soluta ipsa officia molestias. Nobis, esse aut! Ea aut dolore explicabo consequuntur est dolor quaerat suscipit qui ad quia maiores eos vel, aliquid facilis laborum? Minima iste neque odio.</p>
                    <Link href="/contact">
                        <button className="btn-primary">
                            Talk to the team
                        </button>
                    </Link>
                </div>
                <CustomerReviews />
                <RentingVsBuying />
            </div></>
    );
}