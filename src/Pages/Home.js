import React from 'react';
import FirstFoldAboutKaran from '../Sections/FirstFoldAboutKaran';
import Footer from '../Sections/Footer';
import OrgzitWorkEx from '../Sections/OrgzitWorkEx';

class Home extends React.Component {
   render() {
      return (
         <div>
            <FirstFoldAboutKaran />
            <OrgzitWorkEx />
            <Footer />
         </div>
      )
   }
}
export default Home;
