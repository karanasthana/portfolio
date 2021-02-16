import React from 'react';
import Image from 'react-bootstrap/Image';
import Background from '../assets/white-bg.jpg';
import FirstFoldAboutKaran from './FirstFoldAboutKaran';
import Footer from './Footer';

class Home extends React.Component {
   render() {
      return (
         <div>
            <FirstFoldAboutKaran />
            <Footer />
         </div>
      )
   }
}
export default Home;
