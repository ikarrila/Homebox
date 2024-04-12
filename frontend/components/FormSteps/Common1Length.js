
export default function CommonLength({ changeStep, setCommonLengthData, CommonLengthData }) {

    //Determine which form to go to based on the length of the rental
    const LongOrShortForm = () => { CommonLengthData.length > 10 ? changeStep('long-property') : changeStep('short-packages') }
    //FUNCTION TO HANDLE INPUT CHANGE. in input field put name and value such as name="length" value={CommonLengthData.length}

    const determineContinue = () => {
        if (!CommonLengthData.length || CommonLengthData.length === 0) {
            return (
                <div className="error">Please select a rental length</div>
            )
        }
        else {
            LongOrShortForm()
        }
    }

    const handleChange = (e) => {
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
                        <select id="rentalLength" className="input" name="length" value={CommonLengthData.length} onChange={handleChange}>
                            <option value={0} >Select rental length</option>
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
                <div className="right">
                    <p>We will calculate the potential cost based on the duration and size of apartment to be furnished.</p>
                    <p>Give us more information to get an even more accurate evaluation!</p>
                </div>
            </div>

            <div className='container row align-middle'>
                <button onClick={() => changeStep('common-start')} className='btn-tertiary'>Back</button>
                <button onClick={() => determineContinue()} className='btn-tertiary'>Continue</button>
            </div>
        </div>


    )

}