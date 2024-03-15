import React from 'react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "lightgray", padding: "1rem" }}>

      <div>
        <ul style={{ display: "flex", justifyContent: "space-around", listStyle: "none", padding: 0 }}>
          <li><a href="#">Refund Policy</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Shopping Policy</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <p>&copy; 2024</p>
      </div>
    </footer>
  );
}