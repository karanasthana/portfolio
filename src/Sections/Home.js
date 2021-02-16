import React from 'react';
// import { Button } from '../StyledComponents/Button';
import Image from 'react-bootstrap/Image';
import Background from '../assets/white-bg.jpg';
import Footer from './Footer';

class Home extends React.Component {
   render() {
      return (
         <div>
            <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
               <div className="container">
                  <div className="row">
                     <div className="col-12 col-md-6" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginTop: "20px", marginBottom: "20px" }}>
                        <h1>
                           Hi, I am <span style={{ color: 'orange' }}>Karan Asthana</span>
                        </h1>
                        <h2>
                           Frontend Developer
                        </h2>
                     </div>
                     <div className="col-12 col-md-6" style={{ maxHeight: '80vh', display: "flex", justifyContent: 'center' }}>
                        <Image src="https://travel-photos-react-website.s3.ap-south-1.amazonaws.com/IMG_8447-removebg-preview-removebg-preview.png" fluid />
                     </div>
                  </div>
               </div>
            </div>
            <Footer />
         </div>
      )
   }
}
export default Home;
