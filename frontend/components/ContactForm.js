import React from 'react';
import Postbutton from './Postbutton';

export default function ContactForm() {
    return (
        <div>
            <div className="section"><p>
                If you have a query, would like to find out more about our services, or have a specific query that we can help you with, you can send us a message using the form and our team will get back to you as soon as possible by phone or email.
            </p></div>
            <div className='section'>
                <div className='stepTitle'>Tell us about your needs</div>
                <input type="text" placeholder="Write about your needs" data-testid="input"></input>

            </div>

            <div className='section'>
                <div className='stepTitle'>Select your level of furnishing needs</div>
                <div className='furnishingSelector'>
                    <select defaultValue="" data-testid="select">
                        <option value="" disabled>Select...</option>
                        <option value="1">Standard</option>
                        <option value="2">Premium</option>
                    </select>
                    <div>
                        <h3><b>Standard:</b></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros in enim cursus, a finibus lorem pretium.</p>
                        <h3><b>Premium:</b></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros in enim cursus, a finibus lorem pretium.</p>
                    </div>
                </div>

                <div className='section'>Submit your request to short term rental</div>

                <div className='section row'>
                    <div className='left'>
                        <div>
                            <label htmlFor="name">Name:   </label>
                            <input type="text" id="name" name="name" className='input' placeholder='Name' />
                        </div>
                    </div>
                    <div className='right'>
                        <label htmlFor="email">Email:   </label>
                        <input type="text" id="email" name="email" placeholder="Email" className='input' />
                    </div>
                </div>
                <Postbutton></Postbutton>
                <hr />
                <div className='contactDetails'>
                    <h2>Contact Details</h2>
                    <b>Sales and General inquiries</b>
                    <a href="mailto:info@keja.com" className="contactAddress">info@keja.com</a>
                    <b>Customer service</b>
                    <a href="mailto:customer-support@keja.com" className="contactAddress">customer-support@keja.com</a>
                </div>
            </div>
        </div>
    );
}