export default function ShortPackages({ handleChange, changeStep, CommonLengthData }) {
    return (


        <div className='section'>

            <div className='stepOne container col' >
                <div className="stepTitle">2. Fill in how soon and for how long the rental services will be required </div>
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
                        <p>This new home will be functional with essential furniture. Decor is minimal as this option focuses on functions primarily.</p>
                        <h3>Premium:</h3>
                        <p>Your home will be fully decorated with accessories like throws, pillows and wall arts for all the rooms. Imagine the designs you see in a magazine.</p>
                    </div>
                </div>
                <div className='container row align-middle'>
                    <button onClick={() => changeStep('common-length')} className='btn-tertiary'>Back</button>
                    <button onClick={() => changeStep('common-personal-info')} className='btn-tertiary'>Continue</button>
                </div>
            </div>
        </div>


    )
}