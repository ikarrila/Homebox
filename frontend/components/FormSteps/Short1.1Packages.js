import Package from "../Packages"
import { useState, useEffect, use } from "react"
import CostEvaluationDiv from "../CostEvaluationDiv"
export default function ShortPackages({ handleChange, changeStep, setShortPackagesData, ShortPackagesData, priceOfTheBill }) {
    const [selectedValue, setSelectedValue] = useState(false);
    const [clicked, setClicked] = useState(false);
    useEffect(() => {
        if (ShortPackagesData.standard || ShortPackagesData.premium) {
            setSelectedValue(true)
        }
    }, [ShortPackagesData])

    const continueForm = () => {
        if (selectedValue) {
            changeStep('common-personal-info')
        }
        else {
            setClicked(true)
        }
    }
    return (
        <div className='section row' >
            <div>
                <Package setShortPackagesData={setShortPackagesData} ShortPackagesData={ShortPackagesData} />
                {clicked && !selectedValue && <p className='error'>Please select a package</p>}
            </div>
            <div className='container col align-middle'>
                <div className="right">
                    <CostEvaluationDiv cost={priceOfTheBill} />
                    <br></br>
                </div>
                <div className="row">
                    <button onClick={() => changeStep('common-length')} style={{ width: "160px" }} className='btn-tertiary'>Back</button>
                    <button onClick={() => continueForm()} style={{ width: "160px" }} className={ShortPackagesData.standard || ShortPackagesData.premium ? 'btn-primary' : 'btn-tertiary'}>Continue</button>
                </div>
            </div>
        </div>



    )
}