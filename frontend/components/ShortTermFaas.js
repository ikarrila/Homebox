import React from 'react';
import Link from 'next/link';
import '/styles/styles.css';

export default function ShortTermFaas() {
    return (
        <div className="col-md-6">
            <div>
                <h2>Short-Term Rental</h2>
                <div className="max-w-xs">
                    <p className="text-center" style={{ textAlign: 'left' }}>
                        From 3 to 10 months
                    </p>
                    <p className="text-center for-bp-textbox" style={{ textAlign: 'left' }}>
                        Our ready-to-move-in packages contain all the furniture that you could possibly need. From mattresses to household items.
                        You will feel right at home from the moment you enter your new space.
                    </p>
                </div>
                <Link href="/FAAS/rental_services/short_term">
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