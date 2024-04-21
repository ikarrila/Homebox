"use client";

import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
import '/styles/styles.css';
import '/styles/popup.css';
import { IoMdClose } from "react-icons/io";

function Popup({ onClose }) {

    const popupRef = useRef(null);

    return (
        <div className="popup  w-1/2 h-1/2" ref={popupRef}>
            <div className="popup-content section col">
                <p>This is a Cookie Popup.</p>
                <div className="section row">
                    <button className="btn-primary" onClick={onClose}>
                    Accept Cookies & Go
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function LongTermLanding() {
    const [popupOpen, setPopupOpen] = useState(true);
    return (
        <div className='section col'>
            {popupOpen && <Popup onClose={() => setPopupOpen(false)} />}
        </div>
    );
}