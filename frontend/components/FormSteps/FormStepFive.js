

export default function FormStepFive({ changeStep }) {
    return (
        <div className='section'>
            <div className='submitPage' style={{ backgroundColor: "orange" }}>
                <div className="stepTitle">5. Your budget</div>
                <div className='step'>
                    <h2>Your budget is: </h2>
                    <h1>£2000</h1>
                </div>
                <div className='container row align-middle'>
                    <button onClick={() => changeStep(6)} className='btn-tertiary'>Continue</button>
                </div>
            </div>
        </div>
    )

}