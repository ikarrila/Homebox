import React from 'react';

export default function Description() {
    return (
      <div style={{ padding: '0 20px', display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1 className="title">Title1</h1>
          <p className="para">Tekstiä</p>
          <div className="link-container">
            <a href="#" style={{ margin: '0 5px' }}>Linkki 1</a>
            <span style={{ margin: '0 10px' }}></span>
            <a href="#" style={{ margin: '0 5px' }}>Linkki 2</a>
          </div>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <img src="../../pictures/website.jpg" alt="Kuva" className='image-container'/>
        </div>
      </div>
    );
  }