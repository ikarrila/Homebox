import React from 'react';
import '/styles/styles.css';
import CustomerReviews from './CustomerReviews';
import Link from 'next/link';



export default function ForBusinesses() {
    return (
        <div>
            <div className="section container col relative h-[90vh] overflow-hidden bg-center bg-cover w-full p-10" style={{ backgroundImage: `url(/pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg)` }}>
                <div className="top-0 bottom-0 left-0 right-0 flex justify-center text-white text-center">
                    <div className="mx-auto max-w-xl section white-transparent">
                        <h1 className="container col text-4xl font-bold">Leave the furnishing to us</h1>
                        <p>Transform your commercial or rental space effortlessly with our comprehensive turnkey furnishing solutions</p>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#f5f8fa' }} className="section bg-partner">
                <h2 className="section container row text-2xl font-bold text-center py-4">Some of our happy customers</h2>
                <div className="container row flex justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <img src="/pictures/logo/placeholders/customer-logo-one.webp" alt="Logo 1" className="w-24 h-24" />
                    <img src="/pictures/logo/placeholders/customer-logo-two.webp" alt="Logo 2" className="w-24 h-24" />
                    <img src="/pictures/logo/placeholders/customer-logo-three.webp" alt="Logo 3" className="w-24 h-24" />
                    <img src="/pictures/logo/placeholders/customer-logo-four.webp" alt="Logo 4" className="w-24 h-24" />
                </div>
            </div>
            <div className="container section bg-partner">
                <div className="container col">
                    <h2 className="text-2xl font-bold text-center py-4">OUR PROCESS</h2>
                    <p className="text-2xl text-center py-4">Easy, Efficient and Effective</p>
                </div>
                <div className="flex justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="text-center">
                        <h3 className="section font-bold">Learn the space</h3>
                        <p>We begin by getting to know your unique style, space, and vision, whether it's for a cormmercial or residential setting. Our talented design team will then craft a proposal featuring at least 2 designs tailored specifically to your space.</p>
                    </div>
                    <div className="section text-center">
                        <h3 className="font-bold">Design Time</h3>
                        <p>Next, we craft a customized proposal featuring two or more curated design collections of furniture and accessories for the entire area. We work closely with you or your client, continuously refining the design to ensure the final package is exactly what you envisioned.</p>
                    </div>
                    <div className="section text-center">
                        <h3 className="font-bold">Turnkey delivery</h3>
                        <p>Expect your delivery in approximately three weeks. When delivery day arrives, our dedicated setup crew will meticulously place and arrange every piece according to your design in each designated room. We take care of all the cleanup, removing any packaging debris so you don’t have to. In just a few hours, you’ll be able to enjoy a fully furnished space tailored just for you.</p>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#f5f8fa' }} className="container col section">
                <h2 className="text-2xl font-bold text-center py-4">Who we work with</h2>
                <p className="text-center">We work with a variety of businesses to check the task of furnishing off their list. Whether you are managing short-term rental properties or offices, your focus should be on your business. We take away the stress of furnishing any space.</p>
                <div className="justify-items-center">

                </div>
            </div>

            <div className="section">
                <CustomerReviews />
            </div>
            <div className="section">
                <h2 className="font-bold">Sustainability</h2>
            </div>
            <div style={{ backgroundColor: '#f5f8fa' }} className="container col section">
                <h2 className="text-2xl font-bold text-center py-4">Our Blog</h2>
                <div className="justify-items-center text-center">
                    <Link href="/blog">
                        <p className="text-blue-500 cursor-pointer">For more information and insights, visit our blog.</p>
                    </Link>
                </div>
            </div>
            <div className="section">
                <h2 className='font-bold'>Contact us</h2>
            </div>
        </div>
    );
}