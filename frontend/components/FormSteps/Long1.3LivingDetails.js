import React, { useState, useEffect, use } from 'react';

export default function LongLivingDetails({ changeStep, LongLivingDetailsData, setLongLivingDetailsData, priceOfTheBill }) {
    const [url, setUrl] = useState("");
    const [info, setInfo] = useState("");

    useEffect(() => {
        if (LongLivingDetailsData.homeLink) {
            setUrl(LongLivingDetailsData.homeLink);
        }
        if (LongLivingDetailsData.livingDetails) {
            setInfo(LongLivingDetailsData.livingDetails);
        }
    }, [LongLivingDetailsData, setLongLivingDetailsData]);

    const handleChange = (event) => {
        if (event.target.name === 'homeLink') {
            setUrl(event.target.value);
            setLongLivingDetailsData(prevData => ({ ...prevData, homeLink: event.target.value }));
        }
        if (event.target.name === 'livingDetails') {
            setInfo(event.target.value);
            setLongLivingDetailsData(prevData => ({ ...prevData, livingDetails: event.target.value }));
        }
    };

    return (
        <div className="section">
            <div className='long-living-details' >
                <div className="stepTitle">4. Home and living details</div>
                <div className='step'>
                    <div className='left'>
                        <div className='left'>
                            <h4>Home details</h4>
                            <label htmlFor="link">
                                Link to a floor plan or house listing
                            </label>
                            <input type="url" name="homeLink" id="homeLink" placeholder="Enter link" className="input" value={url} onChange={handleChange} />
                        </div>
                        <div className='left'>
                            <h4>Living details</h4>
                            <label htmlFor="message">
                                Give us any relevant additional information about your home and living situation.
                            </label>
                            <input type="text" name="livingDetails" id="livingDetails" placeholder="Enter information" className="input" value={info} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="right">
                        <p>Give us more information to get an even more accurate evaluation!</p>
                    </div>
                </div>
                <div className='container row'>
                    <button onClick={() => changeStep('long-rooms')} className='btn-tertiary w-160'>Back</button>
                    <button onClick={() => changeStep('common-personal-info')} className='btn-primary w-160'>Continue</button>
                </div>
            </div>
        </div>);
};
