import React from 'react';

export default function CustomerReviews() {
    return (
        <div className='section' style={{ overflow: 'hidden' }}>
            <h2 style={{ textAlign: 'left' }}>Customer Reviews</h2>
            <div className="row">
                <div className="col-md-4 px-4" style={{ marginBottom: '20px', overflow: 'hidden' }}>
                    <div className="review-box" style={{ backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '10px', width: '90%', height: '100%' }}>
                        <div style={{ textAlign: 'left' }}>
                            <p style={{ fontSize: '2.0em', maxWidth: '100%', overflowWrap: 'break-word' }}>"</p>
                        </div>
                        <div className='review-left' style={{ textAlign: 'left' }}>
                            <p style={{ whiteSpace: 'pre-line', marginBottom: '8px', maxWidth: '100%', overflowWrap: 'break-word' }}>The service provided was exceptional! Their professionalism and product range exceeded my expectations.</p>
                            <p style={{ whiteSpace: 'pre-line', marginBottom: '8px', maxWidth: '100%', overflowWrap: 'break-word' }}>The equipment was top-notch and their customer service outstanding.</p>
                            <p style={{ whiteSpace: 'pre-line', maxWidth: '100%', overflowWrap: 'break-word' }}>Highly recommend!</p>
                            <p style={{ whiteSpace: 'pre-line', maxWidth: '100%', overflowWrap: 'break-word' }}>- Jenna</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 px-4" style={{ marginBottom: '20px', overflow: 'hidden' }}>
                    <div className="review-box" style={{ backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '10px', width: '90%', height: '100%' }}>
                        <div style={{ textAlign: 'left' }}>
                            <p style={{ fontSize: '2.0em', maxWidth: '100%', overflowWrap: 'break-word' }}>"</p>
                        </div>
                        <div className='review-center' style={{ textAlign: 'left' }}>
                            <p style={{ whiteSpace: 'pre-line', marginBottom: '8px', maxWidth: '100%', overflowWrap: 'break-word' }}>Had an amazing experience! Their promptness and attention to detail were impressive.</p>
                            <p style={{ whiteSpace: 'pre-line', marginBottom: '8px', maxWidth: '100%', overflowWrap: 'break-word' }}>The equipment quality was top-notch, and their staff was friendly and helpful.</p>
                            <p style={{ whiteSpace: 'pre-line', maxWidth: '100%', overflowWrap: 'break-word' }}>Will definitely use them again!</p>
                            <p style={{ whiteSpace: 'pre-line', maxWidth: '100%', overflowWrap: 'break-word' }}>- Jack</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 px-4" style={{ marginBottom: '20px', overflow: 'hidden' }}>
                    <div className="review-box" style={{ backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '10px', width: '90%', height: '100%' }}>
                        <div style={{ textAlign: 'left' }}>
                            <p style={{ fontSize: '2.0em', maxWidth: '100%', overflowWrap: 'break-word' }}>"</p>
                        </div>
                        <div className='review-right' style={{ textAlign: 'left' }}>
                            <p style={{ whiteSpace: 'pre-line', marginBottom: '8px', maxWidth: '100%', overflowWrap: 'break-word' }}>The service went above and beyond! Their professionalism and dedication to customer satisfaction were remarkable.</p>
                            <p style={{ whiteSpace: 'pre-line', marginBottom: '8px', maxWidth: '100%', overflowWrap: 'break-word' }}>The equipment was in excellent condition, and their service was outstanding.</p>
                            <p style={{ whiteSpace: 'pre-line', maxWidth: '100%', overflowWrap: 'break-word' }}>Highly recommended!</p>
                            <p style={{ whiteSpace: 'pre-line', maxWidth: '100%', overflowWrap: 'break-word' }}>- Will</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
