import React from 'react';
import Image from 'react-bootstrap/Image';
import Background from '../assets/white-bg.jpg';
import './sass.scss';
import * as CONSTANTS from './../constants/constants';

export default class FirstFoldAboutKaran extends React.Component {
    render() {
      return (
         <div className="first-fold-section" style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
               <div className="container">
                  <div className="row">
                     <div className="col-12 col-md-6 about-info">
                        <h1>
                           Hi, I am <span className="color-orange">Karan Asthana</span>
                        </h1>
                        <h3>
                           Web Developer | Mobile Developer
                        </h3>
                        <h5>
                           {/* Lorem ipsum dolor sit amet */}
                        </h5>
                     </div>
                     <div className="col-12 col-md-6 img-container">
                        <Image src={CONSTANTS.KARAN_IMG} fluid />
                     </div>
                  </div>
               </div>
            </div>
      );
   }
}