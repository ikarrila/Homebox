"use client";
import React from 'react';
import Link from 'next/link';
import './Navbar.css';
import NavbarButton from './NavbarButton';
import { useState } from 'react';

export default function Navbar() {

  //This is for the burgermenu navbar-component to track it's state
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  }

  return (
    <nav className='navbar'>
      <div className='placeholder-logo'></div>
      <Link className='hidden' href="/">Home</Link>
      <div className="dropdown hidden">
        <a href="#">Our Services</a>
        <div className="dropdown-content">
          <a href="#">Furnishing</a>
          <Link href="/FAAS/rental_services/">FAAS</Link>
          <Link href="/for_businesses">For Businesses</Link>
        </div>

      </div>
      <div className="dropdown hidden">
        <a href="#">How it works</a>
        <div className="dropdown-content">
          <Link href="/how_it_works">How it works</Link>
          <Link href="/about_us">About us</Link>
          <Link href="/how_it_works/FAQ">FAQ</Link>
        </div>
      </div>
      <Link className='hidden' href="/portfolio">Portfolio</Link>
      <a className='hidden' href="#">Contact</a>
      <Link className='hidden' href="/blog">Blog</Link>
      {/* BELOW IS A SECRET DROPDOWN WHEN BURGERMENU IS CHECKED ON MOBILE LAYOUT */}
      {isChecked && <div className='secret-dropdown'>
        <div className="secret-content">
          <Link onClick={handleCheckboxChange} href="/">Home</Link>

          <div className="dropdown">
            <a href="#">Our Services</a>
            <div className="secret-content alternative" >
              <a onClick={handleCheckboxChange} href="#">Furnishing</a>
              <Link onClick={handleCheckboxChange} href="/FAAS/rental_services/">FAAS</Link>
              <Link onClick={handleCheckboxChange} href="/for_businesses">For Businesses</Link>
            </div>
          </div>
          <Link onClick={handleCheckboxChange} href="/how_it_works">How it works</Link>
          <Link onClick={handleCheckboxChange} href="/about_us">About us</Link>
          <Link onClick={handleCheckboxChange} href="/portfolio">Portfolio</Link>
          <a onClick={handleCheckboxChange} href="#">Contact</a>
          <Link onClick={handleCheckboxChange} href="/blog">Blog</Link>
        </div>
      </div>}
      {/* BELOW IS THE BURGERMENU BUTTON */}
      <NavbarButton handleCheckboxChange={handleCheckboxChange} isChecked={isChecked} />

    </nav >
  );
}