
import React from 'react'
import { useState } from 'react'
import CommonLength from './Common1Length'
export default function CommonSubmit({ changeStep,
    submitForm, priceOfTheBill,
    CommonLengthData,
    ShortPackagesData,
    LongPropertyData,
    LongRoomsData,
    LongLivingDetailsData,
    CommonPersonalInfoData,
}) {
    const lengthParse = CommonLengthData.length > 12 ? '12+ months' : `${CommonLengthData.length} months`
    const [short, setShort] = useState(CommonLengthData && CommonLengthData.length < 10 || false)
    const submitAndMove = () => {
        submitForm()
        changeStep('common-thanks')
    }
    console.log(ShortPackagesData);
    return (
        <div className='section'>
            <div className='submitPage' >
                <div className="stepTitle ">{CommonLengthData.length < 10 ? "Step 4" : "Step 6"}</div>
                <div className='stepRow section '>
                    <div className="col left">
                        <div className='step startCol' >
                            <p>Length of rental: {lengthParse}</p>
                            {
                                short ? <p>Package: {ShortPackagesData && ShortPackagesData.standard ? ShortPackagesData.standard : ShortPackagesData.premium}</p>
                                    : <p>Furnishing Level: {LongRoomsData}</p>
                            }
                            <br />
                            {
                                !short && <div className=' startCol'>

                                    {LongPropertyData.bedSize && <p>Bedroom 1: {LongPropertyData.bedSize}</p>}
                                    {LongPropertyData.bed2Size && <p>Bedroom 2: {LongPropertyData.bed2Size}</p>}
                                    {LongPropertyData.bed3Size && <p>Bedroom 3: {LongPropertyData.bed3Size}</p>}
                                    {LongPropertyData.bed4Size && <p>Bedroom 4: {LongPropertyData.bed4Size}</p>}
                                    {LongPropertyData.bed5Size && <p>Bedroom 5: {LongPropertyData.bed5Size}</p>}
                                    {LongPropertyData.bed6Size && <p>Bedroom 6: {LongPropertyData.bed6Size}</p>}
                                    {LongPropertyData.livingRoomSize && <p>Living Room: {LongPropertyData.livingRoomSize}</p>}
                                    {LongPropertyData.diningRoomSize && <p>Dining Room: {LongPropertyData.diningRoomSize}</p>}
                                    {LongPropertyData.kitchenSize && <p>Kitchen: {LongPropertyData.kitchenSize}</p>}
                                    {LongPropertyData.homeOfficeSize && <p>Home Office: {LongPropertyData.homeOfficeSize}</p>}
                                    {LongPropertyData.outdoorSize && <p>Outdoor: {LongPropertyData.outdoorSize}</p>}

                                </div>
                            }

                            {!short &&
                                <div>
                                    <br />
                                    <div className="startCol">
                                        <p>Link to home: {LongLivingDetailsData.homeLink}</p>
                                        <p>Details regarding home: {LongLivingDetailsData.livingDetails}</p>
                                    </div>
                                </div>
                            }
                            <br />
                            <div className="startCol">
                                <p>Name: {CommonPersonalInfoData.name}</p>
                                <p>Email: {CommonPersonalInfoData.email}</p>
                                <p>Phone: {CommonPersonalInfoData.phone}</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='step startCol'>
                    <h2>Your budget is: </h2>
                    <h1>Estimated price</h1>
                    <h3>{priceOfTheBill} € / month</h3>
                </div>

                <div className='container row align-middle'>
                    <button onClick={() => changeStep('common-personal-info')} style={{ width: "160px" }} className='btn-tertiary'>Back</button>
                    <button onClick={() => submitAndMove()} style={{ width: "160px" }} className='btn-tertiary'>Send</button>
                </div>
            </div>
        </div>
    )

}