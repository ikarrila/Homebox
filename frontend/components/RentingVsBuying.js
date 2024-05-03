import React from 'react';
import '/styles/styles.css';

export default function RentVsBuying() {
    return (
        <div style={{ maxWidth: '60%', borderRadius: '10px', padding: '10px', whiteSpace: 'nowrap', overflowX: 'auto' }}>
            <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <h2>Rent vs. Buying</h2>
                <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid #314d63' }}>
                    <thead>
                        <tr>
                            <th style={{ color: 'white', backgroundColor: '#314d63', padding: '10px', borderTopLeftRadius: '10px', borderRight: '1px solid #314d63' }}>KEJA</th>
                            <th style={{ color: 'white', backgroundColor: '#314d63', padding: '10px', borderTopRightRadius: '10px' }}>BUYING</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ backgroundColor: '#001f3f', color: 'black', padding: '10px', borderRight: '1px solid #314d63' }}><span style={{ backgroundColor: 'white', padding: '1px 3px', display: 'inline-block', width: '100%' }}>Ecological and sustainable</span></td>
                            <td style={{ backgroundColor: '#001f3f', color: 'black', padding: '10px' }}><span style={{ backgroundColor: 'white', padding: '1px 3px', display: 'inline-block', width: '100%' }}>Moving Out? Difficult to get rid of the furniture</span></td>
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: '#001f3f', color: 'black', padding: '10px', borderRight: '1px solid #314d63' }}><span style={{ backgroundColor: 'white', padding: '1px 3px', display: 'inline-block', width: '100%' }}>Design, quality and affordability</span></td>
                            <td style={{ backgroundColor: '#001f3f', color: 'black', padding: '10px' }}><span style={{ backgroundColor: 'white', padding: '1px 3px', display: 'inline-block', width: '100%' }}>Limited flexibility as bought furniture are long term commitments</span></td>
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: '#001f3f', color: 'black', padding: '10px', borderRight: '1px solid #314d63' }}><span style={{ backgroundColor: 'white', padding: '1px 3px', display: 'inline-block', width: '100%' }}>All inclusive delivery and assembly</span></td>
                            <td style={{ backgroundColor: '#001f3f', color: 'black', padding: '10px' }}><span style={{ backgroundColor: 'white', padding: '1px 3px', display: 'inline-block', width: '100%' }}>Extra charges for delivery and assembly</span></td>
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: '#001f3f', color: 'black', padding: '10px', borderRight: '1px solid #314d63' }}><span style={{ backgroundColor: 'white', padding: '1px 3px', display: 'inline-block', width: '100%' }}>Centralised order and payments</span></td>
                            <td style={{ backgroundColor: '#001f3f', color: 'black', padding: '10px' }}><span style={{ backgroundColor: 'white', padding: '1px 3px', display: 'inline-block', width: '100%' }}>Huge hassle coordinating delivery from different stores</span></td>
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: '#001f3f', color: 'black', padding: '10px', borderRight: '1px solid #314d63' }}><span style={{ backgroundColor: 'white', padding: '1px 3px', display: 'inline-block', width: '100%' }}>Flexibility with subscription model pricing</span></td>
                            <td style={{ backgroundColor: '#001f3f', color: 'black', padding: '10px' }}><span style={{ backgroundColor: 'white', padding: '1px 3px', display: 'inline-block', width: '100%' }}>Upfront payment and expensive</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
