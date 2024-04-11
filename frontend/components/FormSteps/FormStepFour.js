

export default function FormStepFour({ changeStep }) {
    return (
        <div className="section">
            <div className='stepFour' >
                <div className="stepTitle">4. Submit your results to view your budget</div>

                <div className='step startCol'>

                    <input type="text" id="name" data-testid="name-input" name="name" placeholder='Name' className='input' />

                    <input type="text" id="email" data-testid="email-input" name="email" placeholder='Email' className='input' />

                    <input type="text" id="phone" name="phone" placeholder='Phone' className='input' />

                    <input type="text" id="message" name="message" placeholder='Message' className='input' />
                </div>
                <div className='container row align-middle'>
                    <button onClick={() => changeStep(3)} className='btn-tertiary'>Back</button>
                    <button onClick={() => changeStep(5)} className='btn-tertiary'>Continue</button>
                </div>
            </div>
        </div>

    )

}