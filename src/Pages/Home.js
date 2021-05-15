import React from 'react';
import FirstFoldAboutKaran from '../Sections/FirstFoldAboutKaran';
import Footer from '../Sections/Footer';
import WorkEx from '../Sections/WorkEx';

class Home extends React.Component {
   render() {
      return (
         <div>
            <FirstFoldAboutKaran />
            <WorkEx />
            <Footer />
         </div>
      )
   }
}
export default Home;
