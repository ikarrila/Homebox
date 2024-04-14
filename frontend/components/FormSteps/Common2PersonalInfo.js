
import React, { use } from 'react';
import { useState, useEffect } from "react"
export default function CommonPersonalInfo({ changeStep, CommonLengthData, CommonPersonalInfoData, setCommonPersonalInfoData }) {

    const [pressed, setPressed] = useState(false)
    const [buttonGlow, setButtonGlow] = useState(false)
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })
    useEffect(() => {
        setValues(CommonPersonalInfoData)
    }, [CommonPersonalInfoData])

    useEffect(() => {
        if (validate("name") && validate("email") && validate("phone") && validate("message")) {
            setButtonGlow(true)
        } else {
            setButtonGlow(false)
        }
    }, [values])
    const LongOrShortForm = () => {
        setCommonPersonalInfoData(values)
        if (CommonLengthData.length > 10) {
            changeStep('long-living-details')
        } else {
            changeStep('short-packages')
        }
    }


    const validate = (field) => {
        if (values[field] && values[field] !== "") {
            return true;
        }
        return false;
    }

    const determineContinue = () => {
        if (validate("name") && validate("email") && validate("phone") && validate("message")) {
            setCommonPersonalInfoData(values)
            changeStep('common-submit')
        }
        else { setPressed(true) }
    }
    const handleChange = (e) => {
        //Updates the state depending on name with the value in the value field
        const updatedState = {
            ...values,
            [e.target.name]: e.target.value
        };
        setValues(updatedState);
        console.log(values)

    }
    return (
        <div className="section">
            <div className='stepFour' >
                <div className="stepTitle">{CommonLengthData.length < 10 ? "Step 3" : "Step 5"}</div>

                <div className='step startCol'>

                    <p>Name:</p>
                    <input style={!validate("name") && pressed ? { backgroundColor: "#f5f5f5" } : {}} type="text" id="name" data-testid="name-input" name="name" value={values.name} placeholder='Name' className='input' onChange={handleChange} />
                    <p>Email:</p>
                    <input style={!validate("email") && pressed ? { backgroundColor: "#f5f5f5" } : {}} type="text" id="email" data-testid="email-input" name="email" value={values.email} placeholder='Email' className='input' onChange={handleChange} />
                    <p>Phone:</p>
                    <input style={!validate("phone") && pressed ? { backgroundColor: "#f5f5f5" } : {}} type="text" id="phone" name="phone" placeholder='Phone' value={values.phone} className='input' onChange={handleChange} />
                    <p>Message:</p>
                    <input style={!validate("message") && pressed ? { backgroundColor: "#f5f5f5" } : {}} type="text" id="message" name="message" placeholder='Message' value={values.message} className='input' onChange={handleChange} />
                </div>
                <div className='container row align-middle'>
                    <button onClick={() => LongOrShortForm()} className='btn-tertiary'>Back</button>
                    <button onClick={() => determineContinue()} className={buttonGlow ? 'btn-primary' : 'btn-tertiary'}>Continue</button>
                </div>
            </div>
        </div>

    )

}