export default function LongRooms({ handleChange, changeStep }) {
    return (

        <div className="section">
            <div className='long-living-details' >
                <div className="stepTitle dark">3. title</div>
                <div className='step dark'>
                    <div> JUU </div>
                </div>
                <div className='container row align-middle'>
                    <button onClick={() => changeStep('long-property')} className='btn-tertiary'>Back</button>
                    <button onClick={() => changeStep('long-living-details')} className='btn-tertiary'>Continue</button>
                </div>
            </div>
        </div>)
}
