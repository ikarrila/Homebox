'use client';
import React from 'react';
import { useEffect, useState } from 'react';


export default function Postbutton() {
    const consolelognewproduct = async () => {
        const res = await fetch('http://localhost:4000/products').then(res => res.json())
        console.log(res);
    }

    return (
        <div >
            <button class='button' onClick={() => consolelognewproduct()}>console.logs the content</button>
            <button class='button' onClick={() => postprod()}>posting test</button>
            <div>
                test div, button above console.logs stuff
            </div>
        </div>
    );
}

