import React from 'react';
//import '../styles/styles.css';

const roomStyle = {
    marginLeft: '20px',
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
    marginBottom: '10px',
};

const labelStyle = {
    marginBottom: '10px',
};

const stepStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
    margin: '10px 0',
    maxWidth: '95%',
    width: '100%',
};

export default function ShortTermForm() {
    return (
        <div>
            <header style={{ padding: '10px', backgroundColor: '#f5f5f5', marginBottom: '20px' }}>
                <h1>Short term rental services</h1>
            </header>
            <div style={roomStyle}>
                <div style={stepStyle}>Tell us about your needs </div>
                <input type="text" placeholder="Write about your needs" data-testid="input"></input>
                {/* Step content goes here */}
            </div>

            <div style={roomStyle}>
                <hr />
                <div style={{ display: 'flex' }}>
                </div>
                    <div style={stepStyle}>Select your level of furnishing needs</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                        <select style={{ margin: '10px' }} data-testid="select">
                            <option value="" disabled selected>Select...</option>
                            <option value="1">Standard</option>
                            <option value="2">Premium</option>
                        </select>
                        <div>
                            <h3><b>Standard:</b></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros in enim cursus, a finibus lorem pretium.</p>
                            <h3><b>Premium:</b></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros in enim cursus, a finibus lorem pretium.</p>
                        </div>
                    </div>
                    
                <div style={stepStyle}>Submit your request to short term rental</div>

                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <div style={{ marginRight: '20px' }}>
                        <label htmlFor="name">Name:   </label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:   </label>
                        <input type="text" id="email" name="email" />
                    </div>
                </div>
                <button className="button">
                    Submit
                </button>
            </div>
        </div>
    );
}