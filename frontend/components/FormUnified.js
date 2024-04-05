"use client";

import React, { useState } from 'react';
import '/styles/styles.css';
import Postbutton from './Postbutton';

import { render } from '@testing-library/react';
import FormStepZero from './FormStepZero';
import FormStepOne from './FormStepOne';
import FormStepTwo from './FormStepTwo';
import FormStepThree from './FormStepThree';
import FormStepFour from './FormStepFour';
import FormStepFive from './FormStepFive';
import FormSentMessage from './FormSentMessage';


export default function FormUnified() {
    const [step, setStep] = useState(0);
    const [propertyType, setPropertyType] = useState('');
    const [roomInfoJSON, setRoomInfoJSON] = useState({})

    //FUNCTION TO HANDLE PROPERTY TYPE CHANGE FOR STEP 2
    const handlePropertyTypeChange = (event) => {
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

            <FormStepOne changeStep={changeStep} handlePropertyTypeChange={handlePropertyTypeChange} />
            <FormStepTwo changeStep={changeStep} propertyType={propertyType} />
            <FormStepThree changeStep={changeStep} />
            <FormStepFour changeStep={changeStep} />
            <FormStepFive changeStep={changeStep} />
            <FormSentMessage />
        </div>
    );
};