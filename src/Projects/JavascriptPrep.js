import React from 'react';
import { Image } from 'react-bootstrap';
import * as CONSTANTS from '../constants/constants';

export default function JavascriptPrep(props) {
    return (
        <div>
            <p>
                Frontend Webapp built using React JS and JSON files acting as CMS.
                The webapp aims at providing quick reading material right before interviews.
                It is a culmination of interview experience at more than 30 companies for SDE1 and SDE2 roles.
            </p>
            <ul>
                <li>4 different technical sections - 
                    <ul>
                        <li>Javascript</li>
                        <li>React JS</li>
                        <li>React Native</li>
                        <li>Redux</li>
                    </ul>
                </li>
                <li>Helped numerous acquaintances with quick revision material for their interviews</li>
            </ul>
            <div className="vaccine-modal-img-container">
                <Image src={CONSTANTS.JAVASCRIPTPREP_IMG_LINK} className="text-center vaccine-modal-img"/>
            </div>
        </div>
    );
}