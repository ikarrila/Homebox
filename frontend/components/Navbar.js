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
      <Link className='hidden' href="/"> <div className='placeholder-logo'>
        <img className='logo-link' src={'../pictures/logo/png/logo-white-transparent.png'} alt="Logo" />
      </div></Link>
      <Link className='nav-link' href="/">Home</Link>
      <div className="dropdown hidden">
        <Link className='nav-link' href="/FAAS/rental_services">Our Services</Link>
        <div className="dropdown-content">
          <a href="#">Furnishing</a>
          <Link href="/FAAS/rental_services/">Furniture Rental</Link>
          <Link href="/for_businesses">For Businesses</Link>
        </div>

      </div>
      <div className="dropdown hidden">
        <Link className='nav-link' href="/how_it_works">How it works</Link>
        <div className="dropdown-content">
          <Link href="/how_it_works">How it works</Link>
          <Link href="/about_us">About us</Link>
          <Link href="/how_it_works/FAQ">FAQ</Link>
        </div>
      </div>
      <Link className='nav-link' href="/portfolio">Portfolio</Link>
      <Link className='nav-link' href="/contact">Contact</Link>
      <Link className='nav-link' href="/blog">Blog</Link>
      {/* BELOW IS A SECRET DROPDOWN WHEN BURGERMENU IS CHECKED ON MOBILE LAYOUT */}
      {isChecked && <div className='secret-dropdown'>
        <div className="secret-content">
          <Link onClick={handleCheckboxChange} href="/">Home</Link>

          <div className="dropdown">
            <a href="#">Our Services</a>
            <div className="secret-content alternative" >
              <Link onClick={handleCheckboxChange} href="/404">Furnishing</Link>
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