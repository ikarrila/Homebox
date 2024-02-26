import React from 'react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "lightgray", padding: "1rem", display: "flex", justifyContent: "space-between" }}>
      <div>
        {/* Placeholder circle for company logo */}
        <img src="/path/to/logo.png" alt="Company Logo" />
        <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "grey" }}></div>
      </div>
      <div>
        <h3>Links</h3>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </div>
      <div>
        <h3>Partners</h3>
        <ul>
          <li><a href="#">Partner 1</a></li>
          <li><a href="#">Partner 2</a></li>
          <li><a href="#">Partner 3</a></li>
        </ul>
      </div>
    </footer>
  );
}