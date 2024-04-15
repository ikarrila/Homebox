import React, { useState } from 'react';

export default function LongLivingDetails({ changeStep }) {

    const [homeLink, setLink] = useState({ url: '' });
    const handleLinkChange = (e) => {
        const updatedLink = {
            ...homeLink,
            [e.target.name]: e.target.value
        };
        setLink(updatedLink);
    };

    const [livingDetails, setDetails] = useState({ message: '' });
    const handleDetailsChange = (e) => {
        const updatedDetails = {
            ...livingDetails,
            [e.target.name]: e.target.value
        };
        setDetails(updatedDetails);

    };
    return (
        <div className="section">
            <div className='long-living-details' >
                <div className="stepTitle">4. Home and living details</div>
                <div className='step'>
                    <div className='left'>
                        <div className='left'>
                            <h4>Home details</h4>
                            <label htmlFor="link" className="block text-sm font-medium text-gray-700">
                                Link to a floor plan or house listing
                            </label>
                            <input type="url" name="url" id="url" placeholder="Enter link" className="input" value={homeLink.url} onChange={handleLinkChange} />
                        </div>
                        <div className='left'>
                            <h4>Living details</h4>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Give us any relevant additional information about your home and living situation.
                            </label>
                            <input type="text" name="message" id="message" placeholder="Enter information" className="input" value={livingDetails.message} onChange={handleDetailsChange} />
                        </div>
                    </div>
                    <div className="right">
                        <p>Give us more information to get an even more accurate evaluation!</p>
                    </div>
                </div>
                <div className='container row align-middle'>
                    <button onClick={() => changeStep('long-rooms')} className='btn-tertiary'>Back</button>
                    <button onClick={() => changeStep('common-personal-info')} className='btn-tertiary'>Continue</button>
                </div>
            </div>
        </div>);
};
