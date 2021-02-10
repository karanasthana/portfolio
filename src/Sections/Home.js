import React from 'react';
// import { Button } from '../StyledComponents/Button';
import Image from 'react-bootstrap/Image';
import Background from '../assets/white-bg.jpg';

class Home extends React.Component {
render() {
      return (
         <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
            <div className="container">
            {/* <h1>Home</h1>
               <Button primary onClick={() => { console.log('Test clicked!')}}>Test</Button> */}
               <div className="row">
                  <div className="col-12 col-md-6" style={{ display: "flex", alignItems: "center" }}>
                     <h1>
                        Hi, I am <span style={{ color: 'orange' }}>Karan Asthana</span>
                     </h1>
                  </div>
                  <div className="col-12 col-md-6" style={{ maxHeight: '80vh', display: "flex", justifyContent: 'center' }}>
                     <Image src="https://travel-photos-react-website.s3.ap-south-1.amazonaws.com/IMG_8447-removebg-preview-removebg-preview.png" fluid />
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
export default Home