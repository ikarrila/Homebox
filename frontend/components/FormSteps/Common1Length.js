import { useState } from "react"
export default function CommonLength({ changeStep, setCommonLengthData, CommonLengthData }) {
    //State to determine if the user may pass to the next step
    const [unSelected, setUnSelected] = useState(false)
    //Determine which form to go to based on the length of the rental
    const LongOrShortForm = () => { CommonLengthData.length > 10 ? changeStep('long-property') : changeStep('short-packages') }

    //If the length is not selected, the user cannot continue
    const determineContinue = () => {
        if (!CommonLengthData.length || CommonLengthData.length === 0) {
            setUnSelected(true)
        }
        else {
            LongOrShortForm()
        }
    }

    //FUNCTION TO HANDLE INPUT CHANGE. in input field put name and value such as name="length" value={CommonLengthData.length}
    const handleChange = (e) => {
        //Updates the state depending on name with the value in the value field
        const updatedState = {
            ...CommonLengthData,
            [e.target.name]: e.target.value
        };
        setCommonLengthData(updatedState);
    }


    return (
        <div className="section">
            <div className="stepTitle">1. Length of Rental</div>
            <div className='step'>
                <div className='left'>
                    <div className="left">
                        <label htmlFor="urgency" className="block text-sm font-medium text-gray-700">
                            How soon would the rental services be required?
                        </label>
                        <textarea id="urgency" name="message" value={CommonLengthData.message} onChange={handleChange} placeholder="Your answer" className="input"></textarea>
                    </div>
                    <div className="left">
                        <label htmlFor="rentalLength" className="block text-sm font-medium text-gray-700">
                            Rental Length
                        </label>
                        <div className="container col ">
                            <select id="rentalLength" className="input " name="length" value={CommonLengthData.length} onChange={handleChange}
                                style={unSelected ? { backgroundColor: "#f5f5f5" } : {}} >
                                <option value={0} disabled selected>Select rental length</option>
                                <option value={1}>1 month</option>
                                <option value={2}>2 months</option>
                                <option value={3}>3 months</option>
                                <option value={4}>4 months</option>
                                <option value={5}>5 months</option>
                                <option value={6}>6 months</option>
                                <option value={7}>7 months</option>
                                <option value={8}>8 months</option>
                                <option value={9}>9 months</option>
                                <option value={10}>10 months</option>
                                <option value={11}>11 months</option>
                                <option value={12}>12 months</option>
                                <option value={13}>More than a year</option>
                            </select>

                        </div>

                    </div>
                    {(CommonLengthData.length > 10) &&
                        <div className="left" >
                            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                                What is the budget for the rental?
                            </label>
                            <textarea id="budget" type="number" name="budget" value={CommonLengthData.budget} onChange={handleChange} placeholder="Your answer" className="input" >
                            </textarea>
                        </div>
                    }
                </div>

                <div className="right">
                    <p>We will calculate the potential cost based on the duration and size of apartment to be furnished.</p>
                    <p>Give us more information to get an even more accurate evaluation!</p>
                </div>
            </div>
            <div className='container row align-middle'>
                <button onClick={() => changeStep('common-start')} className='btn-tertiary'> Back</button>
                <button onClick={() => determineContinue()} className={CommonLengthData.length ? 'btn-primary' : 'btn-tertiary'}>Continue</button>
            </div>
        </div >


    )

}