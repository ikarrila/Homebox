import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" data-testid="footer">

      <div>
        <ul className='footer-list' data-testid="footer-list">
          <li><Link href="/terms/privacypolicy">Privacy Policy</Link></li>
          <li><Link href="/terms/terms_of_service">Terms of Service</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </div>
      <div className='copyright'>
        <p data-testid="copyright-text">&copy; 2024</p>
      </div>
    </footer>
  );
}