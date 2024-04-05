

export default function FormStepZero({ changeStep }) {
    return (
        <div className="section">
            <div className='stepZero step-container row startRow'  >
                <div className='textSide section'>
                    <h1 data-testid="cost-calculator-header">Cost calculator</h1>
                    <h2>How does it work?</h2>
                    <p>Our calculator will evaluate the pricing step-by-step</p><br />
                    <button onClick={() => changeStep(1)} className='btn-tertiary'>Get an evaluation</button>
                </div>

                <div className='card-container'>
                    <img src="../../pictures/nathan-fertig-FBXuXp57eM0-unsplash.jpg" alt="image" />
                    <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="image2" />
                </div>

            </div>
        </div>

    )
}