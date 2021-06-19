import React from 'react';
import Image from 'react-bootstrap/Image';
import Background from '../assets/Pattern-Randomized.svg';
// import Background from '../assets/Subtle-Stripes.svg';
// import Background from '../assets/Page-Turner.svg';
import './sass.scss';
import * as CONSTANTS from './../constants/constants';

export default class FirstFoldAboutKaran extends React.Component {

   componentDidMount = () => {
      this.animateRoles();
   };

   animateRoles = () => {
      const typedTextSpan = document.querySelector(".typed-text");
      const cursorSpan = document.querySelector(".cursor");

      const textArray = ["Frontend Developer", "Mobile Apps Developer", "Technical Lead", "Traveller"];
      const typingDelay = 0;
      const erasingDelay = 100;
      const newTextDelay = 500; // Delay between current and next text
      let textArrayIndex = 0;
      let charIndex = 0;

      function type() {
         if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.classList.contains("typing")) {
               cursorSpan.classList.add("typing");
            }
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
         } else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
         }
      }

      function erase() {
         if (charIndex > 0) {
            if (!cursorSpan.classList.contains("typing")) {
               cursorSpan.classList.add("typing");
            }
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
         } else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if(textArrayIndex>=textArray.length) textArrayIndex=0;
            setTimeout(type, typingDelay + 1100);
         }
      }

      document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
         if(textArray.length) setTimeout(type, newTextDelay + 200);
      });
   }

    render() {
      return (
         <div className="first-fold-section home" style={{ background: 'linear-gradient(90deg, rgba(66, 89, 237, 0.3), transparent)' }}>
            <div className="container">
               <div className="row">
                  <div className="col-12 col-md-6 about-info">
                     <h1>
                        Hi, I am <span className="color-orange">Karan Asthana</span>
                     </h1>
                     <h3>
                        <span className="typed-text color-orange"></span>
                        <span className="cursor">&nbsp;</span>
                     </h3>
                  </div>
                  <div className="col-12 col-md-6 img-container" data-aos='fade-left' data-aos-duration="500" style={{ opacity: '0.85', height: '100vh' }}>
                     <Image src={CONSTANTS.KARAN_IMG} fluid />
                  </div>
               </div>
            </div>
         </div>
         
      );
   }
}