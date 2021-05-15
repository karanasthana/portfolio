import React from 'react';
import './sass.scss';

function OrgzitPara(props) {
    return (
        <>
        <div className="para">
            <p> Orgzit is a complex B2B software product encompassing the concepts of Database Virtualization and No-Code App development that serves as a custom CRM or ERP or any other custom software solution. </p>
        </div>
        <div className="para">
            <p> Professionally, I have donned many hats at Orgzit. Some of my notable responsibilities being - </p>
            <ul className="reponsibilities">
                <li>
                Individually developed the Product’s mobile app from scratch using React Native (live on <a href="https://apps.apple.com/gb/app/orgzit/id1504448187" target="_blank" rel="noreferrer">Apple App Store</a> and the <a href="https://play.google.com/store/apps/details?id=com.orgzit.android.pro&hl=en_IN&gl=US" target="_blank" rel="noreferrer">Google Play Store</a>) <br/><br/>
                <em>Some Important Features - </em>
                <ul className="features-list">
                    <li>Architectural Setup involving a complex Navigation, Redux </li>
                    <li>Push Notifications</li>
                    <li>@ Mention Comments</li>
                    <li>Crash Detection, Usage Analytics</li>
                    <li>Image and File Uploads</li>
                </ul>
                </li>
            </ul>
        </div>
        </>
    );
};

export default OrgzitPara;
