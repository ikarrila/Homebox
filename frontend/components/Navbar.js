"use client";
import React from 'react';
import Link from 'next/link';
import './Navbar.css';
import NavbarButton from './NavbarButton';
import { useState } from 'react';

export default function Navbar() {


  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  }

  return (
    <nav className='navbar'>
      <div className='placeholder-logo'></div>
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
      {isChecked && <div> ASDASDASD </div>}
      <NavbarButton key={isChecked ? 'checked' : 'unchecked'} handleCheckboxChange={handleCheckboxChange} isChecked={isChecked} />

    </nav >
  );
}