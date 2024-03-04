import React from 'react';
import '/styles/styles.css';

const roomStyle = {
    marginLeft: '20px',
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
    marginBottom: '10px',
};

const labelStyle = {
    marginBottom: '10px',
};

export default function CostCalculatorForm() {
    return (

        <div>
            <header style={{ padding: '10px', backgroundColor: '#f5f5f5', marginBottom: '20px' }}>
                <h1>Cost calculator</h1>
            </header>

            <div style={roomStyle}>
                <hr />
                <div style={{ display: 'flex' }}>
                    <div>
                        <div>
                            <label style={{ margin: '10px' }}>Property:</label>
                        </div>
                        <select style={{ margin: '10px' }}>
                            <option value="" disabled selected>Select property type...</option>
                            <option value="1">Studio Apartment</option>
                            <option value="2">One Bedroom</option>
                            <option value="3">Two Bedroom</option>
                            <option value="4">Three Bedroom</option>
                            <option value="5">Four Bedroom</option>
                            <option value="6">Five Bedroom</option>
                            <option value="7">Six Bedroom</option>
                        </select>
                    </div>
                    <div>
                        <div>
                            <label style={{ margin: '10px' }}>Location:</label>
                        </div>
                        <select style={{ margin: '10px' }}>
                            <option value="" disabled selected>Select...</option>
                            <option value="1">Location 1</option>
                            <option value="2">Location 2</option>
                        </select>
                    </div>
                </div>
                <hr />
                <div>
                    <input type="checkbox" id="checkbox" name="checkbox" value="value" />
                    <label for="checkbox">Living room</label>
                </div>
                <div style={labelStyle}>
                    <label for="selection">Living room:</label>
                    <div>
                        <input type="radio" id="small" name="livingRoomSize" value="small" />
                        <label for="small">Small</label>
                    </div>
                    <div>
                        <input type="radio" id="medium" name="livingRoomSize" value="medium" />
                        <label for="medium">Medium</label>
                    </div>
                    <div>
                        <input type="radio" id="large" name="livingRoomSize" value="large" />
                        <label for="large">Large</label>
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="checkbox" name="checkbox" value="value" />
                    <label for="checkbox">Dining room</label>
                </div>
                <div style={labelStyle}>
                    <label for="selection2">Dining room:</label>
                    <div>
                        <input type="radio" id="small" name="diningRoomSize" value="small" />
                        <label for="small">Small</label>
                    </div>
                    <div>
                        <input type="radio" id="medium" name="diningRoomSize" value="medium" />
                        <label for="medium">Medium</label>
                    </div>
                    <div>
                        <input type="radio" id="large" name="diningRoomSize" value="large" />
                        <label for="large">Large</label>
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="checkbox" name="checkbox" value="value" />
                    <label for="checkbox">Kitchen</label>
                </div>
                <div style={labelStyle}>
                    <label for="selection2">Kitchen:</label>
                    <div>
                        <input type="radio" id="small" name="kitchenSize" value="small" />
                        <label for="small">Small</label>
                    </div>
                    <div>
                        <input type="radio" id="medium" name="kitchenSize" value="medium" />
                        <label for="medium">Medium</label>
                    </div>
                    <div>
                        <input type="radio" id="large" name="kitchenSize" value="large" />
                        <label for="large">Large</label>
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="checkbox" name="checkbox" value="value" />
                    <label for="checkbox">Main bedroom</label>
                </div>
                <div style={labelStyle}>
                    <label for="selection2">Main bedroom:</label>
                    <div>
                        <input type="radio" id="small" name="bedroomSize" value="small" />
                        <label for="small">Small</label>
                    </div>
                    <div>
                        <input type="radio" id="medium" name="bedroomSize" value="medium" />
                        <label for="medium">Medium</label>
                    </div>
                    <div>
                        <input type="radio" id="large" name="bedroomSize" value="large" />
                        <label for="large">Large</label>
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="checkbox" name="checkbox" value="value" />
                    <label for="checkbox">Home office</label>
                </div>
                <div style={labelStyle}>
                    <label for="selection2">Home office:</label>
                    <div>
                        <input type="radio" id="small" name="homeOfficeSize" value="small" />
                        <label for="small">Small</label>
                    </div>
                    <div>
                        <input type="radio" id="medium" name="homeOfficeSize" value="medium" />
                        <label for="medium">Medium</label>
                    </div>
                    <div>
                        <input type="radio" id="large" name="homeOfficeSize" value="large" />
                        <label for="large">Large</label>
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="checkbox" name="checkbox" value="value" />
                    <label for="checkbox">Outdoor space</label>
                </div>
                <div style={labelStyle}>
                    <label for="selection2">Select size fo space:</label>
                    <div>
                        <input type="radio" id="small" name="outdoorSize" value="small" />
                        <label for="small">Small</label>
                    </div>
                    <div>
                        <input type="radio" id="medium" name="outdoorSize" value="medium" />
                        <label for="medium">Medium</label>
                    </div>
                    <div>
                        <input type="radio" id="large" name="outdoorSize" value="large" />
                        <label for="large">Large</label>
                    </div>
                </div>
                <div>
                    <hr />
                    <div>
                        <label style={{ margin: '10px' }}>Select package level:</label>
                    </div>
                    <select style={{ margin: '10px' }}>
                        <option value="" disabled selected>Select...</option>
                        <option value="1">Standard</option>
                        <option value="2">Premium</option>
                    </select>
                </div>
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