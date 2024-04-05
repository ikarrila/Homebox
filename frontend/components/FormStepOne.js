export default function FormStepOne({ handlePropertyTypeChange, changeStep }) {
    return (
        <div className='section'>
            <div className='stepOne container col' style={{ backgroundColor: "green" }}>
                <div className="stepTitle">1. Select your property type & location </div>
                <div className='step'>
                    <div className='left'>
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
                    </div>
                    <div className='right'>
                        <input type="text" placeholder='Location' name="location" className='input' />
                    </div>
                </div>
                <button onClick={() => changeStep(2)} className='btn-tertiary'>Continue</button>
            </div>
        </div>
    )
}