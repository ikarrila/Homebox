import React from 'react';
import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem", backgroundColor: "lightgrey" }}>
      <div style={{ display: "flex", gap: "1rem" }}>
        <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "grey" }}></div>
        <Link href="/">Home</Link>
        <div className="dropdown">
          <a href="#">Our Services</a>
          <div className="dropdown-content">
            <a href="#">Furnishing</a>
            <Link href="/FAAS/rental_services/">FAAS</Link>
            <a href="#">For Businesses</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#">How it works</a>
          <div className="dropdown-content">
            <a href="#">How it works</a>
            <a href="#">About us</a>
          </div>
        </div>
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