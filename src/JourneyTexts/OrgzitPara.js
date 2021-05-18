/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState} from 'react';
import '../Sections/sass.scss';
import { Modal } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Button } from '../StyledComponents/Button';

const OrgzitPara = props => {
    const [showDialog, setShowDialog] = useState(false);

    const handleClose = () => setShowDialog(false);
    const handleShow = () => setShowDialog(true);

    return (
        <>
            <div className="para">
                <p> <em><a href="orgzit.com">Orgzit</a> is a complex B2B software product encompassing the concepts of Database Virtualization and No-Code App development that serves as a custom CRM or ERP or any other custom software solution.</em></p>
            </div>
            <div className="para">
                <p> Some of my notable responsibilities at Orgzit - </p>
                <ul className="reponsibilities">
                    <li style={{ marginBottom: '10px' }}>Individually developed the Product’s mobile app from scratch using React Native (live on <a href="https://apps.apple.com/gb/app/orgzit/id1504448187" target="_blank" rel="noreferrer">Apple App Store</a> and the <a href="https://play.google.com/store/apps/details?id=com.orgzit.android.pro&hl=en_IN&gl=US" target="_blank" rel="noreferrer">Google Play Store</a>) <br/> </li>
                    <li style={{ marginBottom: '10px' }}>Solely handled webapp Frontend development, adding new features, inreasing product performance</li>
                    <li style={{ marginBottom: '10px' }}>Worked on the existing Android application built on Java, adding features like dynamic forms, websockets etc</li>
                    <a href="javascript:;" onClick={() => handleShow()}>Read More</a>
                </ul>
            </div>
            <Modal show={showDialog} onHide={handleClose} style={{ zIndex: '2000' }} size="xl">
                <Modal.Header closeButton className='modal-header'>
                    <Modal.Title>
                        <Image src={'https://media-exp1.licdn.com/dms/image/C4D0BAQFXmjcLugUNsQ/company-logo_200_200/0/1519906878959?e=2159024400&v=beta&t=o7ayzYc-kbvEXZSlCF6e8UKficNlzVsXtd5omtk9ww8'} style={{ height: '30px', width: '30px', marginRight: '10px' }} />
                        ORGZIT
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="para">
                        <p> <em>Orgzit is a complex B2B software product encompassing the concepts of Database Virtualization and No-Code App development that serves as a custom CRM or ERP or any other custom software solution.</em></p>
                    </div>
                    <div className="para">
                        <p> Professionally, I have donned many hats at Orgzit. Some of my notable responsibilities being - </p>
                        <ul className="reponsibilities">
                            <li style={{ marginBottom: '4px' }}>Individually developed the Product’s <strong>Mobile Application</strong> from scratch using React Native (live on <a href="https://apps.apple.com/gb/app/orgzit/id1504448187" target="_blank" rel="noreferrer">Apple App Store</a> and the <a href="https://play.google.com/store/apps/details?id=com.orgzit.android.pro&hl=en_IN&gl=US" target="_blank" rel="noreferrer">Google Play Store</a>) <br/> </li>
                            <li style={{ marginBottom: '15px' }}>
                                <em>Some Important Features - </em>
                                <ul className="features-list">
                                    <li>Architectural Setup involving a complex Navigation, Redux architecture</li>
                                    <li>Push Notifications</li>
                                    <li>@ Mention Comments</li>
                                    <li>Crash Reporting, Usage Analytics</li>
                                    <li>Image and File Uploads</li>
                                    <li>Release Management for iOS and Android apps</li>
                                </ul>
                            </li>
                            <li style={{ marginBottom: '4px' }}>Solely handled <strong>Webapp Frontend</strong> development, adding new features, inreasing product performance</li>
                            <li style={{ marginBottom: '15px' }}>
                                <em>Some Important Features - </em>
                                <ul className="features-list">
                                    <li>In house Account Usage Reporting module & MixPanel integration</li>
                                    <li>Rule-based automation on conditional triggers (runtime rule-formation & evaluation)</li>
                                    <li>Calendar & Kanban View of database records</li>
                                    <li>Dynamic Filtering of Records for instant reporting</li>
                                    <li>Cloud Telephony Integration with Twilio leveraging websockets & Backend APIs</li>
                                    <li>Used Google Chrome’s Lighthouse to optimise Website performance, increasing the desktop version’s performance by a whopping 168.8% (performance score 32 to 86)</li>
                                    <li>Maintain and Enhance the current product website (<a href="orgzit.com" target="_blank">Orgzit.com</a>)</li>
                                </ul>
                            </li>
                            <li style={{ marginBottom: '4px' }}>Worked on the existing <strong>Android Application</strong> built on Java, adding features like dynamic forms, websockets etc</li>
                            <li style={{ marginBottom: '15px' }}>
                                <em>Some Important Features - </em>
                                <ul className="features-list">
                                    <li>Performance optimisations, reducing 75% of the wait time using Caching implementation, which, also caused a decrease in 15% API hits on backend</li>
                                    <li>Numerous 3rd party Integrations such as Crashlytics, Intercom etc</li>
                                    <li>Several Business logic implementation features</li>
                                </ul>
                            </li>
                            <li style={{ marginBottom: '4px' }}>Apart from these technical responsibilities, I have also shouldered responsibilities in the following domains</li>
                            <li style={{ marginBottom: '15px' }}>
                                <em>Some Important Responsibilites - </em>
                                <ul className="features-list">
                                    <li>Worked heavily on Relational Database Schemas setting up systems for multinational clients like the World Bank (WRG Group), Amazon.in (Prione group), CD Tampa (Florida), Enhanced Wapp Systems, CAVH (Florida)</li>
                                    <li>Served as a temporary Product Manager, creating short product roadmaps and prioritising feature development for all developers</li>
                                    <li>Several Business logic implementation features</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default OrgzitPara;
