import React from 'react';
import '/styles/styles.css';


export default function Sustainability() {
    return (
        <div className="section col" style={{ backgroundImage: `url(/pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg)` }}>
            <div>
                <h2>Sustainable furniture</h2>
                <div className='sustainabilityText'>
                    <p>By opting to rent furniture, you're helping divert tons of items from ending up in landfills.</p>
                    <p>Additionally, renting significantly reduces the release of metric tons of CO2 into the environment.</p>
                    <p>Providing furniture with second chances at life not only benefits the planet but also cuts down on the time spent on assembly and packing.</p></div>
            </div>
        </div>
    );
}