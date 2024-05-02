import React from 'react';
import Link from 'next/link';
import '/styles/styles.css';

export default function GetAnEvaluation() {
    return (
        <div className="section col" style={{ backgroundImage: `url(/pictures/douglas-sheppard-9rYfG8sWRVo-unsplash.jpg)`, backgroundSize: '100% auto' }}>
            <div className="col-md-6">
                <div style={{ textAlign: 'center' }}>
                    <h2>Leave the furnishing to us</h2>
                    <div className="max-w-xs">
                        <p className="text-center">
                            Transform your commercial or rental space effortlessly with our comprehensive turnkey furnishing solutions
                        </p>
                    </div>
                    <Link href="/evaluation">
                        <div className="flex justify-start">
                            <button className="btn-primary">
                                Get started
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
