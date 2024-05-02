"use client";

import React, { useState } from 'react';
import { useRef } from 'react';


function Popup({ onClose }) {

    const popupRef = useRef(null);

    const handleAccept = () => {
        document.cookie = "cookiesAccepted=true; path=/; max-age=31536000";
        onClose();
    };

    return (
        <div className="popup" ref={popupRef}>
            <div className="section col">
                <p>This is a Cookie Popup.</p>
                <div className="section row">
                    <button className="btn-primary" onClick={handleAccept}>
                        Accept Cookies & Go
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function CookiePopup() {
    //check if cookie exists
    const cookiesAccepted = document.cookie ? document.cookie.split('; ').find(row => row.startsWith('cookiesAccepted')).split('=')[1] : "false";
    const [popupOpen, setPopupOpen] = useState(cookiesAccepted !== "true");

    return (
        <div className='section col'>
            {popupOpen && <Popup onClose={() => setPopupOpen(false)} />}
        </div>
    );
}