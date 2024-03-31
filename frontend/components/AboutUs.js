import React from 'react';
import '/styles/styles.css';

export default function AboutUs() {
    return (
        <div className='container col'>
            <h1>Bringing a sense of instant comfort and familiarity to make you feel right at home. </h1>
            <div className='section col'>
                <h2 data-testid="heading">Our Story</h2>
                <p data-testid="text">

                    Karen Justice founded Northwest Realtors and Brokers in 2008 after her own homebuying experience. Even though she had her Realtor license, being on the \“other side,\” so to speak gave her better insight into her clients' experiences. She had a better understanding of the confusion, frustration, and stress that overwhelmed homebuyers and sellers experienced and decided it was time to create more positive experiences.

                    At Northwest Realtors and Brokers, we go beyond helping you buy or sell a house. We sit down with you to help you understand and complete each step of the process, from understanding pre-approvals through closing so you are confident, empowered, and excited, rather than overwhelmed and worried. Our team is here when you need us, whether to ask a quick question or quell your concerns.
                </p>
            </div>

        </div>
    );
}