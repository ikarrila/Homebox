export default function FormStepOne({ handlePropertyTypeChange, changeStep }) {
    return (
        <div className='section'>
            <div className='stepOne container col' style={{ backgroundColor: "green" }}>
                <div className="stepTitle">1. Fill in your property details and location </div>
                <div className='step'>
                    <div className='left'>
                        <p> (Mandatory) </p>
                        <select className='selector' defaultValue="" onChange={handlePropertyTypeChange}>
                            <option value="" disabled>Select property type...</option>
                            <option value="1">Studio Apartment</option>
                            <option value="2">One Bedroom</option>
                            <option value="3">Two Bedroom</option>
                            <option value="4">Three Bedroom</option>
                            <option value="5">Four Bedroom</option>
                            <option value="6">Five Bedroom</option>
                            <option value="7">Six Bedroom</option>
                        </select>

                        <div className='left'>
                            <p> (Optional) </p>
                            <input type="text" placeholder='Address' name="location" className='input' />
                            <p> (Optional) </p>
                            <input type="text" placeholder='Size (sqm)' name="size" className='input' />
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