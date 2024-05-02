import React from 'react';
import Link from 'next/link';
import '/styles/styles.css';

export default function LongTermFaas() {
    return (
        <div className="col-md-6">
            <div style={{ backgroundColor: '#f2f2f2', padding: '10px', borderRadius: '10px', width: '95%', maxHeight: '320px', overflow: 'hidden' }}>
                <h2>Long-Term Rental</h2>
                <div>
                    <p>
                        From 11 months to 3 years
                    </p>
                    <p className="for-bp-textbox textLeft">
                        For longer furniture rentals, you can choose from a large selection of furniture in our online catalogue. On top we offer household items and customized mattresses and outdoor furniture.
                        Create your dream home with our interior designers!
                    </p>
                </div>
                <Link href="/FAAS/rental_services/long_term">
                    <div className="flex">
                        <button className="btn-primary">
                            Learn more
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
}
