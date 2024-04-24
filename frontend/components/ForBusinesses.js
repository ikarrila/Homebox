"use client";
import React, { useState } from 'react';
import '/styles/styles.css';
import CustomerReviews from './CustomerReviews';
import PersonalInfo from './ForBusinessesContactForm';
import Link from 'next/link';


export default function ForBusinesses() {
    return (
        <div>
            <div className="section container col relative h-[90vh] overflow-hidden bg-center bg-cover w-full p-10" style={{ backgroundImage: `url(/pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg)` }}>
                <div className="top-0 bottom-0 left-0 right-0 flex justify-center text-white text-center">
                    <div className="mx-auto max-w-xl section white-transparent">
                        <h1 className="container col text-4xl font-bold mb-8">Leave the furnishing to us</h1>
                        <p>Transform your commercial or rental space effortlessly with our comprehensive turnkey furnishing solutions</p>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#f5f8fa' }} className="section bg-partner">
                <h2 className="section container row text-2xl font-bold text-center py-4 mb-8">Some of our happy customers</h2>
                <div className="container row flex justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <img src="/pictures/logo/placeholders/customer-logo-one.webp" alt="Logo 1" className="w-24 h-24" />
                    <img src="/pictures/logo/placeholders/customer-logo-two.webp" alt="Logo 2" className="w-24 h-24" />
                    <img src="/pictures/logo/placeholders/customer-logo-three.webp" alt="Logo 3" className="w-24 h-24" />
                    <img src="/pictures/logo/placeholders/customer-logo-four.webp" alt="Logo 4" className="w-24 h-24" />
                </div>
            </div>
            <div className="container section bg-partner">
                <div className="container col">
                    <h2 className="text-xl font-bold text-center py-4 mb-8">OUR PROCESS</h2>
                    <p className="text-xl text-center py-4">Easy, Efficient and Effective</p>
                </div>
                <div className="container row">
                    <div className="flex justify-center space-x-10 for-business-process">
                        <div className="for-bp-textbox">
                            <h3 className="section font-bold for-bp-textbox">Learn the space</h3>
                            <p className="text-center for-business-process-text">We begin by getting to know your unique style, space, and vision, whether it's for a cormmercial or residential setting. Our talented design team will then craft a proposal featuring at least 2 designs tailored specifically to your space.</p>
                        </div>
                        <div className="for-bp-textbox">
                            <h3 className="section font-bold for-bp-textbox">Design Time</h3>
                            <p className="text-center for-business-process-text">Next, we craft a customized proposal featuring two or more curated design collections of furniture and accessories for the entire area. We work closely with you or your client, continuously refining the design to ensure the final package is exactly what you envisioned.</p>
                        </div>
                        <div className="for-bp-textbox">
                            <h3 className="section font-bold for-bp-textbox">Turnkey delivery</h3>
                            <p className="text-center for-business-process-text">Expect your delivery in approximately three weeks. When delivery day arrives, our dedicated setup crew will meticulously place and arrange every piece according to your design in each designated room. We take care of all the cleanup, removing any packaging debris so you don’t have to. In just a few hours, you’ll be able to enjoy a fully furnished space tailored just for you.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#f5f8fa' }} className="container col section">
                <h2 className="text-2xl font-bold text-center py-4 mb-8">Who we work with</h2>
                <div className="justify-items-center text-center">
                    <p className="text-blue-500 cursor-pointer">We work with a variety of businesses to check the task of furnishing off their list. Whether you are managing short-term rental properties or offices, your focus should be on your business. We take away the stress of furnishing any space.</p>
                </div>
            </div>

            <div className="container col">
                <CustomerReviews />
            </div>
            <div style={{ backgroundColor: '#f5f8fa' }} className="container col section">
                <h2 className="text-2xl font-bold text-center py-4 mb-8">Our Blog</h2>
                <div className="justify-items-center text-center">
                    <Link href="/blog">
                        <p className="text-blue-500 cursor-pointer">For more information and insights, visit our blog.</p>
                    </Link>
                </div>
            </div>
            <div className="container col">
                <PersonalInfo />
            </div>
        </div>
    );
}