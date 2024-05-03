import React from 'react';
import Postbutton from './Postbutton';

export default function ContactForm() {
    return (
        <div>
            <div className="section row">
                <p data-testid="text">
                    If you have a query or would like to find out more about our services, you can contact us by phone or email and our team will get to you as soon as possible.
                </p>
            </div>
                <hr />
                <div className='contactDetails'>
                    <h2>Contact Details</h2>
                    <b>Sales and General inquiries</b>
                    <a href="mailto:info@keja.com" className="contactAddress">info@keja.com</a>
                    <b>Customer service</b>
                    <a href="mailto:customer-support@keja.com" className="contactAddress">customer-support@keja.com</a>
                </div>
            </div>
    );
}