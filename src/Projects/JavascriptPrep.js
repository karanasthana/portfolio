import React from 'react';
import { Image } from 'react-bootstrap';
import * as CONSTANTS from '../constants/constants';

export default function JavascriptPrep(props) {
    return (
        <div>
            <p>
                Node JS bot that takes in a person's name and phone number along with their district id and keeps checking for vaccination slots' availability every minute.
                In case of availability, it sends the user a text message leveraging Twilio integration.
            </p>
            <ul>
                <li>Successfully helped atleast 10-15 acquaintances book their vaccine slots after they had been failing for a couple of weeks.</li>
                <li>Got the bot built and ready for use before the likes of Paytm came up with the features.</li>
            </ul>
            <div className="vaccine-modal-img-container">
                <Image src={CONSTANTS.VACCINE_PROBLEM_IMG_LINK} className="text-center vaccine-modal-img"/>
            </div>
        </div>
    );
}