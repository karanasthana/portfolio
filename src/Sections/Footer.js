import React from 'react';
import { Button } from '../StyledComponents/Button';
import './sass.scss';
import * as CONSTANTS from '../constants/constants';
import Image from 'react-bootstrap/Image';

export default class Footer extends React.Component {
    render() {
        return <div className="footer-section">
            <div className="container">
                <div className="pdf-row">
                    <Button primary>
                        <a href={CONSTANTS.RESUME_PDF_LINK} target="_blank" rel="noreferrer" download style={{  }}>
                            PDF Resume
                        </a>
                    </Button>
                </div>
                <div className="footer-icons-row">
                    <div className="row icons-container col-xs-12 col-sm-6 ">
                        <a href={CONSTANTS.TRAVEL_LINK} target="_blank" rel="noreferrer">
                            <i className="ri-earth-fill"></i>
                            My Travel Scrapbook
                        </a>
                        <a href={CONSTANTS.LINKEDIN_LINK} target="_blank" rel="noreferrer">
                            <i className="ri-linkedin-fill"></i>
                            LinkedIn
                        </a>
                        <a href={CONSTANTS.GITHUB_LINK} target="_blank" rel="noreferrer">
                            <i className="ri-github-fill"></i>
                            Github
                        </a>
                        <a href={CONSTANTS.INSTAGRAM_LINK} target="_blank" rel="noreferrer">
                            <i className="ri-instagram-fill"></i>
                            Instagram
                        </a>
                        <a href={CONSTANTS.FACEBOOK_LINK} target="_blank" rel="noreferrer">
                            <i className="ri-facebook-fill"></i>
                            Facebook
                        </a>
                        <a href={CONSTANTS.EMAILTO_LINK} target="_blank" rel="noreferrer">
                            <i className="ri-mail-fill"></i>
                            Contact Me
                        </a>
                    </div>
                    <div className="copyright-container col-xs-12 col-sm-6 ">
                        <span>Copyright <i className ="ri-copyright-line" /> Karan Asthana All rights reserved.</span>
                        <Image src={CONSTANTS.KARAN_DP_IMG_LINK} rounded fluid className="footer-img-karan" />
                    </div>
                </div>
            </div>
        </div>
    }
}