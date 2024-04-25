"use client";

import React, { useState, useEffect } from 'react';
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
import calculatePrice from './calculatePrice';


export default function FormUnified() {
    const [step, setStep] = useState('common-start');
    //CommonLength has 3 fields, length and message and budget
    const [CommonLengthData, setCommonLengthData] = useState({});
    //ShortPackages has 2 fields, premium OR standard
    const [ShortPackagesData, setShortPackagesData] = useState({});
    //LongPropertyData has 10 fields, bedSize, bed2Size, bed3Size, bed4Size, bed5Size, bed6Size, livingRoomSize, diningRoomSize, kitchenSize, homeOfficeSize, outdoorSize
    const [LongPropertyData, setLongPropertyData] = useState({});
    //LongRooms is just one string
    const [LongRoomsData, setLongRoomsData] = useState("");
    //LongLivingDetails has 2 fields, homeLink and livingDetails
    const [LongLivingDetailsData, setLongLivingDetailsData] = useState({});
    //CommonPersonalInfo has 4 fields, name, email, phone, message
    const [CommonPersonalInfoData, setCommonPersonalInfoData] = useState({});
    //Total estimated Price to display on the submit page
    const [priceOfTheBill, setPriceOfTheBill] = useState(0);

    //FUNCTION TO CALCULATE PRICE
    useEffect(() => {
        //Long price calculation
        if (CommonLengthData && CommonLengthData.length > 10) {
            calculatePrice({ isShort: false, LongPropertyData, LongRoomsData, LongLivingDetailsData, setPriceOfTheBill })

        }
        //Short price calculation
        if (CommonLengthData && CommonLengthData.length < 10) {
            calculatePrice({ isShort: true, ShortPackagesData, setPriceOfTheBill })
        }
    }, [CommonLengthData, ShortPackagesData, LongPropertyData, LongRoomsData, LongLivingDetailsData]);


    //FUNCTION TO CHANGE FORM STEP
    const changeStep = (step) => {
        setStep(step);
    };
    //send data to backend for email forwarding
    const send = async (data) => {
        const response = await fetch('http://localhost:4000/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    };
    console.log(ShortPackagesData)
    const submitForm = async () => {
        //base data, modify with long/short data
        const basicInfo =
        {   //From first common step
            rentalLength: CommonLengthData.length,
            textField: CommonLengthData.message,

            //From personal common step 
            name: CommonPersonalInfoData.name,
            email: CommonPersonalInfoData.email,
            phone: CommonPersonalInfoData.phone,
            message: CommonPersonalInfoData.message,

            roomChoices: {}
        }
        if (CommonLengthData.length > 10) {
            //long form data added
            const data = {
                ...basicInfo,
                source: "long-term rental",
                budget: CommonLengthData.budget,
                furnishingLevel: ShortPackagesData.premium || ShortPackagesData.standard,
                roomChoices: {
                    bedSize: LongPropertyData.bedSize,
                    bed2Size: LongPropertyData.bed2Size,
                    bed3Size: LongPropertyData.bed3Size,
                    bed4Size: LongPropertyData.bed4Size,
                    bed5Size: LongPropertyData.bed5Size,
                    bed6Size: LongPropertyData.bed6Size,
                    livingRoomSize: LongPropertyData.livingRoomSize,
                    diningRoomSize: LongPropertyData.diningRoomSize,
                    kitchenSize: LongPropertyData.kitchenSize,
                    homeOfficeSize: LongPropertyData.homeOfficeSize,
                    outdoorSize: LongPropertyData.outdoorSize,
                },
                furnishingLevel: LongRoomsData,
                homeLink: LongLivingDetailsData.homeLink,
                livingDetails: LongLivingDetailsData.livingDetails
            }
            try {
                await send(data)
            } catch (error) {
                console.error('Error:', error);
            }
        } if (CommonLengthData.length < 10) {
            //short form data added
            const data = {
                ...basicInfo,
                source: "short-term rental",
                furnishingLevel: ShortPackagesData.premium || ShortPackagesData.standard,
            }
            console.log(data)
            try {
                await send(data)
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }



    //FormUnified should hold an unique state for each of the steps
    //At the end of the form, all the states should be combined into one JSON object
    return (
        <div data-testid="cost-calculator-form" className='container multi-step-form'>
            {step === 'common-start' && <CommonStart changeStep={changeStep} />}
            {step === 'common-length' && <CommonLength changeStep={changeStep} setCommonLengthData={setCommonLengthData} CommonLengthData={CommonLengthData} priceOfTheBill={priceOfTheBill} />}
            {/*if length of rental 10> then show long form */}
            {step === 'short-packages' && <ShortPackages changeStep={changeStep} setShortPackagesData={setShortPackagesData} ShortPackagesData={ShortPackagesData} priceOfTheBill={priceOfTheBill} setPriceOfTheBill={setPriceOfTheBill} />}
            {step === 'long-property' && <LongProperty changeStep={changeStep} LongPropertyData={LongPropertyData} setLongPropertyData={setLongPropertyData} priceOfTheBill={priceOfTheBill} />}
            {step === 'long-rooms' && <LongRooms changeStep={changeStep} LongRoomsData={LongRoomsData} setLongRoomsData={setLongRoomsData} priceOfTheBill={priceOfTheBill} />}
            {step === 'long-living-details' && <LongLivingDetails changeStep={changeStep} LongLivingDetailsData={LongLivingDetailsData} setLongLivingDetailsData={setLongLivingDetailsData} priceOfTheBill={priceOfTheBill} />}
            {/*continue common form*/}
            {step === 'common-personal-info' && <CommonPersonalInfo changeStep={changeStep} CommonLengthData={CommonLengthData} CommonPersonalInfoData={CommonPersonalInfoData} setCommonPersonalInfoData={setCommonPersonalInfoData} priceOfTheBill={priceOfTheBill} />}
            {step === 'common-submit' && <CommonSubmit changeStep={changeStep} submitForm={submitForm} priceOfTheBill={priceOfTheBill}
                CommonLengthData={CommonLengthData}
                ShortPackagesData={ShortPackagesData}
                LongPropertyData={LongPropertyData}
                LongRoomsData={LongRoomsData}
                LongLivingDetailsData={LongLivingDetailsData}
                CommonPersonalInfoData={CommonPersonalInfoData}
            />}
            {step === 'common-thanks' && <CommonThanks />}
        </div>
    );
};
