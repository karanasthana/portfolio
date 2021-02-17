import React from 'react';
import { Button } from '../StyledComponents/Button';
import './sass.scss';

export default class Footer extends React.Component {
    render() {
        return <div className="footer-section">
            <div className="pdf-row">
                <Button primary>
                    <a href="https://karanpersonal.s3.ap-south-1.amazonaws.com/Karan+Asthana+Resume+-+Frontend+Developer+-+React+Native+.pdf" target="_blank" rel="noreferrer" download style={{  }}>
                        PDF Resume
                    </a>
                </Button>
            </div>
            <div className="footer-icons-row">
                <div className="copyright-container">
                    Copyright <i class ="ri-copyright-line" /> {' Karan Asthana'} All rights reserved.
                </div>
                <div className="row icons-container">
                    <a href={'https://karanasthana.github.io/travel/'} target="_blank" rel="noreferrer">
                        <i class="ri-earth-fill"></i>
                    </a>
                    <a href={'https://www.linkedin.com/in/karan-asthana-b6754510a/'} target="_blank" rel="noreferrer">
                        <i class="ri-linkedin-fill"></i>
                    </a>
                    <a href={'https://github.com/karanasthana/'} target="_blank" rel="noreferrer">
                        <i class="ri-github-fill"></i>
                    </a>
                    <a href={'https://www.instagram.com/karan_asthana/'} target="_blank" rel="noreferrer">
                        <i class="ri-instagram-fill"></i>
                    </a>
                    <a href={'https://www.facebook.com/karan.asthana1/'} target="_blank" rel="noreferrer">
                        <i class="ri-facebook-fill"></i>
                    </a>
                    <a href={'mailto:karan.asthana1@gmail.com'} target="_blank" rel="noreferrer">
                        <i class="ri-mail-fill"></i>
                    </a>
                </div>
            </div>
        </div>
    }
}