
import React, { use } from 'react';
import { useState, useEffect } from "react"
import CostEvaluationDiv from '../CostEvaluationDiv';
export default function CommonPersonalInfo({ changeStep, CommonLengthData, CommonPersonalInfoData, setCommonPersonalInfoData, priceOfTheBill }) {

    const [pressed, setPressed] = useState(false);
    const [buttonGlow, setButtonGlow] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [phoneIsValid, setPhoneIsValid] = useState(false);
    const [isEmailBeingEdited, setIsEmailBeingEdited] = useState(true);
    const [allowContinue, setAllowContinue] = useState(false);
    const [emailColor, setEmailColor] = useState({});
    const [trackState, setTrackState] = useState(false);
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    useEffect(() => {
        setValues(CommonPersonalInfoData);
    }, [CommonPersonalInfoData]);


    useEffect(() => {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (validate("name") && validate("email") && validate("phone") && (values.email && values.email.match(validRegex))) {
            setAllowContinue(true);
            setButtonGlow(true);
            setEmailColor({});
        } else if (!validate("email") && !isEmailBeingEdited && pressed) {
            setAllowContinue(false);
            setButtonGlow(false);
            setEmailColor({ backgroundColor: "#f5f5f5" });
        } else if (isEmailBeingEdited) {
            setAllowContinue(false);
            setButtonGlow(false);
            setEmailColor({});
        } else if (validate("email") && !isEmailBeingEdited && pressed && !(values.email && values.email.match(validRegex))) {
            setAllowContinue(false);
            setEmailColor({ borderColor: "red" });
            setButtonGlow(false);
        }
        if (!values.email && pressed) {
            setAllowContinue(false);
            setButtonGlow(false);
            setEmailColor({ backgroundColor: "#f5f5f5" });
        }

        console.log(isEmailBeingEdited, validate("email"));
    }, [values, isEmailBeingEdited, trackState]);

    const LongOrShortForm = () => {
        setCommonPersonalInfoData(values);
        if (CommonLengthData.length > 10) {
            changeStep('long-living-details');
        } else {
            changeStep('short-packages');
        }
    };


    const validate = (field) => {
        if (values[field] && values[field] !== "") {
            return true;
        }
        return false;
    };
    const determineContinue = () => {

        if (allowContinue) {
            setCommonPersonalInfoData(values);
            changeStep('common-submit');
        } else {
            setIsEmailBeingEdited(false);
            setPressed(true);
        }
    };
    const handleChange = (e) => {
        //Updates the state depending on name with the value in the value field
        const updatedState = {
            ...values,
            [e.target.name]: e.target.value
        };
        setValues(updatedState);
        console.log(values.email);
        console.log(emailIsValid);
        setIsEmailBeingEdited(true);
        setTrackState(!trackState);
    };
    return (
        <div className="section">
            <div className='row section flex-row' >
                <div className='container'>
                    <div className="stepTitle">{CommonLengthData.length < 10 ? "Step 3" : "Step 5"}</div>
                    <div className='step startCol'>
                        <div className='step startCol'>
                            <p>Name:</p>
                            <input style={!validate("name") && pressed ? { backgroundColor: "#f5f5f5" } : {}} type="text" id="name" data-testid="name-input" name="name" value={values.name} placeholder='Name' className={`input ${pressed && !validate("name") ? 'alert' : ''}`} onChange={handleChange} />
                            {!validate("name") && pressed && <p>Please fill in your name</p>}
                            <p>Email:</p>
                            <input style={emailColor}
                                type="text" id="email" data-testid="email-input" name="email" value={values.email} placeholder='Email' className={`input ${pressed && !validate("email") ? 'alert' : ''}`} onChange={handleChange} />
                            {!validate("email") && pressed && <p>Please fill in your email</p>}
                            <p>Phone:</p>
                            <input style={!validate("phone") && pressed ? { backgroundColor: "#f5f5f5" } : {}} type="number" id="phone" data-testid="phone-input" name="phone" placeholder='Phone' value={values.phone} className={`input ${pressed && !validate("phone") ? 'alert' : ''}`} onChange={handleChange} />
                            {!validate("phone") && pressed && <p>Please fill in your phone</p>}
                            <p>Message:</p>
                            <input type="text" id="message" data-testid="message-input" name="message" placeholder='Message' value={values.message} className='input' onChange={handleChange} />
                        </div>
                    </div>
                    <div className='right col container'>
                        <CostEvaluationDiv cost={priceOfTheBill} />
                        <br></br>
                        <div className='container row align-middle'>
                            <button onClick={() => LongOrShortForm()} style={{ width: "160px" }} className='btn-tertiary'>Back</button>
                            <button onClick={() => determineContinue()} style={{ width: "160px" }} className={buttonGlow ? 'btn-primary' : 'btn-tertiary'}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );

}