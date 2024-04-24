import React from 'react';
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer primary bottom-0 w-full mt-auto text-color-white" data-testid="footer">

      <div>
        <ul style={{ display: "flex", justifyContent: "space-around", listStyle: "none", padding: 0 }} data-testid="footer-list">
          <li><Link href="/terms/refund_policy">Refund Policy</Link></li>
          <li><Link href="/terms/privacypolicy">Privacy Policy</Link></li>
          <li><Link href="/terms/terms_of_service">Terms of Service</Link></li>
          <li><Link href="/terms/shopping_policy">Shopping Policy</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </div>
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <p data-testid="copyright-text">&copy; 2024</p>
      </div>
    </footer>
  );
}