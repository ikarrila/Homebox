import React, { useState, useEffect } from "react";
import '/styles/styles.css';

export default function PersonalInfo() {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        agreeMarketing: false,
        agreePersonalData: false
    });

    const handleChange = (e) => {
        const updatedState = {
            ...values,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        };
        setValues(updatedState);
    };
    return (
        <div className="section">
            <h2 style={{ textAlign: 'center' }}>Contact us</h2>
            <div className='step startCol'>
                <p>Full name:</p>
                <div className='container row'>
                    <input type="text" name="firstName" value={values.firstName} placeholder='First name' className='input' style={{ width: '49%' }} onChange={handleChange} />
                    <div style={{ width: '2%' }}></div>
                    <input type="text" name="lastName" value={values.lastName} placeholder='Last name' className='input' style={{ width: '49%' }} onChange={handleChange} />
                </div>
                <p>Email:</p>
                <input type="text" name="email" value={values.email} placeholder='Email' className='input' style={{ width: '100%' }} onChange={handleChange} />
                <p>Phone number:</p>
                <input type="text" name="phone" value={values.phone} placeholder='Phone' className='input' style={{ width: '100%' }} onChange={handleChange} />
                <p>Message:</p>
                <input type="text" name="message" value={values.message} placeholder='Message' className='input' style={{ width: '100%' }} onChange={handleChange} />

                <div className="section">
                    <p>KEJA is committed to protecting and respecting your privacy, and we’ll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below to say how you would like us to contact you:</p>
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" name="agreeMarketing" checked={values.agreeMarketing} style={{ marginRight: '1rem' }} onChange={handleChange} />
                        <p>I agree to receive other communications from Ke.com.</p>
                    </div>
                </div>
                <div className="section">
                    <p>In order to provide you the content requested, we need to store and process your personal data. If you consent to us storing your personal data for this purpose, please tick the checkbox below.</p>
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" name="agreePersonalData" checked={values.agreePersonalData} style={{ marginRight: '1rem' }} onChange={handleChange} />
                        <p>I agree to allow Ke.com to store and process my personal data</p>
                    </div>
                </div>
            </div>
            <div className='container row align-middle'>
                <button className='btn-tertiary' style={{ marginRight: '1%' }}>Back</button>
                <button className='btn-primary'>Continue</button>
            </div>
        </div >
    );
}