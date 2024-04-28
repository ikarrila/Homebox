import React from 'react';
import Kuva from "../../pictures/toa-heftiba-FV3GConVSss-unsplash.jpg";
import Image from 'next/image';
import Link from 'next/link';

export default function Description() {
  return (
    <div className='container row'>
      <div className='section row'>
        <div className='left'> <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum</p>
          <div className="link-container">
            <Link href="" className='btn-primary'>
              Furnishing
            </Link>
            <Link href="/FAAS/rental_services" className='btn-secondary'>FAAS</Link>
          </div></div>
        <div className='right'>        <div>
          <Image
            src={Kuva}
            alt="Filler picture"
            className='image-container'
            width='1000px'
          />
        </div></div>
      </div>
    </div >
  );
}
