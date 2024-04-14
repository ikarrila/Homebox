import React from 'react';
import Postbutton from './Postbutton';
//import '../styles/styles.css';

const roomStyle = {
    marginLeft: '20px',
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
    marginBottom: '10px',
};

const labelStyle = {
    marginBottom: '10px',
};

const stepStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
    margin: '10px 0',
    maxWidth: '95%',
    width: '100%',
};

export default function ContactForm() {
    return (
        <div>
            <div className="section"><p>

                If you have a query, would like to find out more about our services, or have a specific query that we can help you with, you can send us a message using the form and our team will get back to you as soon as possible by phone or email.
            </p></div>
            <div style={roomStyle}>
                <div style={stepStyle}>Tell us about your needs </div>
                <input type="text" placeholder="Write about your needs" data-testid="input"></input>

            </div>

            <div style={roomStyle}>
                <hr />
                <div style={{ display: 'flex' }}>
                </div>
                <div style={stepStyle}>Select your level of furnishing needs</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                    <select style={{ margin: '10px' }} defaultValue="" data-testid="select">
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

                <div style={stepStyle}>Submit your request to short term rental</div>

                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <div style={{ marginRight: '20px' }}>
                        <label htmlFor="name">Name:   </label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:   </label>
                        <input type="text" id="email" name="email" />
                    </div>
                </div>
                <Postbutton></Postbutton>
                <hr />
                <div className="contact-details mt-4 flex flex-col items-center text-center">
                    <h2 className="text-lg font-bold">Contact Details</h2>
                    <b className="font-semibold">Sales and General inquiries</b>
                    <a href="mailto:info@keja.com" className="text-blue-500">info@keja.com</a>
                    <b className="font-semibold">Customer service</b>
                    <a href="mailto:customer-support@keja.com" className="text-blue-500">customer-support@keja.com</a>
                </div>
            </div>
        </div>
    );
}