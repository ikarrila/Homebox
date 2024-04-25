"use client";

import React, { useState, useEffect } from 'react';
import '/styles/styles.css';
import Postbutton from './Postbutton';
import img1 from "../../pictures/francesca-tosolini-DmOhItSo49k-unsplash.jpg";
import img2 from "../../pictures/kara-eads-L7EwHkq1B2s-unsplash.jpg";
import Image from 'next/image';

export default function Package({ setShortPackagesData, ShortPackagesData }) {
    const [showStandardPackage, setShowStandardPackage] = useState(1);
    const [showPremiumPackage, setShowPremiumPackage] = useState(1);
    const [buttonPressed, setButtonPressed] = useState(false);

    const handleChange = (e) => {
        //Updates the state depending on name with the value in the value field
        const updatedState = {
            [e.target.name]: e.target.value

        };
        setShortPackagesData(updatedState);
        setButtonPressed(false);
    }


    useEffect(() => {
        if (ShortPackagesData.standard) {
            setShowStandardPackage(1);
            setShowPremiumPackage(0.5);

        } else if (ShortPackagesData.premium) {
            setShowStandardPackage(0.5);
            setShowPremiumPackage(1);
        }
    }, [handleChange]);


    const PackageDetails = ({ packageType }) => {
        switch (packageType) {
            case 'Studio (standard)':
                return (
                    <>
                        <h4><b>Bedroom</b></h4>
                        <li>1x bed</li>
                        <li>1x bedside table</li>
                        <h4><b>Kitchen</b></h4>
                        <li>1x dining table</li>
                        <li>2x chairs</li>
                        <h4><b>Living room</b></h4>
                        <li>1x arm chair</li>
                        <li>1x side table</li>
                    </>
                );
            case '1 Bedroom (standard)':
                return (
                    <>
                        <h4><b>Bedroom</b></h4>
                        <li>1x bed</li>
                        <li>2x bedside table</li>
                        <h4><b>Kitchen</b></h4>
                        <li>1x dining table</li>
                        <li>2x chairs</li>
                        <h4><b>Living room</b></h4>
                        <li>1x two seater sofa</li>
                        <li>1x arm chair</li>
                        <li>1x coffee table</li>
                    </>
                );
            case '2 Bedrooms (standard)':
                return (
                    <>
                        <h4><b>Bedroom</b></h4>
                        <li>2x bed</li>
                        <li>3x bedside table</li>
                        <h4><b>Kitchen</b></h4>
                        <li>1x dining table</li>
                        <li>4x chairs</li>
                        <h4><b>Living room</b></h4>
                        <li>1x three seater sofa</li>
                        <li>1x arm chair</li>
                        <li>1x coffee table</li>
                        <li>1x side table</li>
                    </>
                );
            case '3 Bedrooms (standard)':
                return (
                    <>
                        <h4><b>Bedroom</b></h4>
                        <li>3x bed</li>
                        <li>5x bedside table</li>
                        <h4><b>Kitchen</b></h4>
                        <li>1x dining table</li>
                        <li>6x chairs</li>
                        <h4><b>Living room</b></h4>
                        <li>1x three seater sofa</li>
                        <li>1x two seater sofa</li>
                        <li>1x arm chair</li>
                        <li>1x coffee table</li>
                        <li>2x side table</li>
                    </>
                );
            default:
                return null;
        }
    };

    const PremiumPackageDetails = ({ packageType }) => {
        switch (packageType) {
            case 'Studio (premium)':
                return (
                    <>
                        <h4><b>Bedroom</b></h4>
                        <li>1x bed with headboard</li>
                        <li>1x bedside table</li>
                        <h4><b>Kitchen</b></h4>
                        <li>1x dining table</li>
                        <li>2x chairs</li>
                        <h4><b>Living room</b></h4>
                        <li>1x arm chair</li>
                        <li>1x side table</li>
                        <h4><b>Other</b></h4>
                        <li>curtains (depending on house design)</li>
                        <li>carpets (depending on house design)</li>
                        <li>home essentials kit (new beddings, new bathroom essentials, essential kitchen utensils)</li>
                    </>
                );
            case '1 Bedroom (premium)':
                return (
                    <>
                        <h4><b>Bedroom</b></h4>
                        <li>1x bed with headboard</li>
                        <li>2x bedside table</li>
                        <h4><b>Kitchen</b></h4>
                        <li>1x dining table</li>
                        <li>4x chairs</li>
                        <h4><b>Living room</b></h4>
                        <li>1x  two seater sofa</li>
                        <li>1x arm chair</li>
                        <li>1x coffee table</li>
                        <h4><b>Other</b></h4>
                        <li>curtains (depending on house design)</li>
                        <li>carpets (depending on house design)</li>
                        <li>home essentials kit (new beddings, new bathroom essentials, essential kitchen utensils)</li>
                    </>
                );
            case '2 Bedrooms (premium)':
                return (
                    <>
                        <h4><b>Bedroom</b></h4>
                        <li>2x bed with headboard</li>
                        <li>4x bedside table</li>
                        <h4><b>Kitchen</b></h4>
                        <li>1x dining table</li>
                        <li>4x chairs</li>
                        <h4><b>Living room</b></h4>
                        <li>1x  three seater sofa</li>
                        <li>1x arm chair</li>
                        <li>1x coffee table</li>
                        <li>2x side table</li>
                        <h4><b>Other</b></h4>
                        <li>curtains (depending on house design)</li>
                        <li>carpets (depending on house design)</li>
                        <li>home essentials kit (new beddings, new bathroom essentials, essential kitchen utensils)</li>
                    </>
                );
            case '3 Bedrooms (premium)':
                return (
                    <>
                        <h4><b>Bedroom</b></h4>
                        <li>3x bed with headboard</li>
                        <li>5x bedside table</li>
                        <h4><b>Kitchen</b></h4>
                        <li>1x dining table</li>
                        <li>6x chairs</li>
                        <h4><b>Living room</b></h4>
                        <li>1x  three seater sofa</li>
                        <li>1x  two seater sofa</li>
                        <li>1x arm chair</li>
                        <li>1x coffee table</li>
                        <li>2x side table</li>
                        <h4><b>Other</b></h4>
                        <li>curtains (depending on house design)</li>
                        <li>carpets (depending on house design)</li>
                        <li>home essentials kit (new beddings, new bathroom essentials, essential kitchen utensils)</li>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className='container '>
            <div className='stepTitle'>Step 2: Select the package</div>
            <div className='step startCol'>
                <h3>From 3 to 10 months</h3>
                <p>Fully furnish a home in less than 48 hours for short term rentals with our pre-made furniture packages</p> <br></br>
                <h3>Best curated furniture packages</h3>
                <p>For short term rentals we have ready-to-move-in packages that we will customize to your house.</p>
                <p>All is prepared to make sure it is comfortable and complete, including household items and comfy mattresses.</p>
                <p>If you wish specific items and designs, reach out to our team and have a look at our long term rental offers.</p>
            </div>
            <div className='step startRow '>
                <div id='standard' className='left ' >
                    < Image class='image-container' src={img1} alt="img1" style={{ transition: 'opacity 1s', opacity: showStandardPackage }} />
                    <h3>Standard</h3>
                    <select className='selector' onChange={handleChange} name="standard" value={ShortPackagesData.standard || ""}>
                        <option value="" disabled selected>Select package size</option>
                        <option value="Studio (standard)">Studio Package</option>
                        <option value="1 Bedroom (standard)">1 Bedroom package</option>
                        <option value="2 Bedrooms (standard)">2 Bedroom package</option>
                        <option value="3 Bedrooms (standard)">3 Bedroom package</option>
                    </select>

                    {ShortPackagesData.standard && (
                        <>
                            <hr />
                            <p>List of items for selected package:</p>
                            <PackageDetails packageType={ShortPackagesData.standard} />
                        </>
                    )}

                </div>
                <div id='premium' className='right'>
                    < Image class='image-container' src={img2} alt="img2" style={{ transition: 'opacity 1s', opacity: showPremiumPackage }} />
                    <h3>Premium</h3>

                    <select className='selector' onChange={handleChange} name="premium" value={ShortPackagesData.premium || ""}>
                        <option value="" disabled selected>Select package size</option>
                        <option value="Studio (premium)">Studio Package</option>
                        <option value="1 Bedroom (premium)">1 Bedroom package</option>
                        <option value="2 Bedrooms (premium)">2 Bedroom package</option>
                        <option value="3 Bedrooms (premium)">3 Bedroom package</option>
                    </select>
                    {ShortPackagesData.premium && (
                        <>
                            <hr />
                            <p>List of items for selected premium package:</p>
                            <PremiumPackageDetails packageType={ShortPackagesData.premium} />
                        </>
                    )}

                </div>
            </div>
            <hr />
        </div>

    );
}