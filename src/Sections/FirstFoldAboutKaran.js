import React from 'react';
import Image from 'react-bootstrap/Image';
import Background from '../assets/white-bg.jpg';

export default class FirstFoldAboutKaran extends React.Component {
    render() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
               <div className="container">
                  <div className="row">
                     <div className="col-12 col-md-6" style={{ display: "flex", justifyContent: "center", flexDirection: "column", marginTop: "20px", marginBottom: "20px" }}>
                        <h1 style={{ marginBottom: '20px' }}>
                           Hi, I am <span style={{ color: 'orange' }}>Karan Asthana</span>
                        </h1>
                        <h3 style={{ marginBottom: '20px' }}>
                           Frontend Developer | Mobile Developer
                        </h3>
                        <h5 style={{ fontStyle: 'italic' }}>
                           {/* Lorem ipsum dolor sit amet */}
                        </h5>
                     </div>
                     <div className="col-12 col-md-6" style={{ maxHeight: '80vh', display: "flex", justifyContent: 'center' }}>
                        <Image src="https://travel-photos-react-website.s3.ap-south-1.amazonaws.com/IMG_8447-removebg-preview-removebg-preview.png" fluid />
                     </div>
                  </div>
               </div>
            </div>
    );
}
}