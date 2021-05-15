import React from 'react';
import Image from 'react-bootstrap/Image';
import './sass.scss';

function OrgzitWorkEx(props) {
   return (
      <div className="projects-section">
         <div className="" style={{ padding: '20px' }}>
               <div className="col-12">
                  <h2> ____Journey____ </h2>
               </div>
         </div>
         <div className="row" style={{ marginLeft: '20px', marginRight: '20px' }}>
               <div className="col-12 col-md-6" style={{ padding: '20px' }}>
               <Image src={'https://d3a93fg1wt2nf3.cloudfront.net/static/website/images/orgzit_logo.png'} style={{ float: 'right', height: '80px' }} />
               <Image src={'https://www.cdn.geeksforgeeks.org/wp-content/uploads/TATA_Consultancy_Services_Logo_blue.svg_.png'} style={{ float: 'right', height: '80px' }} />
               </div>
               <div className="col-12 col-md-6" style={{ padding: '20px', paddingRight: '30px' }}>
               <div>
                  <h4 style={{ color: '#178be7' }}>Orgzit.com</h4>
               </div>
               <div>
                  <span style={{ display: 'flex', color: '#5e9516', fontWeight: 'bold' }}>
                     <h5>Frontend Tech Lead</h5>
                     &nbsp; (Feb 2018 - Present)
                  </span>
               </div>
               <div>
                  New Delhi, India
               </div>
               <div style={{ marginTop: '30px' }}>
                  <p> Orgzit is a complex B2B software product encompassing the concepts of Database Virtualization and No-Code App development that serves as a custom CRM or ERP or any other custom software solution. </p>
               </div>
               <div style={{ marginTop: '30px'}}>
                  <p> Professionally, I have donned many hats at Orgzit. Some of my notable responsibilities being - </p>
                  <ul style={{ paddingLeft: '0', listStyle: 'none' }}>
                     <li>
                        Individually developed the Product’s mobile app from scratch using React Native (live on <a href="https://apps.apple.com/gb/app/orgzit/id1504448187" target="_blank" rel="noreferrer">Apple App Store</a> and the <a href="https://play.google.com/store/apps/details?id=com.orgzit.android.pro&hl=en_IN&gl=US" target="_blank" rel="noreferrer">Google Play Store</a>) <br/><br/>
                        <em>Some Important Features - </em>
                        <ul style={{ paddingLeft: '20px', listStyleType: '' }}>
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
