import React from 'react';
import Kuva from "../../pictures/toa-heftiba-FV3GConVSss-unsplash.jpg";
import Image from 'next/image';
import Link from 'next/link';
import '/styles/styles.css';

export default function Description() {
  return (
    <div className='container row'>
      <div className='section row'>
        <div className='left'> 
          <h1>
            Efficient and effective interior furnishing solutions
          </h1>
          <p style={{paddingTop:'15px'}}>
              Our comprehensive furnishing solutions offer a tailored approach in enhancing the functionality and aesthetics of your home.
          </p>
          <div className="link-container" style={{paddingTop:'30px'}}>
            <Link href="" className='btn-primary'>
              Furnishing Services
            </Link>
            <Link href="/FAAS/rental_services" className='btn-secondary'>
              Furniture Rental
            </Link>
          </div></div>
        <div className='right'>        
          <Image
            src={Kuva}
            alt="Filler picture"
            className='image-container'
            width='1000px'
          />
        </div>
      </div>
    </div >
  );
}
