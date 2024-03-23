"use client";

import React, { useState } from 'react';
import '/styles/styles.css';
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

    return (
        <div className='container col'>
            <h1>Short-term packages</h1>

            <div className='stepTitle'>1. Select the rental period </div>
            <div className='step startCol'>
                <label>Rental period (months)</label>
                <select className='selector'>
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

            <div className='stepTitle'>Step 2: Select the package</div>
            <div className='step startRow'>
                <div id='standard' className='left'>
                    < Image class='image-container' src={img1} alt="img1" />
                    <h3>Standard</h3>
                    <select className='selector' onChange={handleStandardPackageChange}>
                        <option value="" disabled selected>Select package size</option>
                        <option value="1">Studio Package</option>
                        <option value="2">1 Bedroom package</option>
                        <option value="3">2 Bedroom package</option>
                        <option value="4">3 Bedroom package</option>
                    </select>
                    {selectedStandardPackage && (
                        <button onClick={handleViewStandardPackage} className='btn-primary'>View Package</button>
                    )}
                    {showStandardPackage && buttonPressed && (
                        <div>
                            <p>List of items for selected package:</p>
                            <ul>
                                {selectedStandardPackage === '1' && (
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
                                )}

                                {selectedStandardPackage === '2' && (
                                    <>
                                        <h4><b>Bedroom</b></h4>
                                        <li>1x bed</li>
                                        <li>2x bedside table</li>
                                        <h4><b>Kitchen</b></h4>
                                        <li>1x dining table</li>
                                        <li>4x chairs</li>
                                        <h4><b>Living room</b></h4>
                                        <li>1x two seater sofa</li>
                                        <li>1x arm chair</li>
                                        <li>1x coffee table</li>
                                    </>
                                )}

                                {selectedStandardPackage === '3' && (
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
                                )}

                                {selectedStandardPackage === '4' && (
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
                                )}
                            </ul>
                        </div>
                    )}
                </div>
                <div id='premium' className='right'>
                    < Image class='image-container' src={img2} alt="img2" />
                    <h3>Premium</h3>

                    <select className='selector' onChange={handlePremiumPackageChange}>
                        <option value="" disabled selected>Select package size</option>
                        <option value="1">Studio Package</option>
                        <option value="2">1 Bedroom package</option>
                        <option value="3">2 Bedroom package</option>
                        <option value="4">3 Bedroom package</option>
                    </select>
                    {selectedPremiumPackage && (
                        <button onClick={handleViewPremiumPackage} className='btn-primary'>View Package</button>
                    )}
                    {showPremiumPackage && buttonPressed && (
                        <div>
                            <p>List of items for selected package:</p>
                            <ul>
                                {selectedPremiumPackage === '1' && (
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
                                )}

                                {selectedPremiumPackage === '2' && (
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
                                )}

                                {selectedPremiumPackage === '3' && (
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
                                )}

                                {selectedPremiumPackage === '4' && (
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
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div className='stepTitle dark'>3. Submit your request to short term rental</div>
            <div className='step dark startCol'>

                <input type="text" id="name" data-testid="name-input" name="name" placeholder='Name' className='input' />

                <input type="text" id="email" data-testid="email-input" name="email" placeholder='Email' className='input' />

                <input type="text" id="phone" name="phone" placeholder='Phone' className='input' />

                <input type="text" id="message" name="message" placeholder='Message' className='input' />
            </div>
            <Postbutton />
        </div>

    );
}
