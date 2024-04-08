import React from 'react';
import './Notifications.css'; // Import CSS file
import closeIcon from "../assets/close-icon.png"; // Import close icon from assets directory
import { getLatestNotification } from "../utils/utils";

export default function Notifications() {
    return (
        <div className='Notifications'>
            <button
                style={{
                    background: "transparent",
                    border: 'none',
                    position: 'absolute',
                    right: 20,
                }}
                aria-label='close'>
                <img src={closeIcon} style={{ width: '0.5rem' }} alt='close-icon' /> {/* Use closeIcon here */}
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    );
}
