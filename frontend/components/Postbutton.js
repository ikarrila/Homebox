'use client';
import React from 'react';
import { useEffect, useState } from 'react';


export default function Postbutton(content) {
    const consolelognewproduct = async () => {
        const res = await fetch('http://localhost:4000/emails').then(res => res.json());
        console.log(res);
    };
    const postprod = async (content) => {
        const product = {
            name: 'Example Product',
            price: 100
        };
        const res = await fetch('http://localhost:4000/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then((response) => response.json())
            .then((json) => console.log(json));
    };

    return (
        <div >
            <button className='btn-primary' onClick={() => consolelognewproduct()}>console.logs the content</button>
            <button className='btn-tertiary' onClick={() => postprod(content)}>Post test</button>
            <div>
                test div, button above console.logs stuff
            </div>
        </div>
    );
}