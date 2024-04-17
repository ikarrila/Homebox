import React from 'react';
import '/styles/styles.css';

export default function Sustainability() {
    return (
        <div className="section col" style={{ textAlign: 'center' }}>
            <h2 className="font-bold">Sustainability</h2>
            <div className="container flex">
                <div className="w-1/2">
                    <p className="text-left mx-auto max-w-xs">
                        At our company, we are committed to sustainability and environmental responsibility. We are proud to power our operations with 100% renewable energy sources, reducing our carbon footprint and contributing to a cleaner, greener future. By choosing our services, you are supporting eco-friendly practices and helping to preserve our planet for future generations.
                    </p>
                </div>
                <div className="w-1/2" style={{ marginRight: '50px', marginBottom: '20px' }}>
                    <img style={{ objectFit: 'cover', maxWidth: '150px', maxHeight: '150px' }} src="../../pictures/planet-7014517_1280.jpg" alt="IMAGE" />
                </div>
            </div>
        </div>
    );
}
