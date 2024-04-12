import Package from "../Packages"
export default function ShortPackages({ handleChange, changeStep, setShortPackagesData, ShortPackagesData }) {
    return (
        <div className='section col' >
            <Package setShortPackagesData={setShortPackagesData} ShortPackagesData={ShortPackagesData} />
            <div className='container row align-middle'>
                <button onClick={() => changeStep('common-length')} className='btn-tertiary'>Back</button>
                <button onClick={() => changeStep('common-personal-info')} className={ShortPackagesData ? 'btn-primary' : 'btn-tertiary'}>Continue</button>
            </div>
        </div>



    )
}