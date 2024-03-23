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
        <div data-testid="cost-calculator-form" className='container col'>
            <h1 data-testid="cost-calculator-header">Cost calculator</h1>

            <div className="stepTitle">1. Select your property type & location </div>
            <div className='step'>
                <div className='left'>
                    <select className='selector' defaultValue="" onChange={handlePropertyTypeChange}>
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
                <div className='right'>
                    <input type="text" placeholder='Location' name="location" className='input' />
                </div>
            </div>

            <div className="stepTitle">2. Select your rooms to furnish & room size </div>
            <div className='step startCol'>
                <div>
                    <label htmlFor="mainBedroom">Main bedroom</label>
                    <input type="checkbox" id="mainBedroom" name="mainBedroom" className='roomCheckbox' onChange={() => setShowMainBedroomSize(!showMainBedroomSize)} />
                </div>
                {showMainBedroomSize && (
                    <div>
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
                        <input type="checkbox" id="bedroom2" name="bedroom2" className='roomCheckbox' onChange={() => setBedroom2Size(!showBedroom2Size)} />
                        {showBedroom2Size && (
                            <div>
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
                        <input type="checkbox" id="bedroom3" name="bedroom3" className='roomCheckbox' onChange={() => setBedroom3Size(!showBedroom3Size)} />
                        {showBedroom3Size && (
                            <div>
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
                        <input type="checkbox" id="bedroom4" name="bedroom4" className='roomCheckbox' onChange={() => setBedroom4Size(!showBedroom4Size)} />
                        {showBedroom4Size && (
                            <div>
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
                        <input type="checkbox" id="bedroom5" name="bedroom5" className='roomCheckbox' onChange={() => setBedroom5Size(!showBedroom4Size)} />
                        {showBedroom5Size && (
                            <div>
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
                        <input type="checkbox" id="bedroom6" name="bedroom6" className='roomCheckbox' onChange={() => setBedroom6Size(!showBedroom6Size)} />
                        {showBedroom6Size && (
                            <div>
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
                    <label htmlFor="livingRoom">Living Room</label>
                    <input type="checkbox" id="livingRoom" name="livingRoom" className='roomCheckbox' onChange={() => setShowLivingRoomSize(!showLivingRoomSize)} />                </div>
                {showLivingRoomSize && (
                    <div>
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
                    <input type="checkbox" id="diningRoom" name="diningRoom" className='roomCheckbox' onChange={() => setShowDiningRoomSize(!showDiningRoomSize)} />
                </div>
                {showDiningRoomSize && (
                    <div>
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
                    <input type="checkbox" id="kitchen" name="kitchen" className='roomCheckbox' onChange={() => setShowKitchenSize(!showKitchenSize)} />
                </div>
                {showKitchenSize && (
                    <div>
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
                    <label htmlFor="homeoffice">Home Office</label>
                    <input type="checkbox" id="homeoffice" name="homeoffice" className='roomCheckbox' onChange={() => setHomeOfficeSize(!showHomeOfficeSize)} />
                </div>{showHomeOfficeSize && (
                    <div>
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
                    <input type="checkbox" id="outdoorSpace" name="outdoorSpace" className='roomCheckbox' onChange={() => setOutdoorSize(!showOutdoorSize)} />
                </div>{showOutdoorSize && (
                    <div>
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
                    </div>)}</div>


            <div className="stepTitle dark">3. Select your level of furnishing needs</div>
            <div className='step dark'>
                <div className='left'>
                    <select className='selector' defaultValue="" id='furnishingSelector'>
                        <option value="" disabled selected>Select...</option>
                        <option value="1">Standard</option>
                        <option value="2">Premium</option>
                    </select>
                </div>
                <div className='right'>
                    <h3>Standard:</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros in enim cursus, a finibus lorem pretium.</p>
                    <h3>Premium:</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros in enim cursus, a finibus lorem pretium.</p>
                </div>
            </div>

            <div className="stepTitle">4. Submit your results to view your budget</div>

            <div className='step startCol'>

                <input type="text" id="name" data-testid="name-input" name="name" placeholder='Name' className='input' />

                <input type="text" id="email" data-testid="email-input" name="email" placeholder='Email' className='input' />

                <input type="text" id="phone" name="phone" placeholder='Phone' className='input' />

                <input type="text" id="message" name="message" placeholder='Message' className='input' />
            </div>

            <div><Postbutton /></div>

        </div >
    );
};