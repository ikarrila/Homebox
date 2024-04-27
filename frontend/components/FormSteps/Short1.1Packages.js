import Package from "../Packages"
import { useState, useEffect, use } from "react"
import CostEvaluationDiv from "../CostEvaluationDiv"
export default function ShortPackages({ handleChange, changeStep, setShortPackagesData, ShortPackagesData, setPriceOfTheBill, priceOfTheBill }) {
    const [selectedValue, setSelectedValue] = useState(false);
    const [clicked, setClicked] = useState(false);
    useEffect(() => {
        if (ShortPackagesData.standard || ShortPackagesData.premium) {
            setSelectedValue(true);
        }
    }, [ShortPackagesData, setShortPackagesData, priceOfTheBill])

    const continueForm = () => {
        if (selectedValue) {
            changeStep('common-personal-info');
        }
        else {
            setClicked(true);
        }
    }
    const goBackAndReset = () => {
        setShortPackagesData({})
        setPriceOfTheBill(0)
        changeStep('common-length')
    }
    return (
        <div className='section row max-w-full' >
            <div style={{ width: "300%" }} className="container ">
                <Package setShortPackagesData={setShortPackagesData} ShortPackagesData={ShortPackagesData} />
                {clicked && !selectedValue && <p className='error'>Please select a package</p>}
            </div>

            {/* empty for spacing*/}
            <div className="container">
                <div style={{ position: "fixed", alignContent: "right", left: "70%", top: "50%" }} className='col flex  '>
                    <div className='col fixed w-24'>
                        <CostEvaluationDiv cost={priceOfTheBill} />
                        <br></br>
                    </div>
                    <div className="row">
                        <button onClick={() => goBackAndReset()} style={{ width: "160px" }} className='btn-tertiary'>Back</button>
                        <button onClick={() => continueForm()} style={{ width: "160px" }} className={ShortPackagesData.standard || ShortPackagesData.premium ? 'btn-primary' : 'btn-tertiary'}>Continue</button>
                    </div>
                </div>
            </div>
            {/* floating bar on right*/}

        </div >
