import Link from 'next/link';
import '../../../../styles/styles.css';
export default function Rental() {
  return (
    <div>
      <h1>Rental services</h1>
      <Link href="/FAAS/rental_services/short_term">
          <button className="button">
            Short Term Rental
          </button>
      </Link>
      <Link href="/FAAS/rental_services/long_term">
          <button className="button">
            Long Term Rental
          </button>
      </Link>
    </div>
  );
}