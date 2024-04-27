import React, { useState, useEffect } from 'react';
import SmallMedLar from '../SmallMedLar';
import { parse } from 'path';
import { validateHeaderName } from 'http';

export default function LongProperty({ changeStep, CommonLengthData, LongPropertyData, setLongPropertyData }) {
    const [showLivingRoomSize, setShowLivingRoomSize] = useState(false);
    const [showDiningRoomSize, setShowDiningRoomSize] = useState(false);
    const [showKitchenSize, setShowKitchenSize] = useState(false);
    const [showHomeOfficeSize, setShowHomeOfficeSize] = useState(false);
    const [showOutdoorSize, setShowOutdoorSize] = useState(false);
    const [showMainBedroomSize, setShowMainBedroomSize] = useState(false);
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
    const [HowMany, setHowMany] = useState('');
    const [currentOption, setCurrentOption] = useState(0);
    //For coloring button and allowing continuing
    const [colorField, setColorField] = useState(false);
    const [allowContinue, setAllowContinue] = useState(false);

    const [hasClickedContinue, setHasClickedContinue] = useState(false);


    //Validates form on change of values
    useEffect(() => {
        if (validate()) {
            setAllowContinue(true);
        }
        else {
            setAllowContinue(false);
        }
    }
        , [bedSize, bed2Size, bed3Size, bed4Size, bed5Size, bed6Size, livingRoomSize, diningRoomSize, kitchenSize, homeOfficeSize, outdoorSize, HowMany,
            showMainBedroomSize, showBedroom2Size, showBedroom3Size, showBedroom4Size, showBedroom5Size, showBedroom6Size, showLivingRoomSize, showDiningRoomSize, showKitchenSize, showHomeOfficeSize, showOutdoorSize]);

    //getting data from formunified
    useEffect(() => {
        if (LongPropertyData) {
            setShowMainBedroomSize(LongPropertyData.showMainBedroomSize ? LongPropertyData.showMainBedroomSize : false);
            setBedroom2Size(LongPropertyData.showBedroom2Size ? LongPropertyData.showBedroom2Size : false);
            setBedroom3Size(LongPropertyData.showBedroom3Size ? LongPropertyData.showBedroom3Size : false);
            setBedroom4Size(LongPropertyData.showBedroom4Size ? LongPropertyData.showBedroom4Size : false);
            setBedroom5Size(LongPropertyData.showBedroom5Size ? LongPropertyData.showBedroom5Size : false);
            setBedroom6Size(LongPropertyData.showBedroom6Size ? LongPropertyData.showBedroom6Size : false);
            setShowLivingRoomSize(LongPropertyData.showLivingRoomSize ? LongPropertyData.showLivingRoomSize : false);
            setShowDiningRoomSize(LongPropertyData.showDiningRoomSize ? LongPropertyData.showDiningRoomSize : false);
            setShowKitchenSize(LongPropertyData.showKitchenSize ? LongPropertyData.showKitchenSize : false);
            setShowHomeOfficeSize(LongPropertyData.showHomeOfficeSize ? LongPropertyData.showHomeOfficeSize : false);
            setShowOutdoorSize(LongPropertyData.showOutdoorSize ? LongPropertyData.showOutdoorSize : false);

            setBedSize((LongPropertyData.bedSize && LongPropertyData.showMainBedroomSize) ? LongPropertyData.bedSize : '');
            setBed2Size((LongPropertyData.bed2Size && LongPropertyData.showBedroom2Size) ? LongPropertyData.bed2Size : '');
            setBed3Size((LongPropertyData.bed3Size && LongPropertyData.showBedroom3Size) ? LongPropertyData.bed3Size : '');
            setBed4Size((LongPropertyData.bed4Size && LongPropertyData.showBedroom4Size) ? LongPropertyData.bed4Size : '');
            setBed5Size((LongPropertyData.bed5Size && LongPropertyData.showBedroom5Size) ? LongPropertyData.bed5Size : '');
            setBed6Size((LongPropertyData.bed6Size && LongPropertyData.showBedroom6Size) ? LongPropertyData.bed6Size : '');
            setLivingRoomSize((LongPropertyData.livingRoomSize && LongPropertyData.showLivingRoomSize) ? LongPropertyData.livingRoomSize : '');
            setDiningRoomSize((LongPropertyData.diningRoomSize && LongPropertyData.showDiningRoomSize) ? LongPropertyData.diningRoomSize : '');
            setKitchenSize((LongPropertyData.kitchenSize && LongPropertyData.showKitchenSize) ? LongPropertyData.kitchenSize : '');
            setHomeOfficeSize((LongPropertyData.homeOfficeSize && LongPropertyData.showHomeOfficeSize) ? LongPropertyData.homeOfficeSize : '');
            setOutdoorSize((LongPropertyData.outdoorSize && LongPropertyData.showOutdoorSize) ? LongPropertyData.outdoorSize : '');
            setHowMany((LongPropertyData.HowMany >= 0) ? (LongPropertyData.HowMany) : '');
        }
    }, []);

    //data sent to FormUnified.js
    const sendToParent = () => {
        const data = {
            showMainBedroomSize: showMainBedroomSize,
            showBedroom2Size: showBedroom2Size,
            showBedroom3Size: showBedroom3Size,
            showBedroom4Size: showBedroom4Size,
            showBedroom5Size: showBedroom5Size,
            showBedroom6Size: showBedroom6Size,
            showLivingRoomSize: showLivingRoomSize,
            showDiningRoomSize: showDiningRoomSize,
            showKitchenSize: showKitchenSize,
            showHomeOfficeSize: showHomeOfficeSize,
            showOutdoorSize: showOutdoorSize,
            bedSize: bedSize,
            bed2Size: bed2Size,
            bed3Size: bed3Size,
            bed4Size: bed4Size,
            bed5Size: bed5Size,
            bed6Size: bed6Size,
            livingRoomSize: livingRoomSize,
            diningRoomSize: diningRoomSize,
            kitchenSize: kitchenSize,
            homeOfficeSize: homeOfficeSize,
            outdoorSize: outdoorSize,
            HowMany: HowMany
        };
        setLongPropertyData(data);
    };


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
    console.log(bedSize, bed2Size, bed3Size, bed4Size, bed5Size, bed6Size, livingRoomSize, diningRoomSize, kitchenSize, homeOfficeSize, outdoorSize);

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

        if (HowMany === '') {
            return false;
        }
        //checking whether all bedrooms are chosen according to the amount of bedrooms
        if (HowMany === 6) {
            if (!showBedroom6Size || bed6Size === '' ||
                !showBedroom5Size || bed5Size === '' ||
                !showBedroom4Size || bed4Size === '' ||
                !showBedroom3Size || bed3Size === '' ||
                !showBedroom2Size || bed2Size === '' ||
                !showMainBedroomSize || bedSize === '') {
                return false;
            }
        }
        if (HowMany === 5) {
            if (!showBedroom5Size || bed5Size === '' ||
                !showBedroom4Size || bed4Size === '' ||
                !showBedroom3Size || bed3Size === '' ||
                !showBedroom2Size || bed2Size === '' ||
                !showMainBedroomSize || bedSize === '') {
                return false;
            }
        }
        if (HowMany === 4) {
            if (!showBedroom4Size || bed4Size === '' ||
                !showBedroom3Size || bed3Size === '' ||
                !showBedroom2Size || bed2Size === '' ||
                !showMainBedroomSize || bedSize === '') {
                return false;
            }
        }
        if (HowMany === 3) {
            if (!showBedroom3Size || bed3Size === '' ||
                !showBedroom2Size || bed2Size === '' ||
                !showMainBedroomSize || bedSize === '') {
                return false;
            }
        }
        if (HowMany === 2) {
            if (!showBedroom2Size || bed2Size === '' ||
                !showMainBedroomSize || bedSize === '') {
                return false;
            }
        }
        if (HowMany === 1) {
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
    };
    const determineContinue = (place) => {
        //any chosen
        if (validate()) {
            sendToParent();
            changeStep(place);
        }
        else {
            // setColorField(true);
            console.log("choose anything");
            setHasClickedContinue(true);
        }
        //else give notice that something needs to be chosen
    };
    //return to previous page
    const returnToPrevious = (place) => {
        sendToParent();
        changeStep(place);
    };
    //For coloring button
    const handleHowMany = (num) => {
        setHowMany(parseInt(num));
        //values of unshown values are cleared
        if (HowMany < 6) {
            setBedroom6Size(false);
            setBed6Size('');
        }
        if (HowMany < 5) {
            setBedroom5Size(false);
            setBed5Size('');
        }
        if (HowMany < 4) {
            setBedroom4Size(false);
            setBed4Size('');
        }
        if (HowMany < 3) {
            setBedroom3Size(false);
            setBed3Size('');
        }
        if (HowMany < 2) {
            setBedroom2Size(false);
            setBed2Size('');
        }
        if (HowMany < 1) {
            setShowMainBedroomSize(false);
            setBedSize('');
        }
    };

    console.log(HowMany);
    return (
        <div className="section" >
            <div className="stepTitle">2. Select your rooms to furnish & room size </div>
            <div className='step'>
                <div className='left'>
                    <div className='left'>
                        <label htmlFor="howMany">Number of Bedrooms  </label><br></br>
                        <select value={HowMany} id="howMany" name="howMany" className={`input ${HowMany === '' && hasClickedContinue ? 'alert' : ''}`} onChange={(event) => { handleHowMany(event.target.value); }}>
                            <option value="" disabled selected>Select Value</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                        {HowMany === '' && hasClickedContinue && <p style={{ maxWidth: '100%' }}>Please select the number of bedrooms</p>}
                    </div>

                    <br />

                    {HowMany >= "1" && (
                        <div className={`left roomList ${(!showMainBedroomSize &&
                            !showBedroom2Size &&
                            !showBedroom3Size &&
                            !showBedroom4Size &&
                            !showBedroom5Size &&
                            !showBedroom6Size &&
                            !showDiningRoomSize &&
                            !showHomeOfficeSize &&
                            !showKitchenSize &&
                            !showLivingRoomSize &&
                            !showOutdoorSize && hasClickedContinue) || hasClickedContinue && (bedSize === '' && showMainBedroomSize) || hasClickedContinue && (bedSize === '' && showMainBedroomSize) || hasClickedContinue && (HowMany >= 1 && !showMainBedroomSize) ? 'alert' : ''}`}>
                            <div>

                                <input type="checkbox" checked={showMainBedroomSize} id="mainBedroom" name="mainBedroom" className='roomCheckbox' onChange={() => { setShowMainBedroomSize(!showMainBedroomSize); }} />
                                <label htmlFor="mainBedroom" >Main bedroom</label>
                            </div>
                            {showMainBedroomSize && (
                                <SmallMedLar value={bedSize} name={"mainBedroomSize"} onSizeSelect={setBedSize} />
                            )}
                        </div>
                    )}

                    {HowMany >= "2" && (
                        <div className={`left roomList ${(!showMainBedroomSize &&
                            !showBedroom2Size &&
                            !showBedroom3Size &&
                            !showBedroom4Size &&
                            !showBedroom5Size &&
                            !showBedroom6Size &&
                            !showDiningRoomSize &&
                            !showHomeOfficeSize &&
                            !showKitchenSize &&
                            !showLivingRoomSize &&
                            !showOutdoorSize && hasClickedContinue) || hasClickedContinue && (bed2Size === '' && showBedroom2Size) || hasClickedContinue && (HowMany >= 2 && !showBedroom2Size) ? 'alert' : ''}`}>
                            <div>

                                <input type="checkbox" checked={showBedroom2Size} id="bedroom2" name="bedroom2" className='roomCheckbox' onChange={() => { setBedroom2Size(!showBedroom2Size); }} />
                                <label htmlFor="bedroom2">Bedroom 2</label>
                            </div>
                            {showBedroom2Size && (
                                <SmallMedLar value={bed2Size} name={"bedroom2Size"} onSizeSelect={setBed2Size} />
                            )}
                        </div>
                    )}

                    {HowMany >= "3" && (
                        <div className={`left roomList ${(!showMainBedroomSize &&
                            !showBedroom2Size &&
                            !showBedroom3Size &&
                            !showBedroom4Size &&
                            !showBedroom5Size &&
                            !showBedroom6Size &&
                            !showDiningRoomSize &&
                            !showHomeOfficeSize &&
                            !showKitchenSize &&
                            !showLivingRoomSize &&
                            !showOutdoorSize && hasClickedContinue) || hasClickedContinue && (bed3Size === '' && showBedroom3Size) || hasClickedContinue && (bed3Size === '' && showBedroom3Size) || hasClickedContinue && (HowMany >= 3 && !showBedroom3Size) ? 'alert' : ''}`}>
                            <div>


                                <input type="checkbox" checked={showBedroom3Size} id="bedroom3" name="bedroom3" className='roomCheckbox' onChange={() => { setBedroom3Size(!showBedroom3Size); }} />
                                <label htmlFor="bedroom3">Bedroom 3</label>
                            </div>
                            {showBedroom3Size && (
                                <SmallMedLar value={bed3Size} name={"bedroom3Size"} onSizeSelect={setBed3Size} />
                            )}
                        </div>
                    )}

                    {HowMany >= "4" && (
                        <div className={`left roomList ${(!showMainBedroomSize &&
                            !showBedroom2Size &&
                            !showBedroom3Size &&
                            !showBedroom4Size &&
                            !showBedroom5Size &&
                            !showBedroom6Size &&
                            !showDiningRoomSize &&
                            !showHomeOfficeSize &&
                            !showKitchenSize &&
                            !showLivingRoomSize &&
                            !showOutdoorSize && hasClickedContinue) || hasClickedContinue && (bed4Size === '' && showBedroom4Size) || hasClickedContinue && (bed4Size === '' && showBedroom4Size) || hasClickedContinue && (HowMany >= 4 && !showBedroom4Size) ? 'alert' : ''}`}>
                            <div>

                                <input type="checkbox" checked={showBedroom4Size} id="bedroom4" name="bedroom4" className='roomCheckbox' onChange={() => { setBedroom4Size(!showBedroom4Size); }} />
                                <label htmlFor="bedroom4">Bedroom 4</label>
                            </div>
                            {showBedroom4Size && (
                                <SmallMedLar value={bed4Size} name={"bedroom4Size"} onSizeSelect={setBed4Size} />
                            )}
                        </div>
                    )}

                    {HowMany >= "5" && (
                        <div className={`left roomList ${(!showMainBedroomSize &&
                            !showBedroom2Size &&
                            !showBedroom3Size &&
                            !showBedroom4Size &&
                            !showBedroom5Size &&
                            !showBedroom6Size &&
                            !showDiningRoomSize &&
                            !showHomeOfficeSize &&
                            !showKitchenSize &&
                            !showLivingRoomSize &&
                            !showOutdoorSize && hasClickedContinue) || hasClickedContinue && (bed5Size === '' && showBedroom5Size) || hasClickedContinue && (bed5Size === '' && showBedroom5Size) || hasClickedContinue && (HowMany >= 5 && !showBedroom5Size) ? 'alert' : ''}`}>
                            <div>

                                <input type="checkbox" checked={showBedroom5Size} id="bedroom5" name="bedroom5" className='roomCheckbox' onChange={() => { setBedroom5Size(!showBedroom5Size); }} />
                                <label htmlFor="bedroom5">Bedroom 5</label>
                            </div>
                            {showBedroom5Size && (
                                <SmallMedLar value={bed5Size} name={"bedroom5Size"} onSizeSelect={setBed5Size} />
                            )}
                        </div>
                    )}

                    {HowMany >= "6" && (
                        <div className={`left roomList ${(!showMainBedroomSize &&
                            !showBedroom2Size &&
                            !showBedroom3Size &&
                            !showBedroom4Size &&
                            !showBedroom5Size &&
                            !showBedroom6Size &&
                            !showDiningRoomSize &&
                            !showHomeOfficeSize &&
                            !showKitchenSize &&
                            !showLivingRoomSize &&
                            !showOutdoorSize && hasClickedContinue) || hasClickedContinue && (bed6Size === '' && showBedroom6Size) || hasClickedContinue && (HowMany >= 6 && !showBedroom6Size) ? 'alert' : ''}`}>
                            <div>

                                <input type="checkbox" checked={showBedroom6Size} id="bedroom6" name="bedroom6" className='roomCheckbox' onChange={() => { setBedroom6Size(!showBedroom6Size); }} />
                                <label htmlFor="bedroom6">Bedroom 6</label>
                            </div>
                            {showBedroom6Size && (
                                <SmallMedLar value={bed6Size} name={"bedroom6Size"} onSizeSelect={setBed6Size} />
                            )}
                        </div>
                    )}

                    <div className={`left roomList ${(!showMainBedroomSize &&
                        !showBedroom2Size &&
                        !showBedroom3Size &&
                        !showBedroom4Size &&
                        !showBedroom5Size &&
                        !showBedroom6Size &&
                        !showDiningRoomSize &&
                        !showHomeOfficeSize &&
                        !showKitchenSize &&
                        !showLivingRoomSize &&
                        !showOutdoorSize && hasClickedContinue && HowMany === '' || HowMany === 0) || hasClickedContinue && livingRoomSize === '' && showLivingRoomSize ? 'alert' : ''}`}>
                        <div>

                            <input type="checkbox" id="livingRoom" checked={showLivingRoomSize} name="livingRoom" className='roomCheckbox' onChange={() => { setShowLivingRoomSize(!showLivingRoomSize); }} />
                            <label htmlFor="livingRoom" >Living Room</label>
                        </div>
                        {showLivingRoomSize && (
                            <SmallMedLar value={livingRoomSize} name={"livingRoomSize"} onSizeSelect={setLivingRoomSize} />
                        )}
                    </div>
                    <div className={`left roomList ${(!showMainBedroomSize &&
                        !showBedroom2Size &&
                        !showBedroom3Size &&
                        !showBedroom4Size &&
                        !showBedroom5Size &&
                        !showBedroom6Size &&
                        !showDiningRoomSize &&
                        !showHomeOfficeSize &&
                        !showKitchenSize &&
                        !showLivingRoomSize &&
                        !showOutdoorSize && hasClickedContinue && HowMany === '' || HowMany === 0) || hasClickedContinue && diningRoomSize === '' && showDiningRoomSize ? 'alert' : ''}`}>
                        <div>

                            <input type="checkbox" id="diningRoom" checked={showDiningRoomSize} name="diningRoom" className='roomCheckbox' onChange={() => { setShowDiningRoomSize(!showDiningRoomSize); }} />
                            <label htmlFor="diningRoom">Dining Room</label>
                        </div>
                        {showDiningRoomSize && (
                            <SmallMedLar value={diningRoomSize} name={"diningRoomSize"} onSizeSelect={setDiningRoomSize} />
                        )}
                    </div>
                    <div className={`left roomList ${(!showMainBedroomSize &&
                        !showBedroom2Size &&
                        !showBedroom3Size &&
                        !showBedroom4Size &&
                        !showBedroom5Size &&
                        !showBedroom6Size &&
                        !showDiningRoomSize &&
                        !showHomeOfficeSize &&
                        !showKitchenSize &&
                        !showLivingRoomSize &&
                        !showOutdoorSize && hasClickedContinue && HowMany === '' || HowMany === 0) || hasClickedContinue && kitchenSize === '' && showKitchenSize ? 'alert' : ''}`}>
                        <div>

                            <input type="checkbox" id="kitchen" checked={showKitchenSize} name="kitchen" className='roomCheckbox' onChange={() => { setShowKitchenSize(!showKitchenSize); }} />
                            <label htmlFor="kitchen">Kitchen</label>
                        </div>
                        {showKitchenSize && (
                            <SmallMedLar value={kitchenSize} name={"kitchenSize"} onSizeSelect={setKitchenSize} />
                        )}
                    </div>
                    <div className={`left roomList ${(!showMainBedroomSize &&
                        !showBedroom2Size &&
                        !showBedroom3Size &&
                        !showBedroom4Size &&
                        !showBedroom5Size &&
                        !showBedroom6Size &&
                        !showDiningRoomSize &&
                        !showHomeOfficeSize &&
                        !showKitchenSize &&
                        !showLivingRoomSize &&
                        !showOutdoorSize && hasClickedContinue && HowMany === '' || HowMany === 0) || hasClickedContinue && homeOfficeSize === '' && showHomeOfficeSize ? 'alert' : ''}`}>
                        <div>

                            <input type="checkbox" id="homeoffice" checked={showHomeOfficeSize} name="homeoffice" className='roomCheckbox' onChange={() => { setHomeOfficeSize(!showHomeOfficeSize); }} />
                            <label htmlFor="homeoffice">Home Office</label>
                        </div>{showHomeOfficeSize && (
                            <SmallMedLar value={homeOfficeSize} name={"homeofficeSize"} onSizeSelect={setHomeOfficeSize} />
                        )}
                    </div>
                    <div className={`left roomList ${(!showMainBedroomSize &&
                        !showBedroom2Size &&
                        !showBedroom3Size &&
                        !showBedroom4Size &&
                        !showBedroom5Size &&
                        !showBedroom6Size &&
                        !showDiningRoomSize &&
                        !showHomeOfficeSize &&
                        !showKitchenSize &&
                        !showLivingRoomSize &&
                        !showOutdoorSize && hasClickedContinue && HowMany === '' || HowMany === 0) || hasClickedContinue && outdoorSize === '' && showOutdoorSize ? 'alert' : ''}`}>
                        <div>

                            <input type="checkbox" id="outdoorSpace" checked={showOutdoorSize} name="outdoorSpace" className='roomCheckbox' onChange={() => { setOutdoorSize(!showOutdoorSize); }} />
                            <label htmlFor="outdoorSpace">Outdoor space</label>
                        </div>
                        {showOutdoorSize && (
                            <SmallMedLar value={outdoorSize} name={"outdoorSpaceSize"} onSizeSelect={setOutdoorSize} />
                        )}

                    </div>

                    <div className='left'>                    {!(showMainBedroomSize && bedSize === '') &&
                        !(showBedroom2Size && bed2Size === '') &&
                        !(showBedroom3Size && bed3Size === '') &&
                        !(showBedroom4Size && bed4Size === '') &&
                        !(showBedroom5Size && bed5Size === '') &&
                        !(showBedroom6Size && bed6Size === '') &&
                        !(showDiningRoomSize && diningRoomSize === '') &&
                        !(showHomeOfficeSize && homeOfficeSize === '') &&
                        !(showKitchenSize && kitchenSize === '') &&
                        !(showLivingRoomSize && livingRoomSize === '') &&
                        !(showOutdoorSize && outdoorSize === '') &&
                        (outdoorSize === '' && homeOfficeSize === '' && kitchenSize === '' && diningRoomSize === '' && livingRoomSize === '' && bed6Size === '' && bed5Size === '' && bed4Size === '' && bed3Size === '' && bed2Size === '' && bedSize === '') &&
                        hasClickedContinue && (HowMany === '' || HowMany === 0) && <p>Please select at least one room and its size</p>}

                        {!(showMainBedroomSize && bedSize === '') &&
                            !(showBedroom2Size && bed2Size === '') &&
                            !(showBedroom3Size && bed3Size === '') &&
                            !(showBedroom4Size && bed4Size === '') &&
                            !(showBedroom5Size && bed5Size === '') &&
                            !(showBedroom6Size && bed6Size === '') &&
                            !(showDiningRoomSize && diningRoomSize === '') &&
                            !(showHomeOfficeSize && homeOfficeSize === '') &&
                            !(showKitchenSize && kitchenSize === '') &&
                            !(showLivingRoomSize && livingRoomSize === '') &&
                            !(showOutdoorSize && outdoorSize === '') &&
                            (outdoorSize === '' && homeOfficeSize === '' && kitchenSize === '' && diningRoomSize === '' && livingRoomSize === '' && bed6Size === '' && bed5Size === '' && bed4Size === '' && bed3Size === '' && bed2Size === '' && bedSize === '') &&
                            hasClickedContinue && HowMany > 0 && <p>Please select at least the bedrooms and their sizes</p>}

                        {((showMainBedroomSize && bedSize === '') ||
                            (showBedroom2Size && bed2Size === '') ||
                            (showBedroom3Size && bed3Size === '') ||
                            (showBedroom4Size && bed4Size === '') ||
                            (showBedroom5Size && bed5Size === '') ||
                            (showBedroom6Size && bed6Size === '') ||
                            (showDiningRoomSize && diningRoomSize === '') ||
                            (showHomeOfficeSize && homeOfficeSize === '') ||
                            (showKitchenSize && kitchenSize === '') ||
                            (showLivingRoomSize && livingRoomSize === '') ||
                            (showOutdoorSize && outdoorSize === '')) && hasClickedContinue && <p>Please select the room size</p>}</div>




                </div>
                <div className='optionBox right'>
                    <h2>Room Size Description</h2>

                    <div dangerouslySetInnerHTML={{ __html: options[currentOption] }} />
                    <button onClick={handlePrevious}>Previous</button> <br />
                    <button onClick={handleNext}>Next</button>
                </div>
            </div>
            <div className='container row align-middle'>
                <button onClick={() => returnToPrevious('common-length')} className='btn-tertiary'>Back</button>
                <button onClick={() => determineContinue('long-rooms')} className={allowContinue ? 'btn-primary' : 'btn-tertiary'}>Continue</button>
            </div>

        </div>
    );
};