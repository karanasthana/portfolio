import React from 'react';
import FirstFoldAboutKaran from '../Sections/FirstFoldAboutKaran';
import Footer from '../Sections/Footer';
import OrgzitWorkEx from '../Sections/OrgzitWorkEx';
import TCSWorkEx from '../Sections/TCSWorkEx';

class Home extends React.Component {
   render() {
      return (
         <div>
            <FirstFoldAboutKaran />
            <OrgzitWorkEx />
            <TCSWorkEx />
            <Footer />
         </div>
      )
   }
}
export default Home;
