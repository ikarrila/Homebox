import React from 'react';

export default function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem", backgroundColor: "lightgrey" }}>
      <div style={{ display: "flex", gap: "1rem" }}>
        <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "grey" }}></div>
        <a href="#">Home</a>
        <a href="#">Our Services</a>
        <a href="#">How it works</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <input type="search" placeholder="Search" />
        <button>Language</button>
        <button>Cart</button>
      </div>
    </nav>
  );
}