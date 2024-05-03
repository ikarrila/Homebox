import React from 'react';
import Kuva from "../../pictures/toa-heftiba-FV3GConVSss-unsplash.jpg";
import Image from 'next/image';
import Link from 'next/link';

export default function Description() {
  return (
    <div className='container row'>
      <div className='section row'>
        <div className='left'> <h1>Efficient and effective interior furnishing solutions</h1>
          <p>
            Our comprehensive furnishing solutions offer a tailored approach in enhancing the functionality and aesthetics of your home.</p>
          <div className="link-container">
            <Link href="" className='btn-primary'>
              Furnishing Services
            </Link>
            <Link href="/FAAS/rental_services" className='btn-secondary'>Furniture Rental</Link>
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
