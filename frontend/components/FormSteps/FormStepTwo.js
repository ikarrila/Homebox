import React, { useState } from 'react';
import SmallMedLar from '../SmallMedLar';

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

    const [currentOption, setCurrentOption] = useState(0);
    const options = [
        `A <b>small-sized</b> living room can fit a sofa or loveseat, coffee table, area rug and TV stand. <br>
      
        An <b>average-sized</b> living room can fit a sofa or sectional, coffee table, an accent chair, side table and TV stand. <br>
      
        A <b>large-sized</b> living room can fit a sofa and 2-4 accent chairs (OR a sectional and 1-2 accent chairs), coffee table, side tables and TV stand.<br>`,

        `A <b>small-sized</b> dining room can fit a dining table with 4 chairs.<br>
      
        An <b>average-sized</b> dining room can fit a dining table with 6 dining chairs.<br>
      
        A <b>large-sized</b> dining room can fit a dining table with 8 chairs and a sideboard.<br>`,

        `A <b>small-sized</b> kitchen can fit 2 counter stools.<br>
      
        An <b>average-sized</b> kitchen can fit a dining table with 4 chairs.<br>
      
        A <b>large-sized</b> kitchen can fit a dining table with 4 chairs and have 4 counter stools.<br>`,

        `A <b>small-sized</b> bedroom can fit a full size bed, 1 nightstand and a chest of drawers.<br>

        An <b>average-sized</b> bedroom can fit a queen size bed, 2 nightstands and a dresser.<br>
        
        A <b>large-sized</b> bedroom can fit a queen or king size bed, 2 nightstands, a dresser, bench or accent chair.<br>`,

        `A <b>small-sized</b> home office can fit a desk and office chair.<br>

        An <b>average-sized</b> home office can fit a desk, office chair and bookcase.<br>
        
        A <b>large-sized</b> home office can fit a desk, office chair, bookcase, sleeper sofa.<br>`,

        `A <b>small-sized</b> outdoor space can fit a bistro table with 2 dining chairs.<br>

        An <b>average-sized</b> outdoor space can fit 2 accent chairs and a side table.<br>
        
        A <b>large-sized</b> outdoor space can fit a dining table with 6 chairs, 2 accent chairs and side table.<br>`
    ];

    const handlePrevious = () => {
        setCurrentOption((prevOption) => prevOption > 0 ? prevOption - 1 : options.length - 1);
    };

    const handleNext = () => {
        setCurrentOption((prevOption) => (prevOption + 1) % options.length);
    };

    console.log(propertyType)
    return (
        <div className="section">
            <div className='stepTwo' >
                <div className="stepTitle">2. Select your rooms to furnish & room size </div>
                <div className='step startCol' style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
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
                        )}
                    </div>
                    <div className='optionBox right'>
                        <h2>Room Size Description</h2>

                        <div dangerouslySetInnerHTML={{ __html: options[currentOption] }} />
                        <button onClick={handlePrevious}>Previous</button> <br />
                        <button onClick={handleNext}>Next</button>
                    </div>
                </div>
                <div className='container row align-middle'>
                    <button onClick={() => changeStep(1)} className='btn-tertiary'>Back</button>
                    <button onClick={() => changeStep(3)} className='btn-tertiary ml-20'>Continue</button>
                </div>

            </div>

        </div >
    )
}
