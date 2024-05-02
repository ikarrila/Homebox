import React from 'react';
import Link from 'next/link';
import '/styles/styles.css';

export default function ShortTermFaas() {
    return (
        <div className="col-md-6">
            <div style={{ backgroundColor: '#f2f2f2', padding: '10px', borderRadius: '10px', width: '95%', maxHeight: '320px', overflow: 'hidden' }}>
                <h2>Short-Term Rental</h2>
                <div>
                    <p>
                        From 3 to 10 months
                    </p>
                    <p className="for-bp-textbox textLeft">
                        Our ready-to-move-in packages contain all the furniture that you could possibly need. From mattresses to household items.
                        You will feel right at home from the moment you enter your new space.
                    </p>
                </div>
                <Link href="/FAAS/rental_services/short_term">
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
