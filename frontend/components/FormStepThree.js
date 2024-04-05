

export default function FormStepThree({ changeStep }) {
    return (

        <div className="section">
            <div className='stepThree' style={{ backgroundColor: "red" }}>
                <div className="stepTitle dark">3. Select your level of furnishing needs</div>
                <div className='step dark'>
                    <div className='left'>
                        <select className='selector' defaultValue="" id='furnishingSelector'>
                            <option value="" disabled selected>Select...</option>
                            <option value="1">Standard</option>
                            <option value="2">Premium</option>
                        </select>
                    </div>
                    <div className='right'>
                        <h3>Standard:</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros in enim cursus, a finibus lorem pretium.</p>
                        <h3>Premium:</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros in enim cursus, a finibus lorem pretium.</p>
                    </div>
                </div>
                <div className='container row align-middle'>
                    <button onClick={() => changeStep(4)} className='btn-tertiary'>Continue</button>
                </div>
            </div>
        </div>


    )

}