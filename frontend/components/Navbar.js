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
            <Link href="/for_businesses">For Businesses</Link>
          </div>
        </div>
        <div className="dropdown">
          <a href="#">How it works</a>
          <div className="dropdown-content">
            <Link href="/how_it_works">How it works</Link>
            <Link href="/about_us">About us</Link>
          </div>
        </div>
        <Link href="/portfolio">Portfolio</Link>
        <a href="#">Contact</a>
        <Link href="/blog">Blog</Link>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <input type="search" placeholder="Search" />
        <button>Language</button>
        <button>Cart</button>
      </div>
    </nav>
  );
}