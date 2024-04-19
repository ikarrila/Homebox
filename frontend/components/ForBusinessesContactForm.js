import React, { useState, useEffect } from "react";
import '/styles/styles.css';

export default function PersonalInfo() {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        agree: false
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
                <p>Name:</p>
                <input type="text" name="name" value={values.name} placeholder='Name' className='input' style={{ width: '100%' }} onChange={handleChange} />
                <p>Email:</p>
                <input type="text" name="email" value={values.email} placeholder='Email' className='input' style={{ width: '100%' }} onChange={handleChange} />
                <p>Phone:</p>
                <input type="text" name="phone" value={values.phone} placeholder='Phone' className='input' style={{ width: '100%' }} onChange={handleChange} />
                <p>Message:</p>
                <input type="text" name="message" value={values.message} placeholder='Message' className='input' style={{ width: '100%' }} onChange={handleChange} />
                <div className="flex items-center space-x-2">
                    <input type="checkbox" name="agree" checked={values.agree} style={{ marginRight: '1rem' }} onChange={handleChange} />
                    <p>I agree to...</p>
                </div>
            </div>
            <div className='container row align-middle'>
                <button className='btn-tertiary' style={{marginRight: '1%' }}>Back</button>
                <button className='btn-primary'>Continue</button>
            </div>
        </div>
    );
}