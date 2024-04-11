"use client";

import React, { useState } from 'react';
import '/styles/styles.css';
import Postbutton from './Postbutton';

import { render } from '@testing-library/react';
import FormStepZero from './FormSteps/FormStepZero';
import FormStepOne from './FormSteps/FormStepOne';
import FormStepTwo from './FormSteps/FormStepTwo';
import FormStepThree from './FormSteps/FormStepThree';
import FormStepFour from './FormSteps/FormStepFour';
import FormStepFive from './FormSteps/FormStepFive';
import FormSentMessage from './FormSteps/FormSentMessage';


export default function FormUnified() {
    const [step, setStep] = useState(0);
    const [propertyType, setPropertyType] = useState('');
    const [roomInfoJSON, setRoomInfoJSON] = useState({})

    //FUNCTION TO HANDLE PROPERTY TYPE CHANGE FOR STEP 2
    const handleChange = (event) => {
        setPropertyType(event.target.value);
        console.log(propertyType, "TYPE OF PROPERTY")
    };
    //FUNCTION TO CHANGE FORM STEP
    const changeStep = (step) => {
        console.log(step, "FORM STEP")
        setStep(step);
    };

    return (
        <div data-testid="cost-calculator-form" className='container multi-step-form'>
            {step === 0 && <FormStepZero changeStep={changeStep} />}
            {step === 1 && <FormStepOne changeStep={changeStep} handleChange={handleChange} />}
            {step === 2 && <FormStepTwo changeStep={changeStep} propertyType={propertyType} />}
            {step === 3 && <FormStepThree changeStep={changeStep} />}
            {step === 4 && <FormStepFour changeStep={changeStep} />}
            {step === 5 && <FormStepFive changeStep={changeStep} />}
            {step === 6 && <FormSentMessage />}
        </div>
    );
};
