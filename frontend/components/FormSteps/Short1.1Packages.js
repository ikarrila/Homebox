import Package from "../Packages";
import { useState, useEffect, use } from "react";

export default function ShortPackages({ handleChange, changeStep, setShortPackagesData, ShortPackagesData }) {
    const [selectedValue, setSelectedValue] = useState(false);
    const [clicked, setClicked] = useState(false);
    useEffect(() => {
        if (ShortPackagesData.standard || ShortPackagesData.premium) {
            setSelectedValue(true);
        }
    }, [ShortPackagesData]);

    const continueForm = () => {
        if (selectedValue) {
            changeStep('common-personal-info');
        }
        else {
            setClicked(true);
        }
    };
    return (
        <div className='section col' >
            <Package setShortPackagesData={setShortPackagesData} ShortPackagesData={ShortPackagesData} clicked={clicked} selectedValue={selectedValue} />
            {clicked && !selectedValue && <p className='error'>Please select a package</p>}
            <div className='container row align-middle'>
                <button onClick={() => changeStep('common-length')} className='btn-tertiary'>Back</button>
                <button onClick={() => continueForm()} className={ShortPackagesData.standard || ShortPackagesData.premium ? 'btn-primary' : 'btn-tertiary'}>Continue</button>
            </div>
        </div>
    );
}

