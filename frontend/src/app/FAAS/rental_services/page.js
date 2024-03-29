import Link from 'next/link';
import '../../../../styles/styles.css';
export default function Rental() {
  return (
    <div className='section'>
      <h1>Rental services</h1>
      <Link href="/FAAS/rental_services/long_term">
        <button className="btn-primary">
          Long-Term Rental - learn more
        </button>
      </Link>
      <Link href="/FAAS/cost_calculator">
        <button className="btn-primary">
          Cost Calculator - learn more
        </button>
      </Link>
      <Link href="/FAAS/rental_services/short_term">
        <button className="btn-primary">
          Short-Term Rental - learn more
        </button>
      </Link>
    </div>
  );
}