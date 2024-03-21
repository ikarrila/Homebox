"use client";

import React, { useState } from 'react';
import '../styles/styles.css';
import Postbutton from './Postbutton';
import img1 from "../../pictures/francesca-tosolini-DmOhItSo49k-unsplash.jpg";
import img2 from "../../pictures/kara-eads-L7EwHkq1B2s-unsplash.jpg";
import Image from 'next/image';

export default function Package() {
    const [selectedStandardPackage, setSelectedStandardPackage] = useState('');
    const [selectedPremiumPackage, setSelectedPremiumPackage] = useState('');
    const [showStandardPackage, setShowStandardPackage] = useState(false);
    const [showPremiumPackage, setShowPremiumPackage] = useState(false);
    const [buttonPressed, setButtonPressed] = useState(false);

    const handleStandardPackageChange = (event) => {
        setSelectedStandardPackage(event.target.value);
        setButtonPressed(false);
    };

    const handlePremiumPackageChange = (event) => {
        setSelectedPremiumPackage(event.target.value);
        setButtonPressed(false);
    };

    const handleViewStandardPackage = () => {
        setShowStandardPackage(true);
        setButtonPressed(true);
    };

    const handleViewPremiumPackage = () => {
        setShowPremiumPackage(true);
        setButtonPressed(true);

    };

    const PackageDetails = ({ packageType }) => {
        switch (packageType) {
            case '1':
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
            case '2':
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
            case '3':
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
            case '4':
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
    }

    const PremiumPackageDetails = ({ packageType }) => {
        switch (packageType) {
            case '1':
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
            case '2':
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
            case '3':
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
            case '4':
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
    }

    return (
        <div>
            <header style={{ padding: '10px', backgroundColor: '#f5f5f5', marginBottom: '20px' }}>
                <h1>Short-term packages</h1>
            </header>

            <div className="roomStyle">
                <hr />
                <div className="stepStyle">Step 1: Select the rental period </div>
                <div style={{ display: 'flex' }}>
                    <div>
                        <div>
                            <label style={{ margin: '10px' }}>Rental period (months)</label>
                        </div>
                        <select style={{ margin: '10px' }}>
                            <option value="" disabled selected>Select rental period...</option>
                            <option value="3">3 month hire period</option>
                            <option value="4">4 month hire period</option>
                            <option value="5">5 month hire period</option>
                            <option value="6">6 month hire period</option>
                            <option value="7">7 month hire period</option>
                            <option value="8">8 month hire period</option>
                            <option value="9">9 month hire period</option>
                            <option value="10">10 month hire period</option>
                        </select>
                    </div>
                </div>
                <hr />
                <div className="stepStyle">Step 2: Select the package</div>
                <div style={{ display: 'flex' }}>
                    <div id='standard'>
                        < Image class='image-container' src={img1} alt="img1" objectFit="contain" style={{ height: '250px', width: 'auto' }} />
                        <h3><b>Standard</b></h3>
                        <select style={{ margin: '10px' }} onChange={handleStandardPackageChange}>
                            <option value="" disabled selected>Select package size</option>
                            <option value="1">Studio Package</option>
                            <option value="2">1 Bedroom package</option>
                            <option value="3">2 Bedroom package</option>
                            <option value="4">3 Bedroom package</option>
                        </select>

                        {selectedStandardPackage && (
                            <>
                                <hr />
                                <p>List of items for selected package:</p>
                                <PackageDetails packageType={selectedStandardPackage} />
                            </>
                        )}

                    </div>
                    <div id='premium'>
                        < Image class='image-container' src={img2} alt="img2" objectFit="contain" style={{ height: '250px', width: 'auto' }} />
                        <h3><b>Premium</b></h3>

                        <select style={{ margin: '10px' }} onChange={handlePremiumPackageChange}>
                            <option value="" disabled selected>Select package size</option>
                            <option value="1">Studio Package</option>
                            <option value="2">1 Bedroom package</option>
                            <option value="3">2 Bedroom package</option>
                            <option value="4">3 Bedroom package</option>
                        </select>
                        {selectedPremiumPackage && (
                            <>
                                <hr />
                                <p>List of items for selected premium package:</p>
                                <PremiumPackageDetails packageType={selectedPremiumPackage} />
                            </>
                        )}

                    </div>
                </div>
                <hr />
                <div className="stepStyle">Step 3: Submit your request to short term rental</div>

                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <div style={{ marginRight: '20px' }}>
                        <label htmlFor="name">Name:   </label>
                        <input type="text" id="name" name="name" style={{ border: '1px solid grey' }} />
                    </div>
                    <div style={{ marginRight: '20px' }}>
                        <label htmlFor="email">Email:   </label>
                        <input type="text" id="email" name="email" style={{ border: '1px solid grey' }} />
                    </div>
                    <div style={{ marginRight: '20px' }}>
                        <label htmlFor="phone">Phone:   </label>
                        <input type="phone" id="phone" name="phone" style={{ border: '1px solid grey' }} />
                    </div>
                    <div>
                        <label htmlFor="message">Message:  </label>
                        <input type="text" id="message" name="message" style={{ border: '1px solid grey' }} />
                    </div>
                </div>
                <Postbutton />
            </div>
        </div>
    );
}
