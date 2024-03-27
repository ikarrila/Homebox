function SmallMedLar({ name, onSizeSelect }) {
    const handleSizeSelect = (event) => {
        onSizeSelect(event.target.value);
    };

    return (
        <div>
            <div>
                <input type="radio" id="small" name={name} value="small" onChange={handleSizeSelect} />
                <label htmlFor="small">Small</label>
            </div>
            <div>
                <input type="radio" id="medium" name={name} value="medium" onChange={handleSizeSelect} />
                <label htmlFor="medium">Medium</label>
            </div>
            <div>
                <input type="radio" id="large" name={name} value="large" onChange={handleSizeSelect} />
                <label htmlFor="large">Large</label>
            </div>
        </div>
    );
}


export default SmallMedLar;