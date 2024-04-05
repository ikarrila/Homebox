import React, { useState } from 'react';
import SmallMedLar from './SmallMedLar';

export default function FormStepTwo({ propertyType, changeStep }) {
    const [showLivingRoomSize, setShowLivingRoomSize] = useState(false);
    const [showDiningRoomSize, setShowDiningRoomSize] = useState(false);
    const [showKitchenSize, setShowKitchenSize] = useState(false);
    const [showMainBedroomSize, setShowMainBedroomSize] = useState(false);
    const [showHomeOfficeSize, setShowHomeOfficeSize] = useState(false);
    const [showOutdoorSize, setShowOutdoorSize] = useState(false);
    const [showBedroom2Size, setBedroom2Size] = useState(false);
    const [showBedroom3Size, setBedroom3Size] = useState(false);
    const [showBedroom4Size, setBedroom4Size] = useState(false);
    const [showBedroom5Size, setBedroom5Size] = useState(false);
    const [showBedroom6Size, setBedroom6Size] = useState(false);


    const [bedSize, setBedSize] = useState('');
    const [bed2Size, setBed2Size] = useState('');
    const [bed3Size, setBed3Size] = useState('');
    const [bed4Size, setBed4Size] = useState('');
    const [bed5Size, setBed5Size] = useState('');
    const [bed6Size, setBed6Size] = useState('');
    const [livingRoomSize, setLivingRoomSize] = useState('');
    const [diningRoomSize, setDiningRoomSize] = useState('');
    const [kitchenSize, setKitchenSize] = useState('');
    const [homeOfficeSize, setHomeOfficeSize] = useState('');
    const [outdoorSize, setOutdoorSize] = useState('');
    console.log(propertyType)
    return (
        <div className="section">
            <div className='stepTwo' style={{ backgroundColor: "blue" }}>
                <div className="stepTitle">2. Select your rooms to furnish & room size </div>
                <div className='step startCol'>
                    <div>
                        <label htmlFor="mainBedroom">Main bedroom</label>
                        <input type="checkbox" id="mainBedroom" name="mainBedroom" className='roomCheckbox' onChange={() => setShowMainBedroomSize(!showMainBedroomSize)} />
                    </div>
                    {showMainBedroomSize && (
                        <SmallMedLar name={"mainBedroomSize"} onSizeSelect={setBedSize} />
                    )}

                    {propertyType >= "3" && (
                        <div>
                            <div>
                                <label htmlFor="bedroom2">Bedroom 2</label>
                                <input type="checkbox" id="bedroom2" name="bedroom2" className='roomCheckbox' onChange={() => setBedroom2Size(!showBedroom2Size)} />
                            </div>
                            {showBedroom2Size && (
                                <SmallMedLar name={"bedroom2Size"} onSizeSelect={setBed2Size} />
                            )}
                        </div>
                    )}

                    {propertyType >= "4" && (
                        <div>
                            <div>
                                <label htmlFor="bedroom3">Bedroom 3</label>
                                <input type="checkbox" id="bedroom3" name="bedroom3" className='roomCheckbox' onChange={() => setBedroom3Size(!showBedroom3Size)} />
                            </div>
                            {showBedroom3Size && (
                                <SmallMedLar name={"bedroom3Size"} onSizeSelect={setBed3Size} />
                            )}
                        </div>
                    )}

                    {propertyType >= "5" && (
                        <div>
                            <div>
                                <label htmlFor="bedroom4">Bedroom 4</label>
                                <input type="checkbox" id="bedroom4" name="bedroom4" className='roomCheckbox' onChange={() => setBedroom4Size(!showBedroom4Size)} />
                            </div>
                            {showBedroom4Size && (
                                <SmallMedLar name={"bedroom4Size"} onSizeSelect={setBed4Size} />
                            )}
                        </div>
                    )}

                    {propertyType >= "6" && (
                        <div>
                            <div>
                                <label htmlFor="bedroom5">Bedroom 5</label>
                                <input type="checkbox" id="bedroom5" name="bedroom5" className='roomCheckbox' onChange={() => setBedroom5Size(!showBedroom5Size)} />
                            </div>
                            {showBedroom5Size && (
                                <SmallMedLar name={"bedroom5Size"} onSizeSelect={setBed5Size} />
                            )}
                        </div>
                    )}

                    {propertyType >= "7" && (
                        <div>
                            <div>
                                <label htmlFor="bedroom6">Bedroom 6</label>
                                <input type="checkbox" id="bedroom6" name="bedroom6" className='roomCheckbox' onChange={() => setBedroom6Size(!showBedroom6Size)} />
                            </div>
                            {showBedroom6Size && (
                                <SmallMedLar name={"bedroom6Size"} onSizeSelect={setBed6Size} />
                            )}
                        </div>
                    )}
                    <div>
                        <label htmlFor="livingRoom">Living Room</label>
                        <input type="checkbox" id="livingRoom" name="livingRoom" className='roomCheckbox' onChange={() => setShowLivingRoomSize(!showLivingRoomSize)} />                </div>
                    {showLivingRoomSize && (
                        <SmallMedLar name={"livingRoomSize"} onSizeSelect={setLivingRoomSize} />
                    )}

                    <div>
                        <label htmlFor="diningRoom">Dining Room</label>
                        <input type="checkbox" id="diningRoom" name="diningRoom" className='roomCheckbox' onChange={() => setShowDiningRoomSize(!showDiningRoomSize)} />
                    </div>
                    {showDiningRoomSize && (
                        <SmallMedLar name={"diningRoomSize"} onSizeSelect={setDiningRoomSize} />
                    )}

                    <div>
                        <label htmlFor="kitchen">Kitchen</label>
                        <input type="checkbox" id="kitchen" name="kitchen" className='roomCheckbox' onChange={() => setShowKitchenSize(!showKitchenSize)} />
                    </div>
                    {showKitchenSize && (
                        <SmallMedLar name={"kitchenSize"} onSizeSelect={setKitchenSize} />
                    )}
                    <div>
                        <label htmlFor="homeoffice">Home Office</label>
                        <input type="checkbox" id="homeoffice" name="homeoffice" className='roomCheckbox' onChange={() => setShowHomeOfficeSize(!showHomeOfficeSize)} />
                    </div>{showHomeOfficeSize && (
                        <SmallMedLar name={"homeofficeSize"} onSizeSelect={setHomeOfficeSize} />
                    )}
                    <div>
                        <label htmlFor="outdoorSpace">Outdoor space</label>
                        <input type="checkbox" id="outdoorSpace" name="outdoorSpace" className='roomCheckbox' onChange={() => setShowOutdoorSize(!showOutdoorSize)} />
                    </div>{showOutdoorSize && (
                        <SmallMedLar name={"outdoorSpaceSize"} onSizeSelect={setOutdoorSize} />
                    )}</div>
                <div className='container row align-middle'>
                    <button onClick={() => changeStep(3)} className='btn-tertiary'>Continue</button>
                </div>
            </div>

        </div >
    )
}
