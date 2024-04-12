

export default function CommonPersonalInfo({ changeStep, CommonLengthData }) {
    const LongOrShortForm = () => { CommonLengthData.length > 10 ? changeStep('long-living-details') : changeStep('short-packages') }
    return (
        <div className="section">
            <div className='stepFour' >
                <div className="stepTitle">{CommonLengthData.length < 10 ? "Step 3" : "Step 5"}</div>

                <div className='step startCol'>

                    <input type="text" id="name" data-testid="name-input" name="name" placeholder='Name' className='input' />

                    <input type="text" id="email" data-testid="email-input" name="email" placeholder='Email' className='input' />

                    <input type="text" id="phone" name="phone" placeholder='Phone' className='input' />

                    <input type="text" id="message" name="message" placeholder='Message' className='input' />
                </div>
                <div className='container row align-middle'>
                    <button onClick={() => LongOrShortForm()} className='btn-tertiary'>Back</button>
                    <button onClick={() => changeStep('common-submit')} className='btn-tertiary'>Continue</button>
                </div>
            </div>
        </div>

    )

}