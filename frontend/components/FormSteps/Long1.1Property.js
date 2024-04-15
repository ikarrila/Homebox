import React, { useState, useEffect } from 'react';
import SmallMedLar from '../SmallMedLar';
import { parse } from 'path';

export default function LongProperty({ changeStep, CommonLengthData }) {
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
    const [HowMany, setHowMany] = useState(0);
    const [currentOption, setCurrentOption] = useState(0);
    //For coloring button and allowing continuing
    const [colorField, setColorField] = useState(false);
    const [allowContinue, setAllowContinue] = useState(false);

    useEffect(() => {
        if (validate()) {
            setAllowContinue(true)
        }
        else {
            setAllowContinue(false)
        }
    }
        , [bedSize, bed2Size, bed3Size, bed4Size, bed5Size, bed6Size, livingRoomSize, diningRoomSize, kitchenSize, homeOfficeSize, outdoorSize, HowMany,
            showMainBedroomSize, showBedroom2Size, showBedroom3Size, showBedroom4Size, showBedroom5Size, showBedroom6Size, showLivingRoomSize, showDiningRoomSize, showKitchenSize, showHomeOfficeSize, showOutdoorSize])


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
    console.log(bedSize, bed2Size, bed3Size, bed4Size, bed5Size, bed6Size, livingRoomSize, diningRoomSize, kitchenSize, homeOfficeSize, outdoorSize)

    const handlePrevious = () => {
        setCurrentOption((prevOption) => prevOption > 0 ? prevOption - 1 : options.length - 1);
    };

    const handleNext = () => {
        setCurrentOption((prevOption) => (prevOption + 1) % options.length);
    };



    //Check if a value is chosen
    const validate = () => {
        //if the choice is opened but not chosen then return false
        if (showMainBedroomSize && bedSize === '') {
            return false;
        }
        if (showBedroom2Size && bed2Size === '') {
            return false;
        }
        if (showBedroom3Size && bed3Size === '') {
            return false;
        }
        if (showBedroom4Size && bed4Size === '') {
            return false;
        }
        if (showBedroom5Size && bed5Size === '') {
            return false;
        }
        if (showBedroom6Size && bed6Size === '') {
            return false;
        }
        if (showLivingRoomSize && livingRoomSize === '') {
            return false;
        }
        if (showDiningRoomSize && diningRoomSize === '') {
            return false;
        }
        if (showKitchenSize && kitchenSize === '') {
            return false;
        }
        if (showHomeOfficeSize && homeOfficeSize === '') {
            return false;
        }
        if (showOutdoorSize && outdoorSize === '') {
            return false;
        }
        //bedroom amont chosen, remember that 1 means 0 bedrooms, and 0 means no bedroom chosen
        if (HowMany === 0) {
            return false;
        }
        //checking whether all bedrooms are chosen according to the amount of bedrooms
        if (HowMany === 7) {
            if (!showBedroom6Size || bed6Size === '' ||
                !showBedroom5Size || bed5Size === '' ||
                !showBedroom4Size || bed4Size === '' ||
                !showBedroom3Size || bed3Size === '' ||
                !showBedroom2Size || bed2Size === '' ||
                !showMainBedroomSize || bedSize === '') {
                return false;
            }
        }
        if (HowMany === 6) {
            if (!showBedroom5Size || bed5Size === '' ||
                !showBedroom4Size || bed4Size === '' ||
                !showBedroom3Size || bed3Size === '' ||
                !showBedroom2Size || bed2Size === '' ||
                !showMainBedroomSize || bedSize === '') {
                return false;
            }
        }
        if (HowMany === 5) {
            if (!showBedroom4Size || bed4Size === '' ||
                !showBedroom3Size || bed3Size === '' ||
                !showBedroom2Size || bed2Size === '' ||
                !showMainBedroomSize || bedSize === '') {
                return false;
            }
        }
        if (HowMany === 4) {
            if (!showBedroom3Size || bed3Size === '' ||
                !showBedroom2Size || bed2Size === '' ||
                !showMainBedroomSize || bedSize === '') {
                return false;
            }
        }
        if (HowMany === 3) {
            if (!showBedroom2Size || bed2Size === '' ||
                !showMainBedroomSize || bedSize === '') {
                return false;
            }
        }
        if (HowMany === 2) {
            if (!showMainBedroomSize || bedSize === '') {
                return false;
            }
        }
        //there is at least one chosen room value
        if (bedSize !== '' && showMainBedroomSize) {
            return true;
        }
        if (bed2Size !== '' && showBedroom2Size) {
            return true;
        }
        if (bed3Size !== '' && showBedroom3Size) {
            return true;
        }
        if (bed4Size !== '' && showBedroom4Size) {
            return true;
        }
        if (bed5Size !== '' && showBedroom5Size) {
            return true;
        }
        if (bed6Size !== '' && showBedroom6Size) {
            return true;
        }
        if (livingRoomSize !== '' && showLivingRoomSize) {
            return true;
        }
        if (diningRoomSize !== '' && showDiningRoomSize) {
            return true;
        }
        if (kitchenSize !== '' && showKitchenSize) {
            return true;
        }
        if (homeOfficeSize !== '' && showHomeOfficeSize) {
            return true;
        }
        if (outdoorSize !== '' && showOutdoorSize) {
            return true;
        }
    }
    const determineContinue = () => {
        //any chosen
        if (validate()) {
            changeStep('long-rooms')
        }
        else {
            setColorField(true)
        }
        //else give notice that something needs to be chosens
    }
    //For coloring button
    const handleHowMany = (num) => {
        setHowMany(parseInt(num) + 1)
    }

    console.log(HowMany)
    return (
        <div className="section" >
            <div className='stepTwo' >
                <div className="stepTitle">2. Select your rooms to furnish & room size </div>
                <div className='step startCol' style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <div>
                            <label htmlFor="howMany">Number of Bedrooms  </label><br></br>
                            <select style={colorField && HowMany === "" ? { backgroundColor: "#f5f5f5" } : {}} id="howMany" name="howMany" className='miniselector' onChange={(event) => handleHowMany(event.target.value)}>
                                <option value="" disabled selected>Select Value</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                        <br />
                        {HowMany >= "2" && (
                            <div style={colorField && (bedSize === '' && showMainBedroomSize) || colorField && (HowMany >= 2 && !showMainBedroomSize) ? { backgroundColor: "#f5f5f5" } : {}}>
                                <div >
                                    <label htmlFor="mainBedroom" >Main bedroom</label>
                                    <input type="checkbox" id="mainBedroom" name="mainBedroom" className='roomCheckbox' onChange={() => setShowMainBedroomSize(!showMainBedroomSize)} />
                                </div>
                                {showMainBedroomSize && (
                                    <SmallMedLar name={"mainBedroomSize"} onSizeSelect={setBedSize} />
                                )}
                            </div>
                        )}

                        {HowMany >= "3" && (
                            <div style={colorField && (bed2Size === '' && showBedroom2Size) || colorField && (HowMany >= 3 && !showBedroom2Size) ? { backgroundColor: "#f5f5f5" } : {}}>
                                <div>
                                    <label htmlFor="bedroom2">Bedroom 2</label>
                                    <input type="checkbox" id="bedroom2" name="bedroom2" className='roomCheckbox' onChange={() => setBedroom2Size(!showBedroom2Size)} />
                                </div>
                                {showBedroom2Size && (
                                    <SmallMedLar name={"bedroom2Size"} onSizeSelect={setBed2Size} />
                                )}
                            </div>
                        )}

                        {HowMany >= "4" && (
                            <div style={colorField && (bed3Size === '' && showBedroom3Size) || colorField && (HowMany >= 4 && !showBedroom3Size) ? { backgroundColor: "#f5f5f5" } : {}}>
                                <div>
                                    <label htmlFor="bedroom3">Bedroom 3</label>
                                    <input type="checkbox" id="bedroom3" name="bedroom3" className='roomCheckbox' onChange={() => setBedroom3Size(!showBedroom3Size)} />
                                </div>
                                {showBedroom3Size && (
                                    <SmallMedLar name={"bedroom3Size"} onSizeSelect={setBed3Size} />
                                )}
                            </div>
                        )}

                        {HowMany >= "5" && (
                            <div style={colorField && (bed4Size === '' && showBedroom4Size) || colorField && (HowMany >= 5 && !showBedroom4Size) ? { backgroundColor: "#f5f5f5" } : {}}>
                                <div>
                                    <label htmlFor="bedroom4">Bedroom 4</label>
                                    <input type="checkbox" id="bedroom4" name="bedroom4" className='roomCheckbox' onChange={() => setBedroom4Size(!showBedroom4Size)} />
                                </div>
                                {showBedroom4Size && (
                                    <SmallMedLar name={"bedroom4Size"} onSizeSelect={setBed4Size} />
                                )}
                            </div>
                        )}

                        {HowMany >= "6" && (
                            <div style={colorField && (bed5Size === '' && showBedroom5Size) || colorField && (HowMany >= 6 && !showBedroom5Size) ? { backgroundColor: "#f5f5f5" } : {}}>
                                <div>
                                    <label htmlFor="bedroom5">Bedroom 5</label>
                                    <input type="checkbox" id="bedroom5" name="bedroom5" className='roomCheckbox' onChange={() => setBedroom5Size(!showBedroom5Size)} />
                                </div>
                                {showBedroom5Size && (
                                    <SmallMedLar name={"bedroom5Size"} onSizeSelect={setBed5Size} />
                                )}
                            </div>
                        )}

                        {HowMany >= "7" && (
                            <div style={colorField && (bed6Size === '' && showBedroom6Size) || colorField && (HowMany >= 7 && !showBedroom6Size) ? { backgroundColor: "#f5f5f5" } : {}}>
                                <div>
                                    <label htmlFor="bedroom6">Bedroom 6</label>
                                    <input type="checkbox" id="bedroom6" name="bedroom6" className='roomCheckbox' onChange={() => setBedroom6Size(!showBedroom6Size)} />
                                </div>
                                {showBedroom6Size && (
                                    <SmallMedLar name={"bedroom6Size"} onSizeSelect={setBed6Size} />
                                )}
                            </div>
                        )}
                        <div style={colorField && livingRoomSize === '' && showLivingRoomSize ? { backgroundColor: "#f5f5f5" } : {}}>
                            <div>
                                <label htmlFor="livingRoom" >Living Room</label>
                                <input type="checkbox" id="livingRoom" name="livingRoom" className='roomCheckbox' onChange={() => setShowLivingRoomSize(!showLivingRoomSize)} />                </div>
                            {showLivingRoomSize && (
                                <SmallMedLar name={"livingRoomSize"} onSizeSelect={setLivingRoomSize} />
                            )}
                        </div>
                        <div style={colorField && diningRoomSize === '' && showDiningRoomSize ? { backgroundColor: "#f5f5f5" } : {}}>
                            <div>
                                <label htmlFor="diningRoom">Dining Room</label>
                                <input type="checkbox" id="diningRoom" name="diningRoom" className='roomCheckbox' onChange={() => setShowDiningRoomSize(!showDiningRoomSize)} />
                            </div>
                            {showDiningRoomSize && (
                                <SmallMedLar name={"diningRoomSize"} onSizeSelect={setDiningRoomSize} />
                            )}
                        </div>
                        <div style={colorField && kitchenSize === '' && showKitchenSize ? { backgroundColor: "#f5f5f5" } : {}}>
                            <div>
                                <label htmlFor="kitchen">Kitchen</label>
                                <input type="checkbox" id="kitchen" name="kitchen" className='roomCheckbox' onChange={() => setShowKitchenSize(!showKitchenSize)} />
                            </div>
                            {showKitchenSize && (
                                <SmallMedLar name={"kitchenSize"} onSizeSelect={setKitchenSize} />
                            )}
                        </div>
                        <div style={colorField && homeOfficeSize === '' && showHomeOfficeSize ? { backgroundColor: "#f5f5f5" } : {}}>
                            <div>
                                <label htmlFor="homeoffice">Home Office</label>
                                <input type="checkbox" id="homeoffice" name="homeoffice" className='roomCheckbox' onChange={() => setShowHomeOfficeSize(!showHomeOfficeSize)} />
                            </div>{showHomeOfficeSize && (
                                <SmallMedLar name={"homeofficeSize"} onSizeSelect={setHomeOfficeSize} />
                            )}
                        </div>
                        <div style={colorField && outdoorSize === '' && showOutdoorSize ? { backgroundColor: "#f5f5f5" } : {}}>
                            <div>
                                <label htmlFor="outdoorSpace">Outdoor space</label>
                                <input type="checkbox" id="outdoorSpace" name="outdoorSpace" className='roomCheckbox' onChange={() => setShowOutdoorSize(!showOutdoorSize)} />
                            </div>{showOutdoorSize && (
                                <SmallMedLar name={"outdoorSpaceSize"} onSizeSelect={setOutdoorSize} />
                            )}
                        </div>
                    </div>
                    <div className='optionBox right'>
                        <h2>Room Size Description</h2>

                        <div dangerouslySetInnerHTML={{ __html: options[currentOption] }} />
                        <button onClick={handlePrevious}>Previous</button> <br />
                        <button onClick={handleNext}>Next</button>
                    </div>
                </div>
                <div className='container row align-middle'>
                    <button onClick={() => changeStep('common-length')} className='btn-tertiary'>Back</button>
                    <button onClick={() => determineContinue()} className={allowContinue ? 'btn-primary' : 'btn-tertiary'}>Continue</button>
                </div>

            </div>

        </div >
    )
}
