'use client';
import React from 'react';
import Kuva from "../../pictures/di_an_h-g_8MrEZAvyE-unsplash.jpg";
import Kuva2 from "../../pictures/kam-idris-_HqHX3LBN18-unsplash.jpg";
import Image from 'next/image';
import Link from 'next/link';

const pStyle = {
    fontSize: '20px',
    whiteSpace: 'normal',
    overflow: 'hidden'

};
const bStyle = {
    fontSize: '30px',
    whiteSpace: 'nowrap',
};

export default function How_it_works() {
    const sections = [
        {
            headline: '1. Submit a design request', bulletPoints: ['- Click the “Start A Project” button to submit a design request',
                '- We will ask a series of questions about your your project, such as the size of the home (studio apartment, 1-bedroom, 2-bedroom), where and when do you need it furnished and styles that you like',
                '- Submit your request at the end']
        },
        {
            headline: '2. Book a design call', bulletPoints: ['- We will discuss your plans for the property, the budget for furnishing all the rooms and our process',
                '- We will share design examples of a similar project',
                '- And we will use the moodboards you received to discuss your style preferences']
        },
        {
            headline: '3. Review your Initial Proposal ', bulletPoints: ['- Upon receiving all the project information and the €300 design deposit payment, we will start creating your custom design proposal',
                '- The initial proposal with two design packages will be ready in 2-3 business days', '- Each design package will include the exact products you will be getting if you purchase the package', 'We can make as many changes as needed to achieve the final design package that you are happy with']
        },
        {
            headline: '4. One off purchase ', bulletPoints: ['- Purchase the final design package', '- The package price includes all the product costs, delivery and setup',
                '- After you purchase, you will work with your delivery manager to schedule the delivery']
        },
        {
            headline: '5. White Glove Delivery', bulletPoints: ['- The delivery is typically 2-4 weeks after purchase is made.', '- On the delivery day, our team will set up each item in your package in each room.',
                '- We also clean up all the packaging debris.', '- The setup can take 3 to 6 hours depending on the size of the package']
        },
    ];

    return (
        <div className='container col'>
            <h1 data-testid="heading">End to End Furnishing Services</h1>
            <p className="text-center">From modern and sleek designs to cozy and comfortable pieces, we have everything you need to create the perfect atmosphere for your home or office. Let us help you bring your vision to life with our wide selection of high-quality furniture and expert design guidance. </p>
            <div className='section col'>
                <h2>The Process</h2>
                {sections.map((section, i) => (
                    <div key={i} className='container flex justify-between'>
                        <div className='w-3/4'>
                            <h2>{section.headline}</h2>
                            <ul style={{ listStyleType: 'disc' }}>
                                {section.bulletPoints.map((point, j) => (
                                    <li key={j}>{point}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='w-1/4' style={{ marginRight: '50px', marginBottom: '20px' }}>
                            <img style={{ objectFit: 'cover', maxWidth: '200px', maxHeight: '200px' }} src="../../pictures/di_an_h-g_8MrEZAvyE-unsplash.jpg" alt="Description" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}