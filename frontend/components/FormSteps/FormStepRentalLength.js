export default function FormStepRentalLength({ handlePropertyTypeChange, changeStep }) {
    return (
        <div className='section'>
            <div className='stepOne container col' style={{ backgroundColor: "green" }}>
                <div className="stepTitle">1. Fill in how soon and for how long the rental services will be required </div>
                <div className='step'>
                    <div className='left'>
                        <div className="left">
                            <label htmlFor="urgency" className="block text-sm font-medium text-gray-700">
                                How soon would the rental services be required?
                            </label>
                            <textarea id="urgency" name="urgency" placeholder="Your answer" className="input"></textarea>
                        </div>

                        <div className="left">
                            <label htmlFor="rentalLength" className="block text-sm font-medium text-gray-700">
                                Rental Length
                            </label>
                            <select id="rentalLength" name="rentalLength" className="input">
                                <option value="" disabled>Select rental length</option>
                                <option value="1">1 month</option>
                                <option value="2">2 months</option>
                                <option value="2">3 months</option>
                                <option value="2">4 months</option>
                                <option value="2">5 months</option>
                                <option value="2">6 months</option>
                                <option value="2">7 months</option>
                                <option value="2">8 months</option>
                                <option value="2">9 months</option>
                                <option value="2">10 months</option>
                                <option value="2">11 months</option>
                                <option value="12">12 months</option>
                                <option value="more">More than a year</option>
                            </select>
                        </div>
                    </div>
                    <div className="right">
                        <p>We will calculate the potential cost based on the duration and size of apartment to be furnished.</p>
                        <p>Give us more information to get an even more accurate evaluation!</p>
                    </div>
                </div>
                <button onClick={() => changeStep(2)} className='btn-tertiary'>Continue</button>
            </div>
        </div>
    )
}