import React from 'react';
import Kuva from "../../pictures/toa-heftiba-FV3GConVSss-unsplash.jpg";
import Image from 'next/image';
import Link from 'next/link';

export function MainTitle() {
  return (
    <table>
      <thread>
        <tr>
          <th>Title</th>
        </tr>
      </thread>
    </table>
  );
}

export function DescriptionButtons() {
  return (
    <table>
      <thread>
        <tr>
          <button href="/FAAS/cost_calculator"></button>
        </tr>
      </thread>
    </table>
  );
}
export default function Description() {
    return (
      <div style={{ padding: '0 20px', display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <MainTitle></MainTitle>
          <p className="para">Short add / description about company services. <br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
           incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
             irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum</p>
          <div className="link-container">
            <Link href="FAAS/rental_services" style={{ marginBottom: '10px', border: '1px solid black'}}>Rental Services</Link>
            <span style={{ margin: '0 10px' }}></span>
            <Link href="/FAAS/cost_calculator" style={{ marginBottom: '10px', border: '1px solid black'}}>Cost Calculator</Link>
          </div>
        </div>
        <div style={{ display: 'fixed', marginLeft: '1%', marginTop: '3%', marginRight: '3%', width:'3000px'}}>
          <Image 
            src={Kuva}
            alt="Filler picture"
            className='image-container'
            width='1000px'
          />
        </div>
      </div>
    );
  }
