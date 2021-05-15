import React from 'react';
import Image from 'react-bootstrap/Image';
import './sass.scss';

function OrgzitWorkEx(props) {
   return (
      <div className="projects-section">
         <div className="work-ex-header">
               <div className="col-12">
                  <h2> ____Journey____ </h2>
               </div>
         </div>
         <div className="row one-work-ex">
            <div className="col-12 col-md-6 company-img-container">
               <Image className="company-img" src={'https://d3a93fg1wt2nf3.cloudfront.net/static/website/images/orgzit_logo.png'} />
            </div>
            <div className="col-12 col-md-6 company-details-container">
               <div>
                  <h4 className="company-header">Orgzit.com</h4>
               </div>
               <div>
                  <span className="company-position">
                     <h5>Frontend Tech Lead</h5>
                     &nbsp; (Feb 2018 - Present)
                  </span>
               </div>
               <div>
                  New Delhi, India
               </div>
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
            </div>
         </div>
      </div>
   )
};

export default OrgzitWorkEx;
