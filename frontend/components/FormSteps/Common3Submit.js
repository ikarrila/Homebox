

export default function CommonSubmit({ changeStep, CommonLengthData }) {
    const lengthParse = CommonLengthData.length > 12 ? '12+ months' : `${CommonLengthData.length} months`

    return (
        <div className='section'>
            <div className='submitPage' >
                <div className="stepTitle ">{CommonLengthData.length < 10 ? "Step 4" : "Step 6"}</div>

                <div className='step'>
                    <p>Length of rental: {lengthParse}</p>
                </div>

                <div className='step'>
                    <h2>Your budget is: </h2>
                    <h1>£2000</h1>
                </div>

                <div className='container row align-middle'>
                    <button onClick={() => changeStep('common-personal-info')} className='btn-tertiary'>Back</button>
                    <button onClick={() => changeStep('common-thanks')} className='btn-tertiary'>Send</button>
                </div>
            </div>
        </div>
    )

}