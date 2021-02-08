import React from 'react';
import { Button } from '../StyledComponents/Button';

class Home extends React.Component {
   render() {
      return (
         <div>
            <h1>Home</h1>
            <Button primary onClick={() => { console.log('Test clicked!')}}>Test</Button>
         </div>
      )
   }
}
export default Home