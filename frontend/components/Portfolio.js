"use client";

import React, { useState } from 'react';
import '/styles/styles.css';

const portfolioStyle = {
    marginLeft: '20px',
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
    marginBottom: '10px',
};

const headerStyle = {
    padding: '10px',
    backgroundColor: '#f5f5f5',
    marginBottom: '20px',
};

const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const imageStyle = {
    maxWidth: '33%',
    borderRadius: '10px',
};

export default function Portfolio() {
    return (
        <div data-testid="portfolio">
            <header style={headerStyle}>
                <h1 style={{ fontWeight: 'bold' }}>Portfolio</h1>
            </header>
            <div style={portfolioStyle}>
                <div style={imageContainerStyle}>
                    <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Image 1" style={imageStyle} />
                    <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Image 1" style={imageStyle} />
                    <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Image 1" style={imageStyle} />
                </div>
                <div style={{ marginTop: '10px' }}>
                    <strong>Project name</strong> <br />
                    Project description
                </div>
                <div style={imageContainerStyle}>
                    <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Image 1" style={imageStyle} />
                    <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Image 1" style={imageStyle} />
                    <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Image 1" style={imageStyle} />
                </div>
            </div>
        </div>
    );
}