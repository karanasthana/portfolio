import React from 'react';
import { Button } from '../StyledComponents/Button';
import './sass.scss';
import * as CONSTANTS from '../constants/constants';

export default class Footer extends React.Component {
    render() {
        return <div className="footer-section">
            <div className="pdf-row">
                <Button primary>
                    <a href={CONSTANTS.RESUME_PDF_LINK} target="_blank" rel="noreferrer" download style={{  }}>
                        PDF Resume
                    </a>
                </Button>
            </div>
            <div className="footer-icons-row">
                <div className="copyright-container">
                    Copyright <i class ="ri-copyright-line" /> {' Karan Asthana'} All rights reserved.
                </div>
                <div className="row icons-container">
                    <a href={CONSTANTS.TRAVEL_LINK} target="_blank" rel="noreferrer">
                        <i class="ri-earth-fill"></i>
                    </a>
                    <a href={CONSTANTS.LINKEDIN_LINK} target="_blank" rel="noreferrer">
                        <i class="ri-linkedin-fill"></i>
                    </a>
                    <a href={CONSTANTS.GITHUB_LINK} target="_blank" rel="noreferrer">
                        <i class="ri-github-fill"></i>
                    </a>
                    <a href={CONSTANTS.INSTAGRAM_LINK} target="_blank" rel="noreferrer">
                        <i class="ri-instagram-fill"></i>
                    </a>
                    <a href={CONSTANTS.FACEBOOK_LINK} target="_blank" rel="noreferrer">
                        <i class="ri-facebook-fill"></i>
                    </a>
                    <a href={CONSTANTS.EMAILTO_LINK} target="_blank" rel="noreferrer">
                        <i class="ri-mail-fill"></i>
                    </a>
                </div>
            </div>
        </div>
    }
}