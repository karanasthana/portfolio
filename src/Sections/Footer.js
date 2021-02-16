import React from 'react';
import { Button } from '../StyledComponents/Button';

export default class Footer extends React.Component {
    render() {
        return <div style={{ backgroundColor: '#F4F5F7', height: '50px' }}>
            <div>
                <Button>
                    <a href="https://karanpersonal.s3.ap-south-1.amazonaws.com/Karan+Asthana+Resume+-+Frontend+Developer+-+React+Native+.pdf" download>
                        Download Resume PDF
                    </a>
                </Button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    Copyright <i class ="ri-copyright-line" /> {' Karan Asthana'} All rights reserved.
                </div>
                <div className="row" style={{ justifyContent: 'center' }}>
                    <a href={'https://karanasthana.github.io/travel/'} style={{ textDecoration: 'none', color: 'silver', padding: '5px', fontSize: '20px' }} target="_blank" rel="noreferrer">
                        <i class="ri-earth-fill"></i>
                    </a>
                    <a href={'https://www.linkedin.com/in/karan-asthana-b6754510a/'} style={{ textDecoration: 'none', color: 'silver', padding: '5px', fontSize: '20px' }} target="_blank" rel="noreferrer">
                        <i class="ri-linkedin-fill"></i>
                    </a>
                    <a href={'https://github.com/karanasthana/'} style={{ textDecoration: 'none', color: 'silver', padding: '5px', fontSize: '20px' }} target="_blank" rel="noreferrer">
                        <i class="ri-github-fill"></i>
                    </a>
                    <a href={'https://www.instagram.com/karan_asthana/'} style={{ textDecoration: 'none', color: 'silver', padding: '5px', fontSize: '20px' }} target="_blank" rel="noreferrer">
                        <i class="ri-instagram-fill"></i>
                    </a>
                    <a href={'https://www.facebook.com/karan.asthana1/'} style={{ textDecoration: 'none', color: 'silver', padding: '5px', fontSize: '20px' }} target="_blank" rel="noreferrer">
                        <i class="ri-facebook-fill"></i>
                    </a>
                    <a href={'mailto:karan.asthana1@gmail.com'} style={{ textDecoration: 'none', color: 'silver', padding: '5px', fontSize: '20px' }} target="_blank" rel="noreferrer">
                        <i class="ri-mail-fill"></i>
                    </a>
                </div>
            </div>
        </div>
    }
}