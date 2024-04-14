import { useState } from 'react';
import StandardImg from "../../../pictures/di_an_h-g_8MrEZAvyE-unsplash.jpg";
import PremiumImg from "../../../pictures/kenny-eliason-Wp7t4cWN-68-unsplash.jpg";

import Image from 'next/image';

export default function LongRooms({ changeStep }) {
    // State to track the selected value from the dropdown
    const [selectedValue, setSelectedValue] = useState("");

    // Function to handle change in the dropdown value
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    // Conditional rendering based on selected value
    const renderImage = () => {
        if (selectedValue === "1") {
            return <Image src={StandardImg} alt="Standard" className='image-container' />;
        } else if (selectedValue === "2") {
            return <Image src={PremiumImg} alt="Premium" className='image-container' />;
        } else {
            return <div className='card-container'>
                <img src="../../../pictures/di_an_h-g_8MrEZAvyE-unsplash.jpg" />
                <img src="../../../pictures/kenny-eliason-Wp7t4cWN-68-unsplash.jpg" />
            </div>;
        }
    };

    return (
        <div className="section">
            <div className='long-living-details' >
                <div className="stepTitle dark">3. Select your level of furnishing needs</div>
                <div className='step dark fixedHeight'>
                    <div className='left'>
                        {renderImage()}</div>
                    <div className='right'>
                        <div>
                            <select className='selector' defaultValue="" id='furnishingSelector' onChange={handleSelectChange}>
                                <option value="" disabled>Select...</option>
                                <option value="1">Standard</option>
                                <option value="2">Premium</option>
                            </select></div>
                        <div>
                            <h3>Standard:</h3>
                            <p>This new home will be functional with essential furniture. Decor is minimal as this option focuses on functions primarily.</p>
                            <h3>Premium:</h3>
                            <p>Your home will be fully decorated with accessories like throws, pillows and wall arts for all the rooms. Imagine the designs you see in a magazine.</p>   </div>
                    </div>
                </div>
                <div className='container row align-middle'>
                    <button onClick={() => changeStep('long-property')} className='btn-tertiary'>Back</button>
                    <button onClick={() => changeStep('long-living-details')} className='btn-tertiary'>Continue</button>
                </div>
            </div>
        </div>
    );
}
