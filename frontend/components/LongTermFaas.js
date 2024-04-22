import React from 'react';
import Link from 'next/link';
import '/styles/styles.css';

export default function LongTermFaas() {
    return (
        <div className="col-md-6">
            <div>
                <h2>Long-Term Rental</h2>
                <div className="max-w-xs">
                    <p className="text-center" style={{ textAlign: 'left' }}>
                        From 11 months to 3 years
                    </p>
                    <p className="text-center for-bp-textbox" style={{ textAlign: 'left' }}>
                        For longer furniture rentals, you can choose from a large selection of furniture in our online catalogue. On top we offer household items and customized mattresses and outdoor furniture.
                        Create your dream home with our interior designers!
                    </p>
                </div>
                <Link href="/FAAS/rental_services/long_term">
                    <div className="flex justify-start">
                        <button className="btn-primary">
                            Learn more
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
}