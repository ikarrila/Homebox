import React from 'react';
import '/styles/styles.css';
import Link from 'next/link';

export default function FAQinfo() {
  return (
    <div className='container col dark'>
      <div className='section col'>
        <h2>FAQ</h2>
        <p>Information about...</p>
        <Link href="/how_it_works">
          <button className='btn-tertiary'>Learn More</button>
        </Link>
      </div>
    </div>
  );
}