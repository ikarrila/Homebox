import { useState, useEffect } from 'react';
import StandardImg from "../../../pictures/di_an_h-g_8MrEZAvyE-unsplash.jpg";
import PremiumImg from "../../../pictures/kenny-eliason-Wp7t4cWN-68-unsplash.jpg";

import Image from 'next/image';

export default function LongRooms({ changeStep, setLongRoomsData, LongRoomsData, priceOfTheBill }) {
    // State to track the selected value from the dropdown
    const [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        if (LongRoomsData) {
            setSelectedValue(LongRoomsData);
        }
    }
        , []);
    //State to determine if the user may pass to the next step
    const [unSelected, setUnSelected] = useState(false);

    const determineContinue = () => {
        if (selectedValue === "") {
            setUnSelected(true);
        }
        else {
            setUnSelected(false);
            changeStep('long-living-details');
        }
    };

    // Function to handle change in the dropdown value
    const handleSelectChange = (event) => {
        setUnSelected(false);
        setSelectedValue(event.target.value);
        setLongRoomsData(event.target.value);
    };

    // Conditional rendering based on selected value
    const renderImage = () => {
        if (selectedValue === "Standard") {
            return <Image src={StandardImg} alt="Standard" className='image-container' />;
        } else if (selectedValue === "Premium") {
            return <Image src={PremiumImg} alt="Premium" className='image-container' />;
        } else {
            return <div className='card-container2'>
                <img src="../../../pictures/di_an_h-g_8MrEZAvyE-unsplash.jpg" />
                <img src="../../../pictures/kenny-eliason-Wp7t4cWN-68-unsplash.jpg" />
            </div>;
        }
    };

    return (
        <div className="section ">
            <div className='long-living-details' >
                <div className="stepTitle">3. Select your level of furnishing needs</div>
                <div className='step fixedHeight container row'>
                    <div className='left'>
                        {renderImage()}</div>
                    <div className='right'>
                        <div>
                            <select className={`selector ${unSelected ? 'alert' : ''}`} value={LongRoomsData} defaultValue="" id='furnishingSelector' onChange={handleSelectChange} style={unSelected ? { backgroundColor: '#f5f5f5' } : {}}>
                                <option value="" disabled>Select...</option>
                                <option value="Standard">Standard</option>
                                <option value="Premium">Premium</option>
                            </select></div>
                        <div>
                            {unSelected && <p>Please select the level of furnishing needs</p>}
                            <h3>Standard:</h3>
                            <p>This new home will be functional with essential furniture. Decor is minimal as this option focuses on functions primarily.</p>
                            <h3>Premium:</h3>
                            <p>Your home will be fully decorated with accessories like throws, pillows and wall arts for all the rooms. Imagine the designs you see in a magazine.</p>   </div>


                    </div>

                </div>
                <div className='container row'>
                    <button onClick={() => changeStep('long-property')} className='btn-tertiary w-160'>Back</button>
                    <button onClick={() => determineContinue()} className={selectedValue ? 'btn-primary w-160' : 'btn-tertiary w-160'}>Continue</button>
                </div>
            </div>
        </div >
    );
}