import React, { useState } from "react";

function SmallMedLar({ name, onSizeSelect, value }) {
    const [selectedSize, setSelectedSize] = useState('');

    const handleSizeSelect = (event) => {
        setSelectedSize(event.target.value);
        onSizeSelect(event.target.value);
    };

    return (
        <div>
            <label className="smallmedlar" htmlFor={name}>Room size: </label>
            <select id={name} value={selectedSize} onChange={handleSizeSelect}>
                <option value="">Select</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        </div>
    );
}

export default SmallMedLar;
