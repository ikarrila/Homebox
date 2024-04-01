import React from 'react';
import '/styles/styles.css';

export default function RentingVsBuying() {
    return (
        <div className='container col'>
            <div className='section col'>
                <h2>Rent vs. Buying</h2>
                <table>
                    <thead>
                        <tr>
                            <th className='secondary'>KEJA</th>
                            <th className='secondary'>BUYING</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ecological and sustainable</td>
                            <td>Moving Out? Difficult to get rid of the furniture</td>
                        </tr>
                        <tr>
                            <td>Design, quality and affordability</td>
                            <td>Limited flexibility as bought furniture are long term commitments</td>
                        </tr>
                        <tr>
                            <td>All inclusive delivery and assembly</td>
                            <td>Extra charges for delivery and assembly</td>
                        </tr>
                        <tr>
                            <td>Centralised order and paymentsy</td>
                            <td>Huge hassle coordinating delivery from different stores</td>
                        </tr>
                        <tr>
                            <td>Flexibility with subscription model pricing</td>
                            <td>Upfront payment and expensive</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}