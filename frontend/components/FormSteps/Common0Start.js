

export default function CommonStart({ changeStep }) {
    return (
        <div className="section">
            <div className='stepZero step-container row startRow'  >
                <div className='textSide section'>
                    <h1 data-testid="cost-calculator-header">Cost calculator</h1>
                    <h2>How does it work?</h2>
                    <p>Our calculator will evaluate the pricing step-by-step</p><br />
                    <p>Not sure how much to budget for your project? Use our handy calculator to estimate how much it will cost to furnish your home.</p><br />
                    <p>We created this page to give you an idea of the range of packages available. </p>
                    <p>However since every property is unique, the costs will range widely depending on your property size, furnishing quality, and timeline.</p>
                    <p>To get an accurate and custom quotation for furnishing your home, get a one-on-one consultation with our in-house designers</p>
                    <p>by submitting a design request.</p>
                    <button onClick={() => changeStep('common-length')} className='btn-tertiary'>Get an evaluation</button>
                </div>

                <div className='card-container'>
                    <img src="../../pictures/nathan-fertig-FBXuXp57eM0-unsplash.jpg" alt="image" />
                    <img src="../../pictures/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="image2" />
                </div>

            </div>
        </div>

    )
}