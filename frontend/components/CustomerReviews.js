import React from 'react';
import '/styles/styles.css';

export default function CustomerReviews() {
    return (
        <div className='section'>
            <h2 style={{ textAlign: 'center' }}>Customer Reviews</h2>
            <div className="row">
                <div className="col-md-4">
                    <div style={{ textAlign: 'center' }}>
                        <p>*****</p>
                    </div>
                    <div className='review-left' style={{ textAlign: 'center' }}>
                        <p>The service provided was exceptional! Their professionalism and product range exceeded my expectations. The equipment was top-notch and their customer service outstanding. Highly recommend!</p>
                        <p>- James</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div style={{ textAlign: 'center' }}>
                        <p>*****</p>
                    </div>
                    <div className='review-center' style={{ textAlign: 'center' }}>
                        <p>Had an amazing experience! Their promptness and attention to detail were impressive. The equipment quality was top-notch, and their staff was friendly and helpful. Will definitely use them again!</p>
                        <p>- Anna</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div style={{ textAlign: 'center' }}>
                        <p>*****</p>
                    </div>
                    <div className='review-right' style={{ textAlign: 'center' }}>
                        <p>The service went above and beyond! Their professionalism and dedication to customer satisfaction were remarkable. The equipment was in excellent condition, and their service was outstanding. Highly recommended!</p>
                        <p>- Jack</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
