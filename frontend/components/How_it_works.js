'use client';
import React from 'react';
import Kuva from "../../pictures/di_an_h-g_8MrEZAvyE-unsplash.jpg";
import Kuva2 from "../../pictures/kam-idris-_HqHX3LBN18-unsplash.jpg";
import Image from 'next/image';
import Link from 'next/link';
import { isMobile } from 'react-device-detect';

const pStyle = {
    fontSize: '20px',
    whiteSpace: 'normal',
    overflow: 'hidden'

};
const bStyle = {
    fontSize: '30px',
    whiteSpace: 'nowrap',
};

export default function How_it_works() {
    return (
        <div style={{
            paddingLeft: '15%', paddingRight: '15%', display: 'flex', flexDirection: 'column', height: isMobile ? '200vh' : '100vh'
        }}>

            <div style={{ whiteSpace: 'nowrap', paddingBottom: '8px', flexDirection: 'row', height: '12vh' }}>
                <b style={{ fontSize: '40px' }}>How it works</b>
                <p style={pStyle}>Journey into furnishing</p>
            </div>

            <div style={{
                paddingBottom: '8px', display: 'flex', justifyContent: 'space-between', height: isMobile ? '400vh' : '40vh'
            }}>
                <div>
                    <b style={bStyle}>Phase one</b>
                    <p style={pStyle}>one vculpa qui officia deserunt mollit anim id est laborum</p>
                </div>

                <Image class='image-container' src={Kuva2} alt="kuva1" objectFit="contain" style={{ minWidth: '45%', width: '500px', height: '500%', maxWidth: '400px', maxHeight: '100%' }} />

            </div>

            <div style={{
                display: 'flex', justifyContent: 'space-between', height: isMobile ? '400vh' : '30vh'
            }}>

                < Image class='image-container' src={Kuva} alt="kuva2" objectFit="contain" style={{ minHeight: '50%', minWidth: '45%', width: '500px', height: '500%', maxWidth: '40%', maxHeight: '100%' }} />
                <div style={{ paddingLeft: '8px', paddingBottom: '8px', minWidth: '50vh' }}>
                    <b style={bStyle} > Phase two</b>
                    <p style={pStyle}>la pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
            </div>

        </div >

    );
}
