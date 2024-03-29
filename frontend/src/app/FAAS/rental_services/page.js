import Link from 'next/link';
import '../../../../styles/styles.css';

export default function Rental() {
  const imageStyle = {
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  };

  return (
    <div className='section'>
      <h1>Rental services</h1>
      <div className="flex justify-between">
        <div className="w-1/2">
          <div>
            <h2>Long-Term Rental</h2>
            <div className="max-w-xs">
              <p className="text-center" style={{ textAlign: 'left' }}> {/* Lisätty tyyli text-align: left */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <Link href="/FAAS/rental_services/long_term">
              <div className="flex justify-start">
                <button className="btn-primary">
                  Learn more
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex justify-start items-center">
          <div className="centered-image">
            <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Image 1" style={imageStyle} />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/2">
          <div>
            <h2>Short-Term Rental</h2>
            <div className="max-w-xs">
              <p className="text-center" style={{ textAlign: 'left' }}> {/* Lisätty tyyli text-align: left */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <Link href="/FAAS/rental_services/short_term">
              <div className="flex justify-start">
                <button className="btn-primary">
                  Learn more
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex justify-start items-center">
          <div className="centered-image">
            <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Image 1" style={imageStyle} />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/2">
          <h2>Instant Quote</h2>
          <Link href="/FAAS/cost_calculator">
            <div className="flex justify-start">
              <button className="btn-primary">
                Instant Quote
              </button>
            </div>
          </Link>
        </div>
        <div className="w-1/2 flex justify-start items-center">
          <div className="centered-image">
            <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Image 1" style={imageStyle} />
          </div>
        </div>
      </div>
    </div>
  );
}
