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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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