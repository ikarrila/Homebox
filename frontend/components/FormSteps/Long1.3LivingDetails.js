export default function LongLivingDetails({ handleChange, changeStep, CommonLengthData }) {
    return (

        <div className="section">
            <div className='long-living-details' >
                <div className="stepTitle dark">4. title</div>
                <div className='step dark'>
                    <div> JUU </div>
                </div>
                <div className='container row align-middle'>
                    <button onClick={() => changeStep('long-rooms')} className='btn-tertiary'>Back</button>
                    <button onClick={() => changeStep('common-personal-info')} className='btn-tertiary'>Continue</button>
                </div>
            </div>
        </div>)
}
