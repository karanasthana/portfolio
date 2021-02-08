import React from 'react';
// import { Button } from '../StyledComponents/Button';

class Home extends React.Component {
   render() {
      return (
         <div className="container">
            {/* <h1>Home</h1>
            <Button primary onClick={() => { console.log('Test clicked!')}}>Test</Button> */}
            <div className="row">
               <div className="col-12 col-md-4">
                  <h1>
                     Hi, I am <span style={{ color: 'gold' }}>Karan Asthana</span>
                  </h1>
               </div>
               <div className="col-12 col-md-8">
                  <h1>
                     Hello, I am Karan
                  </h1>
               </div>
            </div>
         </div>
      )
   }
}
export default Home;
