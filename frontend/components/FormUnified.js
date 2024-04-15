"use client";

import React, { useState } from 'react';
import '/styles/styles.css';
import Postbutton from './Postbutton';

import { render } from '@testing-library/react';
import CommonStart from './FormSteps/Common0Start';
import CommonLength from './FormSteps/Common1Length';
import ShortPackages from './FormSteps/Short1.1Packages';
import LongProperty from './FormSteps/Long1.1Property';
import LongRooms from './FormSteps/Long1.2Rooms';
import LongLivingDetails from './FormSteps/Long1.3LivingDetails';
import CommonPersonalInfo from './FormSteps/Common2PersonalInfo';
import CommonSubmit from './FormSteps/Common3Submit';
import CommonThanks from './FormSteps/Common4Thanks';


export default function FormUnified() {
    const [step, setStep] = useState('common-start');
    //CommonLength has 2 states, CommonLengthData.length and CommonLengthData.message
    const [CommonLengthData, setCommonLengthData] = useState({});

    const [ShortPackagesData, setShortPackagesData] = useState({});
    const [LongPropertyData, setLongPropertyData] = useState({});
    const [LongRoomsData, setLongRoomsData] = useState({});
    const [LongLivingDetailsData, setLongLivingDetailsData] = useState({});

    const [CommonPersonalInfoData, setCommonPersonalInfoData] = useState({});

    //FUNCTION TO CHANGE FORM STEP
    const changeStep = (step) => {
        console.log(step, "FORM STEP")
        setStep(step);
    };
    //FormUnified should hold an unique state for each of the steps
    //At the end of the form, all the states should be combined into one JSON object
    return (
        <div data-testid="cost-calculator-form" className='container multi-step-form'>
            {step === 'common-start' && <CommonStart changeStep={changeStep} />}
            {step === 'common-length' && <CommonLength changeStep={changeStep} setCommonLengthData={setCommonLengthData} CommonLengthData={CommonLengthData} />}
            {/*if length of rental 10> then show long form */}
            {step === 'short-packages' && <ShortPackages changeStep={changeStep} setShortPackagesData={setShortPackagesData} ShortPackagesData={ShortPackagesData} />}
            {step === 'long-property' && <LongProperty changeStep={changeStep} LongPropertyData={LongPropertyData} setLongPropertyData={setLongPropertyData} />}
            {step === 'long-rooms' && <LongRooms changeStep={changeStep} />}
            {step === 'long-living-details' && <LongLivingDetails changeStep={changeStep} />}
            {/*continue common form*/}
            {step === 'common-personal-info' && <CommonPersonalInfo changeStep={changeStep} CommonLengthData={CommonLengthData} CommonPersonalInfoData={CommonPersonalInfoData} setCommonPersonalInfoData={setCommonPersonalInfoData} />}
            {step === 'common-submit' && <CommonSubmit changeStep={changeStep} CommonLengthData={CommonLengthData} />}
            {step === 'common-thanks' && <CommonThanks />}
        </div>
    );
};
