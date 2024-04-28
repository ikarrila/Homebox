import Package from "../Packages";
import { useState, useEffect, use } from "react";
import CostEvaluationDiv from "../CostEvaluationDiv";

export default function ShortPackages({ handleChange, changeStep, setShortPackagesData, ShortPackagesData, setPriceOfTheBill, priceOfTheBill }) {
    const [selectedValue, setSelectedValue] = useState(false);
    const [clicked, setClicked] = useState(false);
    useEffect(() => {
        if (ShortPackagesData.standard || ShortPackagesData.premium) {
            setSelectedValue(true);
        }
    }, [ShortPackagesData, setShortPackagesData, priceOfTheBill]);

    const continueForm = () => {
        if (selectedValue) {
            changeStep('common-personal-info');
        }
        else {
            setClicked(true);
        }
    };
    const goBackAndReset = () => {
        setShortPackagesData({});
        setPriceOfTheBill(0);
        changeStep('common-length');
    };
    return (
        <div className='section row' >
            <div className="container w-300">
                <Package setShortPackagesData={setShortPackagesData} ShortPackagesData={ShortPackagesData} clicked={clicked} selectedValue={selectedValue} />
                {clicked && !selectedValue && <p className='error center-text'>Please select a package</p>}
            </div>

            <div className="container">
                <div className='col flex sideContainer'>
                    <div className='col'>
                        <CostEvaluationDiv cost={priceOfTheBill} />
                        <br></br>
                    </div>
                    <div className="row">
                        <button onClick={() => goBackAndReset()} className='btn-tertiary w-160'>Back</button>
                        <button onClick={() => continueForm()} className={ShortPackagesData.standard || ShortPackagesData.premium ? 'btn-primary' : 'btn-tertiary w-160'}>Continue</button>
                    </div>
                </div>
            </div>
        </div >
    );
}