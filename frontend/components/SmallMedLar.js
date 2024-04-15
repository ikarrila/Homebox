import React from "react";

function SmallMedLar({ name, onSizeSelect, value }) {
    const handleSizeSelect = (event) => {
        onSizeSelect(event.target.value);
    };

    return (
        <div>
            <div>
                <input type="radio" id="small" name={name} value="small" onChange={handleSizeSelect} checked={value === 'small'} />
                <label htmlFor="small">Small</label>
            </div>
            <div>
                <input type="radio" id="medium" name={name} value="medium" onChange={handleSizeSelect} checked={value === 'medium'} />
                <label htmlFor="medium">Medium</label>
            </div>
            <div>
                <input type="radio" id="large" name={name} value="large" onChange={handleSizeSelect} checked={value === 'large'} />
                <label htmlFor="large">Large</label>
            </div>
        </div>
    );
}


export default SmallMedLar;