"use client";

import React, { useState } from 'react';
import '/styles/styles.css';
import Postbutton from './Postbutton';

export default function CostCalculatorForm() {
    const [showLivingRoomSize, setShowLivingRoomSize] = useState(false);
    const [showDiningRoomSize, setShowDiningRoomSize] = useState(false);
    const [showKitchenSize, setShowKitchenSize] = useState(false);
    const [showMainBedroomSize, setShowMainBedroomSize] = useState(false);
    const [showHomeOfficeSize, setHomeOfficeSize] = useState(false);
    const [showOutdoorSize, setOutdoorSize] = useState(false);
    const [showBedroom2Size, setBedroom2Size] = useState(false);
    const [showBedroom3Size, setBedroom3Size] = useState(false);
    const [showBedroom4Size, setBedroom4Size] = useState(false);
    const [showBedroom5Size, setBedroom5Size] = useState(false);
    const [showBedroom6Size, setBedroom6Size] = useState(false);
    const [propertyType, setPropertyType] = useState('');

    const handlePropertyTypeChange = (event) => {
        setPropertyType(event.target.value);
    };

    return (
        <div data-testid="cost-calculator-form">
            <header style={{ padding: '10px', backgroundColor: '#f5f5f5', marginBottom: '20px' }}>
                <h1 data-testid="cost-calculator-header">Cost calculator</h1>
            </header>
            <div className="room">
                <div className="stepStyle">Step 1: Select your property type & location </div>
                {/* Step content goes here */}

            </div>

            <div className="room">
                <hr />
                <div style={{ display: 'flex' }}>
                    <div>
                        <div>
                            <label style={{ margin: '10px' }}>Property:</label>
                        </div>
                        <select style={{ margin: '10px' }} defaultValue="" onChange={handlePropertyTypeChange}>
                            <option value="" disabled>Select property type...</option>
                            <option value="1">Studio Apartment</option>
                            <option value="2">One Bedroom</option>
                            <option value="3">Two Bedroom</option>
                            <option value="4">Three Bedroom</option>
                            <option value="5">Four Bedroom</option>
                            <option value="6">Five Bedroom</option>
                            <option value="7">Six Bedroom</option>
                        </select>
                    </div>
                    <div>

                        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                            <label htmlFor="location">Location:</label>
                            <input type="text" id="location" name="location" style={{ border: '1px solid grey' }} />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="stepStyle">Step 2: Select your rooms to furnish & room size </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <label htmlFor="livingRoom">Living Room  </label>
                    <input type="checkbox" id="livingRoom" name="livingRoom" style={{ marginLeft: '10px' }} onChange={() => setShowLivingRoomSize(!showLivingRoomSize)} />                </div>
                {showLivingRoomSize && (
                    <div className="labelStyle">
                        <div>
                            <input type="radio" id="small" name="livingRoomSize" value="small" />
                            <label for="small">Small</label>
                        </div>
                        <div>
                            <input type="radio" id="medium" name="livingRoomSize" value="medium" />
                            <label for="medium">Medium</label>
                        </div>
                        <div>
                            <input type="radio" id="large" name="livingRoomSize" value="large" />
                            <label for="large">Large</label>
                        </div>
                    </div>)}
                <div>
                    <label htmlFor="diningRoom">Dining Room</label>
                    <input type="checkbox" id="diningRoom" name="diningRoom" style={{ marginLeft: '10px' }} onChange={() => setShowDiningRoomSize(!showDiningRoomSize)} />
                </div>{showDiningRoomSize && (
                    <div className="labelStyle">
                        <div>
                            <input type="radio" id="small" name="diningRoomSize" value="small" />
                            <label for="small">Small</label>
                        </div>
                        <div>
                            <input type="radio" id="medium" name="diningRoomSize" value="medium" />
                            <label for="medium">Medium</label>
                        </div>
                        <div>
                            <input type="radio" id="large" name="diningRoomSize" value="large" />
                            <label for="large">Large</label>
                        </div>
                    </div>)}
                <div>
                    <label htmlFor="kitchen">Kitchen</label>
                    <input type="checkbox" id="kitchen" name="kitchen" style={{ marginLeft: '10px' }} onChange={() => setShowKitchenSize(!showKitchenSize)} />
                </div>{showKitchenSize && (
                    <div className="labelStyle">
                        <div>
                            <input type="radio" id="small" name="kitchenSize" value="small" />
                            <label for="small">Small</label>
                        </div>
                        <div>
                            <input type="radio" id="medium" name="kitchenSize" value="medium" />
                            <label for="medium">Medium</label>
                        </div>
                        <div>
                            <input type="radio" id="large" name="kitchenSize" value="large" />
                            <label for="large">Large</label>
                        </div>
                    </div>)}
                <div>
                    <label htmlFor="mainBedroom">Main bedroom</label>
                    <input type="checkbox" id="mainBedroom" name="mainBedroom" style={{ marginLeft: '10px' }} onChange={() => setShowMainBedroomSize(!showMainBedroomSize)} />
                </div>{showMainBedroomSize && (
                    <div className="labelStyle">
                        <div>
                            <input type="radio" id="small" name="bedroomSize" value="small" />
                            <label for="small">Small</label>
                        </div>
                        <div>
                            <input type="radio" id="medium" name="bedroomSize" value="medium" />
                            <label for="medium">Medium</label>
                        </div>
                        <div>
                            <input type="radio" id="large" name="bedroomSize" value="large" />
                            <label for="large">Large</label>
                        </div>
                    </div>)}

                {propertyType >= "3" && (
                    <div>
                        <label htmlFor="bedroom4">Bedroom 2</label>
                        <input type="checkbox" id="bedroom2" name="bedroom2" style={{ marginLeft: '10px' }} onChange={() => setBedroom2Size(!showBedroom2Size)} />
                        {showBedroom2Size && (
                            <div className="labelStyle">
                                <div>
                                    <input type="radio" id="small" name="bedroom2Size" value="small" />
                                    <label for="small">Small</label>
                                </div>
                                <div>
                                    <input type="radio" id="medium" name="bedroom2Size" value="medium" />
                                    <label for="medium">Medium</label>
                                </div>
                                <div>
                                    <input type="radio" id="large" name="bedroom2Size" value="large" />
                                    <label for="large">Large</label>
                                </div>
                            </div>
                        )}
                    </div>
                )}


                {propertyType >= "4" && (
                    <div>
                        <label htmlFor="bedroom4">Bedroom 3</label>
                        <input type="checkbox" id="bedroom3" name="bedroom3" style={{ marginLeft: '10px' }} onChange={() => setBedroom3Size(!showBedroom3Size)} />
                        {showBedroom3Size && (
                            <div className="labelStyle">
                                <div>
                                    <input type="radio" id="small" name="bedroom3Size" value="small" />
                                    <label for="small">Small</label>
                                </div>
                                <div>
                                    <input type="radio" id="medium" name="bedroom3Size" value="medium" />
                                    <label for="medium">Medium</label>
                                </div>
                                <div>
                                    <input type="radio" id="large" name="bedroom3Size" value="large" />
                                    <label for="large">Large</label>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {propertyType >= "5" && (
                    <div>
                        <label htmlFor="bedroom4">Bedroom 4</label>
                        <input type="checkbox" id="bedroom4" name="bedroom4" style={{ marginLeft: '10px' }} onChange={() => setBedroom4Size(!showBedroom4Size)} />
                        {showBedroom4Size && (
                            <div className="labelStyle">
                                <div>
                                    <input type="radio" id="small" name="bedroom4Size" value="small" />
                                    <label for="small">Small</label>
                                </div>
                                <div>
                                    <input type="radio" id="medium" name="bedroom4Size" value="medium" />
                                    <label for="medium">Medium</label>
                                </div>
                                <div>
                                    <input type="radio" id="large" name="bedroom4Size" value="large" />
                                    <label for="large">Large</label>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {propertyType >= "6" && (
                    <div>
                        <label htmlFor="bedroom5">Bedroom 5</label>
                        <input type="checkbox" id="bedroom5" name="bedroom5" style={{ marginLeft: '10px' }} onChange={() => setBedroom5Size(!showBedroom4Size)} />
                        {showBedroom5Size && (
                            <div className="labelStyle">
                                <div>
                                    <input type="radio" id="small" name="bedroom5Size" value="small" />
                                    <label for="small">Small</label>
                                </div>
                                <div>
                                    <input type="radio" id="medium" name="bedroom5Size" value="medium" />
                                    <label for="medium">Medium</label>
                                </div>
                                <div>
                                    <input type="radio" id="large" name="bedroom5Size" value="large" />
                                    <label for="large">Large</label>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {propertyType >= "7" && (
                    <div>
                        <label htmlFor="bedroom6">Bedroom 6</label>
                        <input type="checkbox" id="bedroom6" name="bedroom6" style={{ marginLeft: '10px' }} onChange={() => setBedroom6Size(!showBedroom6Size)} />
                        {showBedroom6Size && (
                            <div className="labelStyle">
                                <div>
                                    <input type="radio" id="small" name="bedroom6Size" value="small" />
                                    <label for="small">Small</label>
                                </div>
                                <div>
                                    <input type="radio" id="medium" name="bedroom6Size" value="medium" />
                                    <label for="medium">Medium</label>
                                </div>
                                <div>
                                    <input type="radio" id="large" name="bedroom6Size" value="large" />
                                    <label for="large">Large</label>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                <div>
                    <label htmlFor="homeoffice">Home Office</label>
                    <input type="checkbox" id="homeoffice" name="homeoffice" style={{ marginLeft: '10px' }} onChange={() => setHomeOfficeSize(!showHomeOfficeSize)} />
                </div>{showHomeOfficeSize && (
                    <div className="labelStyle">
                        <div>
                            <input type="radio" id="small" name="homeOfficeSize" value="small" />
                            <label for="small">Small</label>
                        </div>
                        <div>
                            <input type="radio" id="medium" name="homeOfficeSize" value="medium" />
                            <label for="medium">Medium</label>
                        </div>
                        <div>
                            <input type="radio" id="large" name="homeOfficeSize" value="large" />
                            <label for="large">Large</label>
                        </div>
                    </div>)}
                <div>
                    <label htmlFor="outdoorSpace">Outdoor space</label>
                    <input type="checkbox" id="outdoorSpace" name="outdoorSpace" style={{ marginLeft: '10px' }} onChange={() => setOutdoorSize(!showOutdoorSize)} />
                </div>{showOutdoorSize && (
                    <div className="labelStyle">
                        <div>
                            <input type="radio" id="small" name="outdoorSize" value="small" />
                            <label for="small">Small</label>
                        </div>
                        <div>
                            <input type="radio" id="medium" name="outdoorSize" value="medium" />
                            <label for="medium">Medium</label>
                        </div>
                        <div>
                            <input type="radio" id="large" name="outdoorSize" value="large" />
                            <label for="large">Large</label>
                        </div>
                    </div>)}
                <div>
                    <hr />

                    <div className="stepStyle">Step 3: Select your level of furnishing needs</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                        <select style={{ margin: '10px' }} defaultValue="">
                            <option value="" disabled selected>Select...</option>
                            <option value="1">Standard</option>
                            <option value="2">Premium</option>
                        </select>
                        <div>
                            <h3><b>Standard:</b></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros in enim cursus, a finibus lorem pretium.</p>
                            <h3><b>Premium:</b></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros in enim cursus, a finibus lorem pretium.</p>
                        </div>
                    </div>
                </div>
                <div className="stepStyle">Step 4: Submit your results to view your budget</div>

                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <div style={{ marginRight: '20px' }}>
                        <label htmlFor="name">Name:   </label>
                        <input type="text" id="name" data-testid="name-input" name="name" style={{ border: '1px solid grey' }} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:   </label>
                        <input type="text" id="email" data-testid="email-input" name="email" style={{ border: '1px solid grey' }} />

                    </div>
                </div>
                <Postbutton />
            </div>
        </div>
    );
}